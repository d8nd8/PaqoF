export interface PakogochiDisplayProps {
  level: number;
  progress: number;
  className?: string;
}

export interface PakogochiLevelConfig {
  image: string;
  background: string;
  title: string;
}

export interface PakogochiContainerProps {
  background: string;
}