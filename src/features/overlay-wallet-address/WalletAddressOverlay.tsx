import React, { useState } from "react";
import * as S from "./WalletAddressOverlay.styled";

import ChevronRightIcon from "@icons/chevron-right.svg?react";
import CopyIcon from "@icons/copy.svg?react";
import CheckIcon from "@icons/check.svg?react";
import ExclamationIcon from "@icons/exclamation-circle.svg?react";
import { QRCodeSVG } from "qrcode.react";

import TetherTrc20Icon from "@/assets/icons/thether-trc20-icon.svg?url";
import TronIcon from "@/assets/icons/tron-icon.svg?url";
import TonIcon from "@/assets/icons/ton-icon.svg?url";
import BtcIcon from "@/assets/icons/bitcoin-icon.svg?url";

import { useTranslation } from "react-i18next";
import { PageHeader } from "@/shared/components/PageHeader/PageHeader";
import useApplicationStore from "@/shared/stores/application";
import { useSafeAreaInsets } from "@/shared/hooks/useSafeAreaInsets";

interface WalletAddressOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  cryptoName: string;
  network: string;
  address: string;
  commission: string;
  onCommissionClick?: () => void;
}

const cryptoIcons: Record<string, string> = {
  USDT: TetherTrc20Icon,
  TRC20: TronIcon,
  TON: TonIcon,
  BTC: BtcIcon,
};

export const WalletAddressOverlay: React.FC<WalletAddressOverlayProps> = ({
                                                                            isOpen,
                                                                            onClose,
                                                                            cryptoName,
                                                                            network,
                                                                            address,
                                                                            commission,
                                                                            onCommissionClick,
                                                                          }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const { fullscreen } = useApplicationStore();
  const { bottom, top } = useSafeAreaInsets();

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Ошибка копирования:", err);
    }
  };

  return (
    <S.OverlayWrapper insetTop={fullscreen ? top + 50 : top}>
      <PageHeader
        title={t("currency.overlays.walletAddress.title", { crypto: cryptoName })}
        onBack={onClose}
      />

      <S.Content>
        <S.SectionTitle>
          {t("currency.overlays.walletAddress.sectionTitle")}
        </S.SectionTitle>

        <S.QRCard>
          <QRCodeSVG
            value={address}
            size={170}
            imageSettings={{
              src: cryptoIcons[cryptoName] || cryptoIcons[network],
              height: 55,
              width: 55,
              excavate: true,
            }}
          />

          <S.AddressLabel>
            {t("currency.overlays.walletAddress.addressLabel", {
              crypto: cryptoName,
              network,
            })}
          </S.AddressLabel>

          <S.AddressRow>
            <S.Address>{address}</S.Address>
            <S.CopyIconButton onClick={handleCopy}>
              <CopyIcon />
            </S.CopyIconButton>
          </S.AddressRow>

          <S.AddressHint>
            {t("currency.overlays.walletAddress.addressHint", {
              crypto: cryptoName,
              network,
            })}
          </S.AddressHint>

          <S.CommissionButton onClick={onCommissionClick}>
            <div className="left">
              <ExclamationIcon className="icon" />
              <span
                dangerouslySetInnerHTML={{
                  __html: t("currency.overlays.walletAddress.commission", {
                    value: commission,
                  }),
                }}
              />
            </div>
            <ChevronRightIcon className="chevron" />
          </S.CommissionButton>

          <S.CopyNotification $visible={copied}>
            <CheckIcon />
            {t("currency.overlays.walletAddress.copied")}
          </S.CopyNotification>
        </S.QRCard>
      </S.Content>

      <S.BottomActions $insetBottom={bottom}>
        <S.MainButton onClick={handleCopy}>
          {t("currency.overlays.walletAddress.buttons.copy")}
        </S.MainButton>
        <S.SecondaryButton onClick={onClose}>
          {t("currency.overlays.walletAddress.buttons.home")}
        </S.SecondaryButton>
      </S.BottomActions>
    </S.OverlayWrapper>
  );
};

export default WalletAddressOverlay;
