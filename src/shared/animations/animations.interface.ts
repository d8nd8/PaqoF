import React from 'react'

export default interface IAnimation {
  isVisible: boolean;
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  skipAnimation?: boolean;
}