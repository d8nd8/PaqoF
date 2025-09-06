import React from "react";
import styled from "@emotion/styled";
import { BaseLayout } from "@/widgets/base-layout";

const ProfileWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: theme.colors.systemBackground,
  minHeight: "100%",
}));

// верхний градиентный фон
const ProfileTop = styled.div({
  position: "relative",
  width: "100%",
  height: "24vh",
  minHeight: "180px",
  maxHeight: "260px",
  background: `
    radial-gradient(circle at top left, #1F0BFF 0%, #F7F7F7 100%),
    radial-gradient(circle at top right, #0754FB 0%, #F7F7F7 100%),
    radial-gradient(circle at bottom, #389BEC 0%, #F7F7F7 100%)
  `,
  borderBottomLeftRadius: "16px",
  borderBottomRightRadius: "16px",
});

// ник внутри обложки
const Username = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  fontFamily: "Inter, sans-serif",
  fontSize: "13px",
  fontWeight: 600,
  lineHeight: "18px",
  letterSpacing: "-0.08px",

  color: "#FFFFFF",
  background: "rgba(60, 60, 67, 0.18)",

  padding: "4px 10px",
  borderRadius: "13px",
});

// аватар слева
const AvatarWrapper = styled.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  marginTop: "-50px",
  marginLeft: theme.spacing.lg,
  marginBottom: theme.spacing.lg,
}));

const Avatar = styled.img(({ theme }) => ({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  border: `7px solid ${theme.colors.systemElevatedBackground}`,
  background: theme.colors.systemElevatedBackground,
}));

// контент секций
const Content = styled.div(({ theme }) => ({
  padding: theme.spacing.lg,
}));

const Section = styled.div(({ theme }) => ({
  marginBottom: theme.spacing.lg,
}));

const SectionTitle = styled.div(({ theme }) => ({
  fontSize: theme.typography.fontSize.sm,
  fontWeight: theme.typography.fontWeight.medium,
  color: theme.colors.textSecondary,
  margin: "8px 4px",
}));

const SectionItem = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "52px",
  width: "100%",
  padding: "0 16px",
  background: theme.colors.systemElevatedBackground,
  cursor: "pointer",

  "&:not(:last-of-type)": {
    borderBottom: `1px solid ${theme.colors.borderLight}`,
  },

  "&:first-of-type": {
    borderTopLeftRadius: theme.borderRadius.lg,
    borderTopRightRadius: theme.borderRadius.lg,
  },
  "&:last-of-type": {
    borderBottomLeftRadius: theme.borderRadius.lg,
    borderBottomRightRadius: theme.borderRadius.lg,
  },
}));

// контейнер для иконки
const IconBox = styled.div(({ theme }) => ({
  width: "28px",
  height: "28px",
  minWidth: "28px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.colors.neutral300,
  borderRadius: "6px",
  marginRight: "10px",
}));

// текст внутри карточек
const ItemText = styled.span({
  fontFamily: "Inter, sans-serif",
  fontSize: "15px",
  fontWeight: 400,
  lineHeight: "100%",
  color: "#000000",
});

// контейнер для текста и иконки
const ItemContent = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

// кнопка выхода
const LogoutButton = styled.button(({ theme }) => ({
  height: "44px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  fontFamily: "Inter, sans-serif",
  fontSize: "15px",
  fontWeight: 400,
  lineHeight: "100%",
  color: "#FF2B27",

  background: theme.colors.systemElevatedBackground,
  border: `1px solid ${theme.colors.borderLight}`,
  borderRadius: theme.borderRadius.lg,
  cursor: "pointer",
  padding: "0 16px",
  marginTop: theme.spacing.sm,
}));

export const ProfilePage: React.FC = () => {
  return (
    <BaseLayout showNavbar>
      <ProfileWrapper>
        {/* верхний фон с ником */}
        <ProfileTop>
          <Username>@twixmaster</Username>
        </ProfileTop>

        {/* аватар */}
        <AvatarWrapper>
          <Avatar src="/images/cat-avatar.jpg" alt="Аватар" />
        </AvatarWrapper>

        {/* контент */}
        <Content>
          {/* Реферальная программа */}
          <Section>
            <SectionItem>
              <ItemContent>
                <IconBox>👥</IconBox>
                <ItemText>Реферальная программа</ItemText>
              </ItemContent>
              <span>›</span>
            </SectionItem>
          </Section>

          {/* Параметры */}
          <Section>
            <SectionTitle>Параметры</SectionTitle>
            <SectionItem>
              <ItemContent>
                <IconBox>🛡️</IconBox>
                <ItemText>KYC</ItemText>
              </ItemContent>
              <span>›</span>
            </SectionItem>
            <SectionItem>
              <ItemContent>
                <IconBox>🔒</IconBox>
                <ItemText>Безопасность</ItemText>
              </ItemContent>
              <span>›</span>
            </SectionItem>
            <SectionItem>
              <ItemContent>
                <IconBox>🌐</IconBox>
                <ItemText>Язык</ItemText>
              </ItemContent>
              <span>›</span>
            </SectionItem>
          </Section>

          {/* О нас */}
          <Section>
            <SectionTitle>О нас</SectionTitle>
            <SectionItem>
              <ItemContent>
                <IconBox>✅</IconBox>
                <ItemText>Официальные аккаунты</ItemText>
              </ItemContent>
              <span>›</span>
            </SectionItem>
            <SectionItem>
              <ItemContent>
                <IconBox>❓</IconBox>
                <ItemText>Часто задаваемые вопросы</ItemText>
              </ItemContent>
              <span>›</span>
            </SectionItem>
            <SectionItem>
              <ItemContent>
                <IconBox>ℹ️</IconBox>
                <ItemText>Информация</ItemText>
              </ItemContent>
              <span>›</span>
            </SectionItem>
          </Section>

          {/* Выход */}
          <LogoutButton>Выйти из аккаунта</LogoutButton>
        </Content>
      </ProfileWrapper>
    </BaseLayout>
  );
};
