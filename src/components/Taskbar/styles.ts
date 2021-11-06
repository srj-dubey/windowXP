import { css } from '@emotion/react';
import { blue, white } from '../../library/colors';

export const container = css`
  background: ${blue.base};
  display: flex;
  justify-content: space-between;
  padding-bottom: 2px;
`;

export const actionContainer = css``;

export const floatingContainer = css``;

export const notificationContainer = css`
  background: ${blue.shade[1]};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 22px;
`;

export const icon = css`
  margin-right: 12px;
  font-size: 15px;
  color: ${white.base};
`;

export const time = css`
  color: ${white.base};
  font-size: 15px;s
`;
