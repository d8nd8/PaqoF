import React, { useEffect, useState } from 'react'
import * as S from './SecurityPinCode.styled'
import DeleteIcon from '@icons/backspace.svg?react'
import { useTranslation } from 'react-i18next'

type PinStatus = 'default' | 'success' | 'error'
type Mode = 'create' | 'createNew' | 'confirm' | 'remove'

interface SecurityPinCodeProps {
  mode?: Mode
  maxLength?: number
  onComplete: (pin: string) => void
  error?: string | null
}

export const SecurityPinCode: React.FC<SecurityPinCodeProps> = ({
                                                                  mode = 'create',
                                                                  maxLength = 4,
                                                                  onComplete,
                                                                  error,
                                                                }) => {
  const { t } = useTranslation()

  const [pin, setPin] = useState('')
  const [firstPin, setFirstPin] = useState('')
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<PinStatus>('default')
  const [helper, setHelper] = useState('')
  const [isLocked, setIsLocked] = useState(false)
  const [isShaking, setIsShaking] = useState(false)

  const handleInput = (val: string) => {
    if (isLocked || pin.length >= maxLength) return
    setPin((prev) => prev + val)
  }

  const handleDelete = () => {
    if (isLocked) return
    setPin((prev) => prev.slice(0, -1))
  }

  useEffect(() => {
    if (error) {
      setStatus('error')
      setHelper(error)
      setIsLocked(true)
      setIsShaking(true)

      if (navigator.vibrate) navigator.vibrate(100)

      const timeout = setTimeout(() => {
        setIsShaking(false)
        reset()
      }, 1500)

      return () => clearTimeout(timeout)
    }
  }, [error])


  useEffect(() => {
    if (pin.length !== maxLength || isLocked) return

    if (mode === 'create' || mode === 'createNew') {
      if (step === 1) {
        setFirstPin(pin)
        setPin('')
        setStep(2)
        setHelper('')
        setStatus('default')
      } else {
        if (pin === firstPin) {
          setStatus('success')
          setTimeout(() => {
            onComplete(pin)
            reset()
          }, 300)
        } else {
          setStatus('error')
          setHelper(t('pin.errors.mismatch'))
          setIsLocked(true)
          setIsShaking(true)
          if (navigator.vibrate) navigator.vibrate(100)
          setTimeout(() => {
            setIsShaking(false)
            reset()
          }, 1500)
        }
      }
    } else {
      setStatus('success')
      setIsLocked(true)
      setTimeout(() => {
        onComplete(pin)
        reset()
      }, 300)
    }
  }, [pin])

  const reset = () => {
    setPin('')
    setFirstPin('')
    setStep(1)
    setStatus('default')
    setHelper('')
    setIsLocked(false)
  }

  const renderTitle = () => {
    if (mode === 'create') {
      return step === 1 ? t('pin.create.title') : t('pin.create.repeatTitle')
    }
    if (mode === 'createNew') {
      return step === 1 ? t('pin.change.title') : t('pin.change.repeatTitle')
    }
    if (mode === 'confirm') return t('pin.confirm.title')
    if (mode === 'remove') return t('pin.remove.title')
    return ''
  }

  const renderSubtitle = () => {
    if (mode === 'create') {
      return step === 1
        ? t('pin.create.subtitle')
        : t('pin.create.repeatSubtitle')
    }
    if (mode === 'createNew') {
      return step === 1
        ? t('pin.change.subtitle')
        : t('pin.change.repeatSubtitle')
    }
    if (mode === 'remove') return t('pin.remove.subtitle')
    return ''
  }

  return (
    <S.Wrapper>
      <S.Title>{renderTitle()}</S.Title>
      <S.Description>{renderSubtitle()}</S.Description>

      <S.PinContainer>
        <S.PinWrapper shaking={isShaking}>
          {Array.from({ length: maxLength }).map((_, i) => (
            <S.Bullet key={i} status={status} filled={i < pin.length} />
          ))}
        </S.PinWrapper>

        {!!helper && <S.HelperText status={status}>{helper}</S.HelperText>}
      </S.PinContainer>

      <S.Keypad>
        {[...'123456789'].map((num) => (
          <S.Key key={num} onClick={() => handleInput(num)} disabled={isLocked}>
            {num}
          </S.Key>
        ))}
        <S.EmptyKey />
        <S.Key onClick={() => handleInput('0')} disabled={isLocked}>
          0
        </S.Key>
        <S.Key
          onClick={handleDelete}
          aria-label={t('pin.delete')}
          title={t('pin.delete')}
          disabled={isLocked}
        >
          <DeleteIcon />
        </S.Key>
      </S.Keypad>
    </S.Wrapper>
  )
}
