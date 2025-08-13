import styled from '@emotion/styled';


export const HeaderContainer = styled.div(({ theme }) => ({
  backgroundColor: 'inherit',
  minHeight: '44px',
}));

export const HeaderContent = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const LeftSection = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flex: 1,
  justifyContent: 'flex-start',

});

export const CenterSection = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});

export const RightSection = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flex: 1,
  justifyContent: 'flex-end',
});

export const Title = styled.h1(({theme}) => ({
  fontSize: '16px',
  textAlign: 'center',
  lineHeight: '21px',
  fontWeight: '600',
  color: theme.colors.neutral950,
  margin: 0,
}));

export const TextButton = styled.button(({theme}) => ({
  background: 'none',
  border: 'none',
  fontSize: '13px',
  fontWeight: '600',
  color: theme.colors.neutral950,
  cursor: 'pointer',
  padding: '13px',
  transition: 'all 0.2s ease',
  lineHeight: '18px',

  '&:hover': {
    opacity: 0.6,
},

  '&:focus': {
    outline: 'none'
  }
}));

export const ChevronButton = styled.button(() => ({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',

  '&:hover': {
    opacity: 0.6
  },

  '&:focus': {
    outline: 'none'
  }
}));

interface ChevronIconProps {
  direction: 'left' | 'right';
}

export const ChevronIcon = styled.span<ChevronIconProps>(({theme}) => ({
  fontSize: '22px',
  fontWeight: '600',
  color: theme.colors.neutral950,
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px'
}));