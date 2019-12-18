import CSS from 'csstype';

import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';

export interface AlignContentProps {
  alignContent?: ResponsiveParam<CSS.Property.AlignContent>;
}

export const alignContent = ({
  alignContent,
  theme,
}: StyledProps<AlignContentProps, Theme>): CSS.Properties =>
  responsive(
    {
      alignContent,
    },
    theme,
  );
