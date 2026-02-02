import React from 'react'
import UpgradeIcon from '@/assets/icons/profile/arrow-up-circle.svg?react'
import InviteIcon from '@/assets/icons/profile/invite.svg?react'
import CashBackIcon from '@/assets/icons/profile/sell.svg?react'
import paco1 from '@/assets/images/profile/paco1.png'
import paco2 from '@/assets/images/profile/paco2.png'
import paco3 from '@/assets/images/profile/paco3.png'
import paco4 from '@/assets/images/profile/paco4.png'
import paco5 from '@/assets/images/profile/paco5.png'
import { Trans, useTranslation } from 'react-i18next'

import * as S from './PakogochiDisplay.styled'

interface PakogochiDisplayProps {
  level: number
  progress: number
  className?: string
}

const levelConfig = {
  1: {
    image: paco1,
    background: 'linear-gradient(225deg, #C5C5C5 0%, #929292 100%)',
    title: 'referral.pakogochi.levels.1',
  },
  2: {
    image: paco2,
    background:
      'linear-gradient(225deg, #FFFFFF 0%, #D30066 100%), linear-gradient(225deg, #C5C5C5 0%, #929292 100%)',
    title: 'referral.pakogochi.levels.2',
  },
  3: {
    image: paco3,
    background:
      'linear-gradient(225deg, #BACFFF 0%, #132F55 100%), linear-gradient(225deg, #FFFFFF 0%, #D30066 100%), linear-gradient(225deg, #C5C5C5 0%, #929292 100%)',
    title: 'referral.pakogochi.levels.3',
  },
  4: {
    image: paco4,
    background: 'linear-gradient(225deg, #FFCEBA 0%, #441355 100%)',
    title: 'referral.pakogochi.levels.4',
  },
  5: {
    image: paco5,
    background:
      'linear-gradient(225deg, #5E5E5E 0%, #0B0B0B 100%), linear-gradient(225deg, #FFFFFF 0%, #D30066 100%), linear-gradient(225deg, #C5C5C5 0%, #929292 100%)',
    title: 'referral.pakogochi.levels.5',
  },
}
export const PakogochiDisplay: React.FC<PakogochiDisplayProps> = ({
  level = 1,
  progress = 0,
  className,
}) => {
  const { t } = useTranslation()

  const getCurrentLevel = () => {
    if (progress >= 50) return 5
    if (progress >= 40) return 4
    if (progress >= 30) return 3
    if (progress >= 20) return 2
    return 1
  }

  const currentLevel = getCurrentLevel()
  const config = levelConfig[currentLevel as keyof typeof levelConfig]

  return (
    <S.PakogochiContainer className={className}>
      <S.PakogochiImage
        src={config.image}
        alt={t(config.title)}
      />

      <S.InfoCard>
        <S.CardTitle>{t('referral.pakogochi.cardTitle')}</S.CardTitle>

        <S.ActionsGrid>
          <S.ActionItem>
            <S.ActionIcon>
              <InviteIcon />
            </S.ActionIcon>
            <S.ActionText>
              <Trans
                i18nKey="referral.pakogochi.actions.invite"
                components={{ bold: <strong /> }}
              />
            </S.ActionText>
          </S.ActionItem>

          <S.ActionItem>
            <S.ActionIcon>
              <CashBackIcon />
            </S.ActionIcon>
            <S.ActionText>
              <Trans
                i18nKey="referral.pakogochi.actions.cashback"
                components={{ bold: <strong /> }}
              />
            </S.ActionText>
          </S.ActionItem>

          <S.ActionItem>
            <S.ActionIcon>
              <UpgradeIcon />
            </S.ActionIcon>
            <S.ActionText>
              <Trans
                i18nKey="referral.pakogochi.actions.upgrade"
                components={{ bold: <strong /> }}
              />
            </S.ActionText>
          </S.ActionItem>
        </S.ActionsGrid>
      </S.InfoCard>
    </S.PakogochiContainer>
  )
}

export default PakogochiDisplay
