import CSS from 'csstype';

import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';

export interface FlexWrapProps {
  flexWrap?: ResponsiveParam<CSS.Property.FlexWrap>;
}

export const flexWrap = ({
  flexWrap,
  theme,
}: StyledProps<FlexWrapProps, Theme>): CSS.Properties =>
  responsive(
    {
      flexWrap,
    },
    theme,
  );
