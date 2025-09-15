import React, { useState } from 'react';
import { BottomSheet } from '@/shared/components/BottomSheet/BottomSheet';
import { OverlayCryptoSelection } from '@/features/overlay-crypto-selection';
import { CurrencyButton } from './CurrencyButton';
import * as S from './PaymentOverlay.styled';
import type { CryptoItemData } from '@/features/crypto-list/CryptoList'
import ErrorIcon from '@icons/scanner/qr-error.svg?react'

export type PaymentStep = 'form' | 'processing' | 'success' | 'error';

export interface PaymentOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCurrency?: CryptoItemData;
  availableCurrencies: CryptoItemData[];
  onCurrencySelect: (currency: CryptoItemData) => void;
  amount?: string;
  exchangeRate?: string;
  commission?: string;
  onPayment: (currency: CryptoItemData, amount: string) => Promise<void>;
  step?: PaymentStep;
  error?: string;
}

export const PaymentOverlay: React.FC<PaymentOverlayProps> = ({
                                                                isOpen,
                                                                onClose,
                                                                selectedCurrency,
                                                                availableCurrencies,
                                                                onCurrencySelect,
                                                                amount = '15.095 USDT',
                                                                exchangeRate = '85.49 USDT',
                                                                commission = '20 сек',
                                                                onPayment,
                                                                step = 'form',
                                                                error
                                                              }) => {
  const [currentStep, setCurrentStep] = useState<PaymentStep>(step);
  const [showCurrencySelector, setShowCurrencySelector] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCurrencyButtonClick = () => {
    setShowCurrencySelector(true);
  };

  const handleCurrencySelect = (currency: CryptoItemData) => {
    onCurrencySelect(currency);
    setShowCurrencySelector(false);
  };

  const handlePayment = async () => {
    if (!selectedCurrency) return;

    setIsLoading(true);

    try {
      await onPayment(selectedCurrency, amount);
      setCurrentStep('success');
    } catch (error) {
      setCurrentStep('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setCurrentStep('form');
  };

  const renderFormStep = () => (
    <S.PaymentFormContainer>
      <S.PaymentDetails>
        <S.DetailRow>
          <S.DetailLabel>Сумма</S.DetailLabel>
          <S.DetailValue>{amount}</S.DetailValue>
        </S.DetailRow>
        <S.DetailRow>
          <S.DetailLabel>Курс обмена</S.DetailLabel>
          <S.DetailValue>{exchangeRate}</S.DetailValue>
        </S.DetailRow>
        <S.DetailRow>
          <S.DetailLabel>Обновится через</S.DetailLabel>
          <S.DetailValue>{commission}</S.DetailValue>
        </S.DetailRow>
      </S.PaymentDetails>

      <S.CurrencySection>
        <CurrencyButton
          currency={selectedCurrency}
          onClick={handleCurrencyButtonClick}
          hasOptions={availableCurrencies.length > 0}
        />
      </S.CurrencySection>

      <S.TotalSection>
        <S.TotalLabel>
          Итого:
          <S.CommissionNote>комиссия 0%</S.CommissionNote>
        </S.TotalLabel>
        <S.TotalAmount>{amount}</S.TotalAmount>
      </S.TotalSection>
    </S.PaymentFormContainer>
  );

  const renderSuccessStep = () => (
    <S.StatusContainer>
      <S.StatusHeader success>
        Транзакция выполнена
        <S.StatusDate>20.05.2024, 17:41</S.StatusDate>
      </S.StatusHeader>


      <S.StatusAmount>{amount}</S.StatusAmount>

      <S.StatusDetails>
        <S.DetailRow>
          <S.DetailLabel>Сумма</S.DetailLabel>
          <S.DetailValue>{amount}</S.DetailValue>
        </S.DetailRow>
        <S.DetailRow>
          <S.DetailLabel>Курс обмена</S.DetailLabel>
          <S.DetailValue>{exchangeRate}</S.DetailValue>
        </S.DetailRow>
      </S.StatusDetails>
    </S.StatusContainer>
  );

  const renderErrorStep = () => (
    <S.StatusContainer>
      <S.StatusHeader>Возникла проблема</S.StatusHeader>

      <ErrorIcon />

      <S.ErrorTitle>Что-то не так с QR-кодом</S.ErrorTitle>
      <S.ErrorDescription>
        Этот QR-код не сработал. Попробуйте ещё раз или запросите новый для оплаты
      </S.ErrorDescription>
    </S.StatusContainer>
  );

  const renderContent = () => {
    switch (currentStep) {
      case 'success':
        return renderSuccessStep();
      case 'error':
        return renderErrorStep();
      default:
        return renderFormStep();
    }
  };

  const getButtonText = () => {
    switch (currentStep) {
      case 'processing':
        return 'На главную';
      case 'success':
        return 'На главную';
      case 'error':
        return 'Отсканировать снова';
      default:
        return 'Оплатить';
    }
  };

  const handleButtonClick = () => {
    switch (currentStep) {
      case 'error':
        handleRetry();
        break;
      case 'success':
      case 'processing':
        onClose();
        break;
      default:
        handlePayment();
    }
  };

  return (
    <>
      <BottomSheet
        isOpen={isOpen}
        onClose={onClose}
        title=""
        showBottomButton={true}
        bottomButtonText={getButtonText()}
        onBottomButtonClick={handleButtonClick}
        isBottomButtonDisabled={isLoading}
        closeButtonText="Закрыть"
        status={['processing','success'].includes(currentStep) ? 'success' : 'default'}
        showCloseButton={currentStep !== 'success'}
        showHeader={currentStep === 'form'}
      >
        {renderContent()}
      </BottomSheet>

      <OverlayCryptoSelection
        isOpen={showCurrencySelector}
        onClose={() => setShowCurrencySelector(false)}
        cryptos={availableCurrencies}
        selectedCryptoId={selectedCurrency?.id}
        onCryptoSelect={handleCurrencySelect}
        title="Счёт оплаты"
      />
    </>
  );
};