import { useCallback, useEffect, useRef, useState } from 'react';
import { Html5Qrcode, Html5QrcodeScannerState } from 'html5-qrcode';
import type { Html5QrcodeCameraScanConfig } from 'html5-qrcode';

type UseQRScannerReturn = {
  isScanning: boolean;
  error: string | null;
  initializeScanner: () => void;
  closeScanner: () => void;
  retryScanner: () => void;
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

  const scanSuccess = useCallback(
    (decodedText: string) => {
      onScan(decodedText);
      closeScanner();
    },
    [onScan]
  );

  const initializeScanner = useCallback(() => {
    if (qrScannerRef.current) return;

    const config: Html5QrcodeCameraScanConfig = {
      fps: 10,
      qrbox: { width: 250, height: 250 }
    };

    const scanner = new Html5Qrcode(containerId);
    qrScannerRef.current = scanner;

    scanner
      .start({ facingMode: 'environment' }, config, scanSuccess, () => {})
      .then(() => {
        setIsScanning(true);
        setError(null);

        const video = document.querySelector('video');
        const stream = video?.srcObject instanceof MediaStream ? video.srcObject : null;
        const track = stream?.getVideoTracks()?.[0] ?? null;

        if (track) {
          streamTrackRef.current = track;
        }
      })
      .catch(() => {
        setError('Не удалось запустить камеру');
        setIsScanning(false);
      });
  }, [scanSuccess]);

  const closeScanner = useCallback(() => {
    const scanner = qrScannerRef.current;

    if (scanner && scanner.getState() !== Html5QrcodeScannerState.NOT_STARTED) {
      scanner.stop().then(() => {
        scanner.clear();
        qrScannerRef.current = null;
        streamTrackRef.current = null;
        setIsScanning(false);
      });
    } else {
      qrScannerRef.current = null;
      streamTrackRef.current = null;
      setIsScanning(false);
    }
  }, []);

  const retryScanner = useCallback(() => {
    closeScanner();
    setTimeout(() => {
      initializeScanner();
    }, 300);
  }, [closeScanner, initializeScanner]);

  const toggleTorch = useCallback(() => {
    const track = streamTrackRef.current;
    if (!track) return;

    const capabilities = track.getCapabilities?.() as MediaTrackCapabilities & { torch?: boolean };
    if (!capabilities?.torch) return;

    const settings = track.getSettings() as MediaTrackSettings & { torch?: boolean };
    const isTorchOn = settings.torch === true;

    track
      .applyConstraints({
        advanced: [
          {
            ...( { torch: !isTorchOn } as MediaTrackConstraintSet & { torch: boolean } )
          }
        ]
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
    containerId
  };
}
