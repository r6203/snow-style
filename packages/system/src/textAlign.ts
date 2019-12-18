import CSS from 'csstype';

import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';

export interface TextAlignProps {
  textAlign?: ResponsiveParam<CSS.Property.TextAlign>;
}

export const textAlign = ({
  textAlign,
  theme,
}: StyledProps<TextAlignProps, Theme>): CSS.Properties =>
  responsive(
    {
      textAlign,
    },
    theme,
  );
