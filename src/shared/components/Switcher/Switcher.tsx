import React from 'react';
import {
  SwitcherWrapper,
  SwitcherTab,
} from './Switcher.styled';

export type SwitcherOption = {
  key: string;
  label: string;
};

type Props = {
  options: SwitcherOption[];
  activeKey: string;
  onChange: (key: string) => void;
  className?: string;
};

export const Switcher: React.FC<Props> = ({
                                            options,
                                            activeKey,
                                            onChange,
                                            className,
                                          }) => {
  return (
    <SwitcherWrapper className={className}>
      {options.map((option) => (
        <SwitcherTab
          key={option.key}
          active={activeKey === option.key}
          onClick={() => onChange(option.key)}
        >
          {option.label}
        </SwitcherTab>
      ))}
    </SwitcherWrapper>
  );
};

export default Switcher;