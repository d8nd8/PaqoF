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
  amountInRubles: string;
  icon?: string | React.ReactNode;
  iconColor?: string;
  useCustomIcon?: boolean;
}

interface CryptoItemProps {
  data: CryptoItemData;
  onClick?: (crypto: CryptoItemData) => void;
  showRightSection?: boolean;
  rightSection?: React.ReactNode;
  disableNavigation?: boolean;
}

export const CryptoItem: React.FC<CryptoItemProps> = ({
                                                 data,
                                                 onClick,
                                                 showRightSection = true,
                                                 rightSection,
                                                 disableNavigation = false,
                                               }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick?.(data);

    if (!disableNavigation) {
      navigate(`/currency?symbol=${data.symbol}`);
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

  return (
    <S.CryptoItemContainer onClick={handleClick}>
      <S.CryptoIcon color={data.iconColor} isUSDT={data.symbol === 'USDT'}>
        {renderIcon()}
      </S.CryptoIcon>

      <S.CryptoInfo>
        <S.CryptoName>{data.name}</S.CryptoName>
        <S.CryptoRubles>{data.amountInRubles}</S.CryptoRubles>
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
}

export const CryptoList: React.FC<CryptoListProps> = ({
                                                        cryptos,
                                                        onCryptoClick,
                                                        showRightSection = true,
                                                        renderRightSection,
                                                        disableNavigation = false,
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
        />
      ))}
    </S.CryptoListContainer>
  );
};
