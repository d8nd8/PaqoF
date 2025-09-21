import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './CryptoList.styled';
import UsdtIcon from '@icons/usdt-icon.svg?react';
import TonIcon from '@icons/ton-icon.svg?react';
import BtcIcon from '@icons/bitcoin-icon.svg?react';

export interface CryptoItemData {
  id: string;
  name: string;
  symbol: string;
  amount: string;
  amountInRubles?: string;
  priceInRubles?:string;
  icon?: string | React.ReactNode;
  iconColor?: string;
  useCustomIcon?: boolean;
}

type InfoVariant = 'price' | 'amount' | 'both';

interface CryptoItemProps {
  data: CryptoItemData;
  onClick?: (crypto: CryptoItemData) => void;
  showRightSection?: boolean;
  rightSection?: React.ReactNode;
  disableNavigation?: boolean;
  infoVariant?: InfoVariant;
}

export const CryptoItem: React.FC<CryptoItemProps> = ({
                                                        data,
                                                        onClick,
                                                        showRightSection = true,
                                                        rightSection,
                                                        disableNavigation = false,
                                                        infoVariant = 'price',
                                                      }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick?.(data);
    if (!disableNavigation) {
      navigate(`/currency?walletId=${data.id}`);
    }
  };

  const renderIcon = () => {
    switch (data.symbol) {
      case 'USDT':
        return <UsdtIcon />;
      case 'TON':
        return <TonIcon />;
      case 'BTC':
        return <BtcIcon />;
      default:
        if (data.useCustomIcon && React.isValidElement(data.icon)) {
          return data.icon;
        }
        return <S.CryptoIconText>{data.icon}</S.CryptoIconText>;
    }
  };

  const renderInfo = () => {
    switch (infoVariant) {
      case 'price':
        return <S.CryptoRubles>{data.priceInRubles}</S.CryptoRubles>;
      case 'amount':
        return <S.CryptoRubles>{data.amount}</S.CryptoRubles>;
      case 'both':
        return (
          <>
            <S.CryptoRubles>{data.amount}</S.CryptoRubles>
            <S.CryptoRubles>{data.priceInRubles}</S.CryptoRubles>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <S.CryptoItemContainer onClick={handleClick}>
      <S.CryptoIcon color={data.iconColor} isUSDT={data.symbol === 'USDT'}>
        {renderIcon()}
      </S.CryptoIcon>

      <S.CryptoInfo>
        <S.CryptoName>{data.name}</S.CryptoName>
        {renderInfo()}
      </S.CryptoInfo>

      {showRightSection &&
        (rightSection || (
          <S.CryptoAmount>
            <S.CryptoAmountValue>{data.amount}</S.CryptoAmountValue>
            <S.CryptoAmountInRubles>{data.amountInRubles}</S.CryptoAmountInRubles>
          </S.CryptoAmount>
        ))}
    </S.CryptoItemContainer>
  );
};

interface CryptoListProps {
  cryptos: CryptoItemData[];
  onCryptoClick?: (crypto: CryptoItemData) => void;
  showRightSection?: boolean;
  renderRightSection?: (crypto: CryptoItemData) => React.ReactNode;
  disableNavigation?: boolean;
  infoVariant?: InfoVariant;
}

export const CryptoList: React.FC<CryptoListProps> = ({
                                                        cryptos,
                                                        onCryptoClick,
                                                        showRightSection = true,
                                                        renderRightSection,
                                                        disableNavigation = false,
                                                        infoVariant = 'price',
                                                      }) => {
  return (
    <S.CryptoListContainer>
      {cryptos.map((crypto) => (
        <CryptoItem
          key={crypto.id}
          data={crypto}
          onClick={onCryptoClick}
          showRightSection={showRightSection}
          rightSection={renderRightSection?.(crypto)}
          disableNavigation={disableNavigation}
          infoVariant={infoVariant}
        />
      ))}
    </S.CryptoListContainer>
  );
};
