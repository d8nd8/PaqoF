import styled from '@emotion/styled';

export const PaymentFormContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  height: '100%',

  '& span, & a, & strong': {
    color: `${theme.colors.neutral950} !important`,
    textDecoration: 'none !important',
  },
}));

export const PaymentDetails = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  padding: '14px',
  backgroundColor: theme.colors.systemElevatedBackground,
  borderRadius: '13px',
}));

export const DetailRow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const DetailLabel = styled.span(({ theme }) => ({
  fontSize: '13px',
  fontWeight: 400,
  color: theme.colors.textSecondary,
  lineHeight: '18px',
}));

export const DetailValue = styled.span(({ theme }) => ({
  fontSize: '13px',
  fontWeight: 600,
  color: theme.colors.neutral950,
  lineHeight: '18px',
}));

export const CurrencySection = styled.div({});

export const TotalSection = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const TotalLabel = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '17px',
  lineHeight: '22px',
  fontWeight: 600,
  color: theme.colors.neutral950,
}));

export const CommissionNote = styled.span(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 400,
  color: theme.colors.textTertiary,
  lineHeight: '16px',
}));

export const TotalAmount = styled.div(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 700,
  color: theme.colors.neutral950,
  lineHeight: '34px',
}));

// ======================
// ✅ SUCCESS STATE STYLES
// ======================
interface StatusContainerProps {
  success?: boolean;
}

export const StatusContainer = styled.div<StatusContainerProps>(
  ({ success = false, theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '32px',
    background: success
      ? `
    radial-gradient(circle at top left, #F2FF9E 0%, transparent 50%),
    radial-gradient(circle at top right, #41D98D 10%, transparent 50%),
    #FFFF
  `
      : 'transparent',
    borderRadius: success ? '16px' : '0',
    margin: success ? '-20px -20px 0' : '0',
    color: theme.colors.neutral950,
  })
);

export const StatusHeader = styled.h2<{ success?: boolean }>(
  ({ success = false, theme }) => ({
    fontSize: '16px',
    fontWeight: 600,
    color: theme.colors.neutral950,
    lineHeight: '21px',
    marginBottom: '12px',
  })
);

export const StatusDate = styled.div(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
  color: `${theme.colors.textSecondary} !important`,
  letterSpacing: '0px',
  textAlign: 'center',
}));

export const SuccessIcon = styled.img({
  width: '90px',
  height: '90px',
  margin: '16px 0 0px 0',
  animation: 'fadeInScale 0.5s ease forwards',

  '@keyframes fadeInScale': {
    from: { opacity: 0, transform: 'scale(0.6)' },
    to: { opacity: 1, transform: 'scale(1)' },
  },
});

export const StatusAmount = styled.div(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 700,
  color: theme.colors.neutral950,
  lineHeight: '34px',
  marginBottom: '40px',
}));

export const StatusDetails = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
  backgroundColor: theme.colors.systemElevatedBackground,
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '20px',
}));

// ======================
// ❌ ERROR STATE
// ======================
export const ErrorTitle = styled.h3(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  color: '#000000',
  margin: '10px 0',
  lineHeight: '25px',
}));

export const ErrorDescription = styled.p(({ theme }) => ({
  fontSize: '15px',
  fontWeight: 400,
  color: '#8E8E93',
  lineHeight: '20px',
}));

// ======================
// 💰 Currency Button
// ======================
interface CurrencyButtonContainerProps {
  disabled: boolean;
  hasOptions: boolean;
}

export const CurrencyButtonContainer = styled.button<CurrencyButtonContainerProps>(
  ({ disabled, hasOptions, theme }) => ({
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: disabled || !hasOptions ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    opacity: disabled ? 0.6 : 1,

    '&:hover': {
      backgroundColor: disabled || !hasOptions ? '#ffffff' : '#f8f9fa',
      borderColor: disabled || !hasOptions ? '#E5E5E7' : '#D1D5DB',
    },

    '&:active': {
      transform: disabled || !hasOptions ? 'none' : 'scale(0.98)',
    },

    '&:focus': {
      outline: 'none',
      borderColor: hasOptions && !disabled ? '#4CAF50' : '#E5E5E7',
    },
  })
);

export const CurrencyContent = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  flex: 1,
});

interface CurrencyIconProps {
  color?: string;
  isUSDT?: boolean;
}

export const CurrencyIcon = styled.div<CurrencyIconProps>(
  ({ color = '#4CAF50', isUSDT = false }) => ({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: isUSDT ? '#4CAF50' : color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,

    '& svg': {
      width: isUSDT ? '24px' : '20px',
      height: isUSDT ? '24px' : '20px',
      fill: '#ffffff',
    },
  })
);

export const CurrencyIconText = styled.span({
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: 1,
});

export const CurrencyInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2px',
});

export const CurrencyName = styled.div({
  fontSize: '16px',
  fontWeight: 600,
  color: '#000000',
  lineHeight: '20px',
});

export const CurrencyAmount = styled.div({
  fontSize: '14px',
  fontWeight: 400,
  color: '#8E8E93',
  lineHeight: '18px',
});

export const PlaceholderText = styled.div({
  fontSize: '16px',
  fontWeight: 400,
  color: '#8E8E93',
  lineHeight: '20px',
});

export const ChevronContainer = styled.div({
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'rotate(-90deg)',

  '& svg': {
    width: '16px',
    height: '16px',
    fill: '#8E8E93',
  },
});
