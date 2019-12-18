import CSS from 'csstype';

import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';

export interface FlexDirectionProps {
  flexDirection?: ResponsiveParam<CSS.Property.FlexDirection>;
}

export const flexDirection = ({
  flexDirection,
  theme,
}: StyledProps<FlexDirectionProps, Theme>): CSS.Properties =>
  responsive(
    {
      flexDirection,
    },
    theme,
  );
