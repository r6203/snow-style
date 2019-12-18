import CSS from 'csstype';

import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';

export interface JustifyContentProps {
  justifyContent?: ResponsiveParam<CSS.Property.JustifyContent>;
}

export const justifyContent = ({
  justifyContent,
  theme,
}: StyledProps<JustifyContentProps, Theme>): CSS.Properties =>
  responsive(
    {
      justifyContent,
    },
    theme,
  );
