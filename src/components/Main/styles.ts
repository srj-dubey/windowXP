import { css } from '@emotion/react';

export const container = css`
  text-align: center;
  font-size: 22px;
  font-weight: 500;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 100vh;
  }
`;

export const bottomFixedContainer = css`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
