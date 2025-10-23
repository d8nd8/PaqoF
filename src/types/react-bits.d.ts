declare module "react-bits/backgrounds/aurora" {
  import React from "react";

  interface AuroraProps {
    colorStops?: string[];
    speed?: number;
    blend?: number;
    amplitude?: number;
    style?: React.CSSProperties;
    className?: string;
  }

  const Aurora: React.FC<AuroraProps>;
  export default Aurora;
}