export interface ProgressStepProps {
  active: boolean;
  completed: boolean;
}

export interface ProgressLineProps {
  progress: number;
}

export interface ProgressContainerProps {
  size?: number;
}

export interface PakogochiProgressProps {
  currentProgress: number;
  level?: number;
  maxLevel?: number;
  referralsNeeded?: number;
  className?: string;
}