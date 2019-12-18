import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';

export interface BoxShadowProps {
  boxShadow?: ResponsiveParam<keyof Theme['boxShadow']>;
}

export const boxShadow = ({
  boxShadow,
  theme,
}: StyledProps<BoxShadowProps, Theme>) =>
  responsive(
    {
      boxShadow,
    },
    theme,
    {
      boxShadow: value => theme.boxShadow[value],
    },
  );
