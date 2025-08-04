
declare module '*.svg' {
  import type { FunctionComponent, SVGProps } from 'react';
  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

// Прочие растровые форматы → просто URL (string)
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare module '*.webp' {
  const src: string;
  export default src;
}
