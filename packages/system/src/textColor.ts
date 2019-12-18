import {ResponsiveParam, responsive} from './responsive';
import {Color, StyledProps} from './types';
import {Theme} from '@r6203/theme';

export interface TextColorProps {
  textColor?: ResponsiveParam<Color>;
}

export const textColor = ({
  textColor,
  theme,
}: StyledProps<TextColorProps, Theme>) =>
  responsive(
    {
      color: textColor,
    },
    theme,
    {
      color: value => (theme.colors as any)[value],
    },
  );
