import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BaseLayout } from "@/widgets/base-layout";
import { QRScannerOverlay } from '@/features/qr-scanner';

export const QRScannerPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate(-1);
  };

  const handlePay = () => {
    console.log('Processing payment...');
    setIsOpen(false);
    navigate('/main');
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <BaseLayout showNavbar={false}>
      <QRScannerOverlay
        isOpen={isOpen}
        onClose={handleClose}
        onPay={handlePay}
      />
    </BaseLayout>
  );
};

export default QRScannerPage;