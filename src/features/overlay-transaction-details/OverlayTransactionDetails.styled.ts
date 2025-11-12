import styled from '@emotion/styled'

export const TransactionDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 4px;
  padding-bottom: 80px;

  /* оставляем место под хедер сверху и кнопку снизу */
  max-height: calc(100vh - 160px);
  overflow-y: auto;

  -webkit-overflow-scrolling: touch;
`;

export const TransactionDate = styled.div(({ theme }) => ({
  fontSize: '13px',
  lineHeight: '18px',
  fontWeight: 400,
  color: theme.colors.textSecondary,
  textAlign: 'center',
  marginBottom: '12px',
}));
