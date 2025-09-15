import { Circle, ToggleWrapper } from '@/shared/components/Toggle/Toggle.styled';
import type { ToggleProps } from '@/shared/components/Toggle/Toggle.types'





export const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
  return (
    <ToggleWrapper $checked={checked} onClick={() => onChange(!checked)}>
      <Circle $checked={checked} />
    </ToggleWrapper>
  );
};

export  default Toggle;