import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';

export interface HeightProps {
  height?: ResponsiveParam<keyof Theme['height']>;
}

export const height = ({height, theme}: StyledProps<HeightProps, Theme>) =>
  responsive(
    {
      height,
    },
    theme,
    {
      height: value => theme.height[value],
    },
  );
