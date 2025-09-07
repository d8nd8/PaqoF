import React from 'react';
import * as S from './ReferralCodes.styled';
import { Input } from '@/shared/components/Input'
import CopyIcon from '@/assets/icons/profile/copy-outline.svg?react';


type Props = {
  referralCode?: string;
  referralLink?: string;
  onCopyCode?: (text: string) => void;
  className?: string;
};

export const ReferralCodes: React.FC<Props> = ({
                                                 referralCode = 'dko777ka',
                                                 referralLink = 'https://t.me/papagowallet',
                                                 onCopyCode,
                                                 className
                                               }) => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    onCopyCode?.(text);
  };

  return (
    <S.CodesSection className={className}>
      <Input
        label="Реферальный код"
        value={referralCode}
        readOnly
        rightIcon={<CopyIcon />}
        onRightIconClick={() => handleCopy(referralCode)}
      />

      <Input
        label="Реферальная ссылка"
        value={referralLink}
        readOnly
        rightIcon={<CopyIcon />}
        onRightIconClick={() => handleCopy(referralLink)}
      />
    </S.CodesSection>
  );
};

export default ReferralCodes;