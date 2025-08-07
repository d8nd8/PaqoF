import React from 'react';
import * as S from './AmlStatusList.styled';

export interface AMLStatusItem {
  id: string;
  status: 'completed' | 'pending' | 'failed' | 'suspicious';
  title: string;
  onClick?: () => void;
}

export interface AmlStatusListProps {
  items: AMLStatusItem[];
}

export const AmlStatusList: React.FC<AmlStatusListProps> = ({ items }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✓';
      case 'pending': return '⏱';
      case 'failed': return '✕';
      case 'suspicious': return '!';
      default: return '?';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success';
      case 'pending': return 'pending';
      case 'failed': return 'error';
      case 'suspicious': return 'warning';
      default: return 'default';
    }
  };

  return (
    <S.Container>
      {items.map((item) => (
        <S.StatusItem
          key={item.id}
          $status={getStatusColor(item.status)}
          onClick={item.onClick}
          $clickable={!!item.onClick}
        >
          <S.StatusContent>
            <S.StatusIcon $status={getStatusColor(item.status)}>
              {getStatusIcon(item.status)}
            </S.StatusIcon>
            <S.StatusText>{item.title}</S.StatusText>
          </S.StatusContent>
          <S.ChevronIcon>›</S.ChevronIcon>
        </S.StatusItem>
      ))}
    </S.Container>
  );
};