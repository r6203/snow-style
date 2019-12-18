import * as CSS from 'csstype';

import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';

export interface FontSizeProps {
  fontSize?: ResponsiveParam<keyof Theme['fontSizes']>;
}

export const fontSize = ({
  fontSize,
  theme,
}: StyledProps<FontSizeProps, Theme>): CSS.Properties =>
  responsive<keyof Theme['fontSizes']>(
    {
      fontSize,
    },
    theme,
    {
      fontSize: value => theme.fontSizes[value],
    },
  );
