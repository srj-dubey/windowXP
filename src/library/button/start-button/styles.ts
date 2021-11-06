import { css } from '@emotion/react';
import { green, white } from '../../colors';

export const container = css`
  background: ${green.base};
  padding: 8px 22px;
  color: ${white.base};
  font-size: 16px;
  border: none;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const icon = css`
  margin-right: 12px;
`;
