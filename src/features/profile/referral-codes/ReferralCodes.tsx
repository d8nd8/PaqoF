import React, { useCallback, useState } from 'react'
import CopyIcon from '@/assets/icons/profile/copy-outline.svg?react'
import { Input } from '@/shared/components/Input'
import CheckIcon from '@icons/check.svg?react'
import { useTranslation } from 'react-i18next'

import * as S from './ReferralCodes.styled'

type Props = {
  referralCode?: string
  referralLink?: string
  onCopyCode?: (text: string) => void
  className?: string
}

type CopiedField = 'code' | 'link' | null

export const ReferralCodes: React.FC<Props> = ({
  referralCode = 'dko777ka',
  referralLink = 'https://t.me/papagowallet',
  onCopyCode,
  className,
}) => {
  const { t } = useTranslation()
  const [copiedField, setCopiedField] = useState<CopiedField>(null)

  const handleCopy = useCallback(
    async (text: string, field: CopiedField) => {
      try {
        await navigator.clipboard.writeText(text)
        onCopyCode?.(text)
        setCopiedField(field)
        setTimeout(() => setCopiedField(null), 2000)
      } catch (err) {
        console.error('Ошибка копирования:', err)
      }
    },
    [onCopyCode],
  )

  return (
    <S.CodesSection className={className}>
      <S.CopyNotification $visible={!!copiedField}>
        <CheckIcon />
        {t('referral.codes.copied')}
      </S.CopyNotification>

      <Input
        label={t('referral.codes.code')}
        value={referralCode}
        readOnly
        rightIcon={<CopyIcon />}
        onRightIconClick={() => handleCopy(referralCode, 'code')}
      />

      <Input
        label={t('referral.codes.link')}
        value={referralLink}
        readOnly
        rightIcon={<CopyIcon />}
        onRightIconClick={() => handleCopy(referralLink, 'link')}
      />
    </S.CodesSection>
  )
}

export default ReferralCodes
