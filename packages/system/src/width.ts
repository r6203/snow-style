import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';

export interface WidthProps {
  width?: ResponsiveParam<keyof Theme['width']>;
}

export const width = ({width, theme}: StyledProps<WidthProps, Theme>) =>
  responsive(
    {
      width,
    },
    theme,
    {
      width: value => theme.width[value],
    },
  );
