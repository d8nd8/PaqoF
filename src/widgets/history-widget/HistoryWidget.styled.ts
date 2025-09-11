import styled from "@emotion/styled";

export const HistoryWrapper = styled.div<{ $variant?: "default" | "card" }>(
  ({ theme, $variant }) => ({
    display: "flex",
    flexDirection: "column",
    padding: $variant === "card" ? theme.spacing.md : theme.spacing.lg,
    paddingTop: $variant === "card" ? theme.spacing.lg : theme.spacing.header,
    background:
      $variant === "card"
        ? theme.colors.systemElevatedBackground
        : theme.colors.systemBackground,
    borderRadius: $variant === "card" ? theme.borderRadius.lg : 0,
    border:
      $variant === "card"
        ? `1px solid ${theme.colors.neutral300}`
        : "none",
    borderTop: "none",

    ...( $variant === "card"
        ? {
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
          height: "auto",
        }
        : {
          minHeight: "100%",
        }
    ),
  })
);
export const Header = styled.div<{ $variant?: "default" | "card" }>(
  ({ theme, $variant }) => ({
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing.lg,
    marginTop: $variant === "card" ? "20px" : theme.spacing.xxl, // 20px при card
  })
);

export const Title = styled.h2<{ $variant?: "default" | "card" }>(
  ({ theme, $variant }) => ({
    fontFamily: "Inter, sans-serif",
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.textPrimary,
    margin: 0,
    marginBottom: theme.spacing.lg,

    ...( $variant === "card"
      ? {
        fontSize: "17px",
        lineHeight: "22px",
        letterSpacing: "-0.43px",
        textAlign: "left",
      }
      : {
        fontSize: theme.typography.fontSize.md,
        lineHeight: "21px",
        letterSpacing: "-0.31px",
        textAlign: "center",
      }),
  })
);

export const Tabs = styled.div({
  display: "flex",
  gap: "8px",
  justifyContent: "flex-start",
});

export const TabButton = styled.button<{ $active?: boolean }>(
  ({ theme, $active }) => ({
    padding: "4px 12px",
    borderRadius: "12px",
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    border: "none",
    cursor: "pointer",
    backgroundColor: $active
      ? theme.colors.neutral950
      : theme.colors.neutral300,
    color: $active ? theme.colors.neutral100 : theme.colors.textPrimary,
    transition: theme.transition.fast,
  })
);

export const DateHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "16px",
  marginBottom: "8px",
});

export const DateTitle = styled.div(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "17px",
  fontWeight: 600,
  lineHeight: "22px",
  letterSpacing: "-0.43px",
  color: theme.colors.textPrimary,
}));

export const DateTotalWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

export const DateTotalMain = styled.div(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "13px",
  fontWeight: 600,
  lineHeight: "18px",
  letterSpacing: "-0.08px",
  textAlign: "right",
  color: theme.colors.textPrimary,
}));

export const DateTotalSecondary = styled.div(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "13px",
  fontWeight: 400,
  lineHeight: "18px",
  letterSpacing: "-0.08px",
  textAlign: "right",
  color: theme.colors.textTertiary,
}));

export const TransactionList = styled.div({
  display: "flex",
  flexDirection: "column",
});

export const TransactionItem = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${theme.spacing.md} 0`,
  cursor: "pointer",
}));

export const TransactionLeft = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const IconCircle = styled.div(({ theme }) => ({
  width: 38,
  height: 38,
  borderRadius: "50%",
  background: theme.colors.neutral200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const TransactionInfo = styled.div({
  display: "flex",
  flexDirection: "column",
});

export const TransactionTitle = styled.div(({ theme }) => ({
  fontSize: "13px",
  fontWeight: theme.typography.fontWeight.normal,
  color: theme.colors.textPrimary,
}));

export const TransactionCategory = styled.div(({ theme }) => ({
  fontSize: theme.typography.fontSize.xs,
  color: theme.colors.textSecondary,
}));

export const TransactionRight = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

export const Amount = styled.div<{
  type?: "income" | "expense";
  secondary?: boolean;
}>(({ theme, type, secondary }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "13px",
  height: "20px",
  letterSpacing: "-0.08px",
  fontWeight: theme.typography.fontWeight.normal,
  color: secondary
    ? theme.colors.textTertiary
    : type === "income"
      ? theme.colors.success600
      : theme.colors.textPrimary,
}));

export const StatusIcon = styled.div<{ status: "pending" | "warning" }>(
  ({ theme, status }) => {
    const backgroundColor = "#F3F4F6";
    let color;

    switch (status) {
      case "pending":
        color = theme.colors.warning500;
        break;
      case "warning":
        color = theme.colors.textTertiary;
        break;
    }

    return {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "2px",
      "& svg": {
        color,
        fill: "currentColor",
      },
    };
  }
);
