import CSS from 'csstype';

import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';

export interface DisplayProps {
  display?: ResponsiveParam<CSS.Property.Display>;
}

export const display = ({
  display,
  theme,
}: StyledProps<DisplayProps, Theme>): CSS.Properties =>
  responsive(
    {
      display,
    },
    theme,
  );
