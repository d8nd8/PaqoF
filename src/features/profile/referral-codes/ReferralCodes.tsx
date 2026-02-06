import React, { useCallback, useEffect, useRef, useState } from 'react'
import CopyIcon from '@/assets/icons/profile/copy-outline.svg?react'
import { Input } from '@/shared/components/Input'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import * as S from './ReferralCodes.styled'

const SUCCESS_ICON_DURATION_MS = 2000

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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleCopy = useCallback(
    (text: string, field: CopiedField) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      navigator.clipboard.writeText(text).then(() => {
        onCopyCode?.(text)
        setCopiedField(field)
        timeoutRef.current = setTimeout(() => {
          setCopiedField(null)
          timeoutRef.current = null
        }, SUCCESS_ICON_DURATION_MS)
      })
    },
    [onCopyCode],
  )

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    },
    [],
  )

  return (
    <S.CodesSection className={className}>
      <Input
        label={t('referral.codes.code')}
        value={referralCode}
        readOnly
        rightIcon={copiedField === 'code' ? <Check size={20} /> : <CopyIcon />}
        onRightIconClick={() => handleCopy(referralCode, 'code')}
      />

      <Input
        label={t('referral.codes.link')}
        value={referralLink}
        readOnly
        rightIcon={copiedField === 'link' ? <Check size={20} /> : <CopyIcon />}
        onRightIconClick={() => handleCopy(referralLink, 'link')}
      />
    </S.CodesSection>
  )
}

export default ReferralCodes
