import React from 'react';
import CheckIcon from '@icons/check.svg?react';
import * as S from './OverlayCryptoSelection.styled';
import { type CryptoItemData, CryptoList } from '@/features/crypto-list/CryptoList'
import { BottomSheet } from '@/shared/components/BottomSheet/BottomSheet'

export interface OverlayCryptoSelectionProps {
  isOpen: boolean;
  onClose: () => void;
  cryptos: CryptoItemData[];
  selectedCryptoId?: string;
  onCryptoSelect: (crypto: CryptoItemData) => void;
  title?: string;
}

export const OverlayCryptoSelection: React.FC<OverlayCryptoSelectionProps> = ({
                                                                                isOpen,
                                                                                onClose,
                                                                                cryptos,
                                                                                selectedCryptoId,
                                                                                onCryptoSelect,
                                                                                title = 'Выберите криптовалюту'
                                                                              }) => {
  const handleCryptoClick = (crypto: CryptoItemData) => {
    console.log('🔥 Clicked crypto:', crypto);
    console.log('🔥 Current selected:', selectedCryptoId);
    onCryptoSelect(crypto);
    onClose();
  };

  const renderRightSection = (crypto: CryptoItemData) => {
    const isSelected = crypto.id === selectedCryptoId;
    console.log(`🎯 Crypto ${crypto.name} (${crypto.id}) - Selected: ${isSelected}`);

    return (
      <S.SelectionIndicator $isSelected={isSelected}>
        <CheckIcon />
      </S.SelectionIndicator>
    );
  };

  console.log('🚀 OverlayCryptoSelection render:', {
    isOpen,
    selectedCryptoId,
    cryptosCount: cryptos.length,
    cryptoIds: cryptos.map(c => c.id)
  });

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      showBottomButton={false}
      closeButtonText="✕"
    >
      <S.OverlayCryptoSelectionContent>
        <CryptoList
          cryptos={cryptos}
          onCryptoClick={handleCryptoClick}
          showRightSection={true}
          renderRightSection={renderRightSection}
        />
      </S.OverlayCryptoSelectionContent>
    </BottomSheet>
  );
};