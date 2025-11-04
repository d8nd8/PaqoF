import { useCallback, useEffect, useRef, useState } from 'react';
import { Html5Qrcode, Html5QrcodeScannerState } from 'html5-qrcode';
import type { Html5QrcodeCameraScanConfig } from 'html5-qrcode';

type UseQRScannerReturn = {
  isScanning: boolean;
  error: string | null;
  initializeScanner: () => Promise<void>;
  closeScanner: () => Promise<void>;
  retryScanner: () => Promise<void>;
  toggleTorch: () => void;
  containerId: string;
};

export function useQRScanner(
  isVisible: boolean,
  onScan: (result: string) => void
): UseQRScannerReturn {
  const qrScannerRef = useRef<Html5Qrcode | null>(null);
  const streamTrackRef = useRef<MediaStreamTrack | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const containerId = 'qr-scanner-container';
  const isStartingRef = useRef(false);

  const scanSuccess = useCallback(
    (decodedText: string) => {
      onScan(decodedText);
      closeScanner();
    },
    [onScan]
  );

  const initializeScanner = useCallback(async () => {
    if (isStartingRef.current || qrScannerRef.current) return;
    isStartingRef.current = true;

    try {
      const config: Html5QrcodeCameraScanConfig = {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      };

      const scanner = new Html5Qrcode(containerId);
      qrScannerRef.current = scanner;

      await scanner.start({ facingMode: 'environment' }, config, scanSuccess, () => {});
      setIsScanning(true);
      setError(null);


      setTimeout(() => {
        document.querySelectorAll('.qr-shaded-region').forEach((el) => {
          (el as HTMLElement).style.background = 'transparent';
        });


        const video = document.querySelector('video');
        if (video) {
          video.style.filter = 'brightness(1.25) contrast(1.15) saturate(1.1)';
          video.style.opacity = '1';
          video.style.background = 'transparent';
        }

        document.querySelectorAll('canvas').forEach((el) => {
          (el as HTMLElement).style.opacity = '0';
          (el as HTMLElement).style.background = 'transparent';
        });
      }, 1000);

      const video = document.querySelector('video');
      const stream = video?.srcObject instanceof MediaStream ? video.srcObject : null;
      const track = stream?.getVideoTracks()?.[0] ?? null;
      if (track) streamTrackRef.current = track;

    } catch {
      setIsScanning(false);
    } finally {
      isStartingRef.current = false;
    }
  }, [scanSuccess]);

  const closeScanner = useCallback(async () => {
    const scanner = qrScannerRef.current;

    if (!scanner) {
      qrScannerRef.current = null;
      streamTrackRef.current = null;
      setIsScanning(false);
      return;
    }

    const state = scanner.getState?.();
    if (!state || state === Html5QrcodeScannerState.NOT_STARTED) {
      qrScannerRef.current = null;
      streamTrackRef.current = null;
      setIsScanning(false);
      return;
    }

    try {
      await scanner.stop();
      await scanner.clear();
    } finally {
      qrScannerRef.current = null;
      streamTrackRef.current = null;
      setIsScanning(false);
    }
  }, []);

  const retryScanner = useCallback(async () => {
    await closeScanner();
    await new Promise((r) => setTimeout(r, 300));
    await initializeScanner();
  }, [closeScanner, initializeScanner]);

  const toggleTorch = useCallback(() => {
    const track = streamTrackRef.current;
    if (!track) return;

    const capabilities = track.getCapabilities?.() as MediaTrackCapabilities & { torch?: boolean };
    if (!capabilities?.torch) {
      return;
    }

    const settings = track.getSettings() as MediaTrackSettings & { torch?: boolean };
    const isTorchOn = settings.torch === true;

    track
      .applyConstraints({
        advanced: [
          {
            ...( { torch: !isTorchOn } as MediaTrackConstraintSet & { torch: boolean } ),
          },
        ],
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (isVisible) {
      initializeScanner();
    } else {
      closeScanner();
    }

    return () => {
      closeScanner();
    };
  }, [isVisible, initializeScanner, closeScanner]);

  return {
    isScanning,
    error,
    initializeScanner,
    closeScanner,
    retryScanner,
    toggleTorch,
    containerId,
  };
}
