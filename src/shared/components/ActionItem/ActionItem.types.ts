import React from 'react'

export type ActionVariant = "default" | "primary" | "secondary";

export interface ActionIconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'secondary';
}

export interface ActionItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  variant?: "default" | "primary" | "secondary";
}