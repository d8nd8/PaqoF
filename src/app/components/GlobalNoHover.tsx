import { Global, css } from '@emotion/react';

export const GlobalNoHover = () => (
  <Global
    styles={css`
      @media (hover: none) {
        *:hover {
          background: none !important;
          color: inherit !important;
          box-shadow: none !important;
          transform: none !important;
          filter: none !important;
          cursor: default !important;
        }
      }
    `}
  />
);
