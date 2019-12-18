import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';

export interface LineHeightProps {
  lineHeight?: ResponsiveParam<keyof Theme['lineHeight']>;
}

export const lineHeight = ({
  lineHeight,
  theme,
}: StyledProps<LineHeightProps, Theme>) =>
  responsive(
    {
      lineHeight,
    },
    theme,
    {
      lineHeight: value => theme.lineHeight[value],
    },
  );
