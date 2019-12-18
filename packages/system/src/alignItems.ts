import CSS from 'csstype';

import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';

export interface AlignItemsProps {
  alignItems?: ResponsiveParam<CSS.Property.AlignItems>;
}

export const alignItems = ({
  alignItems,
  theme,
}: StyledProps<AlignItemsProps, Theme>): CSS.Properties =>
  responsive(
    {
      alignItems,
    },
    theme,
  );
