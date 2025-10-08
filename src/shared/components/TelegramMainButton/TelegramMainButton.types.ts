import type { RefObject } from 'react';

export default interface ITelegramMainButtonProps {
  text: string | undefined;
  callback:() => void;
  loading?: boolean | RefObject<boolean>;
  disabled?: boolean;
}
