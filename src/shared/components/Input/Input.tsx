import React from 'react';
import * as S from './Input.styled';

type Props = {
  label?: string;
  value?: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
  onChange?: (value: string) => void;
  className?: string;
  type?: 'text' | 'email' | 'password' | 'number';
};

export const Input: React.FC<Props> = ({
                                         label,
                                         value = '',
                                         placeholder,
                                         readOnly = false,
                                         disabled = false,
                                         rightIcon,
                                         onRightIconClick,
                                         onChange,
                                         className,
                                         type = 'text'
                                       }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!readOnly && onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <S.InputWrapper className={className}>
      {label && <S.InputLabel>{label}</S.InputLabel>}
      <S.InputContainer>
        <S.InputField
          type={type}
          value={value}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          onChange={handleChange}
          hasRightIcon={!!rightIcon}
        />
        {rightIcon && (
          <S.IconButton
            onClick={onRightIconClick}
            disabled={disabled}
            type="button"
          >
            {rightIcon}
          </S.IconButton>
        )}
      </S.InputContainer>
    </S.InputWrapper>
  );
};

export default Input;