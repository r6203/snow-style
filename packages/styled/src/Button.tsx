import styled from '@emotion/styled';
import {systemStyles} from '@r6203/system';

import {Box} from './Box';

type Variant = 'primary' | 'secondary';

export interface ButtonProps {
  // TODO: keys from theme
  variant?: Variant;
}

export const Button = styled(Box)<ButtonProps>(props =>
  systemStyles(props, 'button'),
);

Button.defaultProps = {
  as: 'button',
  variant: 'primary',
};
