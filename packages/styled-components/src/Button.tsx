import styled from 'styled-components';

import {SystemProps, systemStyles} from '@r6203/system';

type Variant = 'primary' | 'secondary';

export interface ButtonProps {
  variant?: Variant;
}

export const Button = styled.button<ButtonProps & SystemProps>(props =>
  systemStyles(props, 'button'),
);
