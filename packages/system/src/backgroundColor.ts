import CSS from 'csstype';

import {Theme} from '@r6203/theme';
import {StyledProps, Color} from './types';
import {ResponsiveParam, responsive} from './responsive';

export interface BackgroundProps {
  backgroundColor?: ResponsiveParam<Color>;
}

export const backgroundColor = ({
  backgroundColor,
  theme,
}: StyledProps<BackgroundProps, Theme>): CSS.Properties =>
  responsive(
    {
      background: backgroundColor,
    },
    theme,
    {
      background: value => (theme.colors as any)[value],
    },
  );
