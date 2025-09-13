export interface QRScannerProps {
  isVisible: boolean;
  onScan: (qr: string) => void;
  onClose?: () => void;
  title?: string;
}

export interface QRScannerState {
  isScanning: boolean;
  error: string | null;
  qrScanner: any | null;
}

export interface PaymentData {
  title: string;
  amount: string;
  currency: string;
}