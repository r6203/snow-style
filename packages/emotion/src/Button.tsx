/** @jsx jsx */
import {css, jsx} from '@emotion/core';

import {SystemProps, systemStyles} from '@r6203/system';

type Variant = 'primary' | 'secondary';

export interface ButtonProps {
  variant?: Variant;
}

export const Button = () => <h1>Test</h1>;
console.log('TESt');

/*
export const Button: React.FC<ButtonProps & SystemProps> = props => (
  <button
    //css={theme => css(systemStyles({...props, theme}, 'button'))}
    css={{color: 'white'}}
    {...props}
  />
);
   */

//export const Button = styled.button<ButtonProps & SystemProps>(props =>
//systemStyles(props, 'button'),
//);
