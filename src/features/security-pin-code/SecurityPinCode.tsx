import React, { useEffect, useState } from 'react'
import * as S from './SecurityPinCode.styled'

import DeleteIcon from '@icons/backspace.svg?react';

type PinStatus = 'default' | 'success' | 'error'
type Mode = 'create' | 'confirm' | 'remove'

interface SecurityPinCodeProps {
  mode?: Mode
  maxLength?: number
  onComplete: (pin: string) => void

  titleCreate?: string
  titleRepeat?: string
  titleConfirm?: string
  titleRemove?: string
  subtitleCreate?: string
  subtitleRepeat?: string
  subtitleRemove?: string
  errorText?: string
}

export const SecurityPinCode: React.FC<SecurityPinCodeProps> = ({
                                                                  mode = 'create',
                                                                  maxLength = 4,
                                                                  onComplete,
                                                                  titleCreate = 'Добавить пин-код',
                                                                  titleRepeat = 'Повторите пин-код',
                                                                  titleConfirm = 'Введите пин-код',
                                                                  titleRemove = 'Удалите пин-код',
                                                                  subtitleCreate = 'Никто, кроме вас, не сможет зайти в приложение',
                                                                  subtitleRepeat = 'Проверяем, что вы точно запомнили код',
                                                                  subtitleRemove = 'Снимаете защиту со входа в приложение',
                                                                  errorText = 'Пин-коды не совпадают',
                                                                }) => {
  const [pin, setPin] = useState('')
  const [firstPin, setFirstPin] = useState('')
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<PinStatus>('default')
  const [helper, setHelper] = useState('')
  const [isLocked, setIsLocked] = useState(false)

  const handleInput = (val: string) => {
    if (isLocked || pin.length >= maxLength) return
    setPin((prev) => prev + val)
  }

  const handleDelete = () => {
    if (isLocked) return
    setPin((prev) => prev.slice(0, -1))
  }

  useEffect(() => {
    if (pin.length !== maxLength || isLocked) return

    if (mode === 'create') {
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
          setHelper(errorText)
          setIsLocked(true)
          setTimeout(() => {
            setPin('')
            setFirstPin('')
            setStep(1)
            setStatus('default')
            setHelper('')
            setIsLocked(false)
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
      return step === 1 ? titleCreate : titleRepeat
    }
    if (mode === 'confirm') return titleConfirm
    if (mode === 'remove') return titleRemove
    return ''
  }

  const renderSubtitle = () => {
    if (mode === 'create' && step === 1) return subtitleCreate
    if (mode === 'create' && step === 2) return subtitleRepeat
    if (mode === 'remove') return subtitleRemove
    return ''
  }

  return (
    <S.Wrapper>
      <S.Title>{renderTitle()}</S.Title>
      <S.Description>{renderSubtitle()}</S.Description>

      <S.PinContainer>
        <S.PinWrapper>
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
          aria-label="Удалить символ"
          title="Удалить"
          disabled={isLocked}
        >
          <DeleteIcon />
        </S.Key>
      </S.Keypad>
    </S.Wrapper>
  )
}
