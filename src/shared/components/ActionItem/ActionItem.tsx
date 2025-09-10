import React from "react";

import type { ActionIconButtonProps, ActionItemProps } from "./ActionItem.types";
import {
  ActionButton,
  ActionIcon,
  ActionItemContainer,
  ActionLabelText,
} from "@/shared/components/ActionItem/ActionItem.styled";

export const ActionIconButton: React.FC<ActionIconButtonProps> = ({
                                                                    icon,
                                                                    onClick,
                                                                    variant = "default",
                                                                  }) => (
  <ActionButton onClick={onClick} variant={variant}>
    <ActionIcon>{icon}</ActionIcon>
  </ActionButton>
);

export const ActionLabel: React.FC<{ label: string }> = ({ label }) => (
  <ActionLabelText>{label}</ActionLabelText>
);

export const ActionItem: React.FC<ActionItemProps> = ({
                                                        icon,
                                                        label,
                                                        onClick,
                                                        variant = "default",
                                                      }) => (
  <ActionItemContainer>
    <ActionIconButton icon={icon} onClick={onClick} variant={variant} />
    <ActionLabel label={label} />
  </ActionItemContainer>
);
