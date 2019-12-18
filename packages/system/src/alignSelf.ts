import CSS from 'csstype';

import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';

export interface AlignSelfProps {
  alignSelf?: ResponsiveParam<CSS.Property.AlignSelf>;
}

export const alignSelf = ({
  alignSelf,
  theme,
}: StyledProps<AlignSelfProps, Theme>): CSS.Properties =>
  responsive(
    {
      alignSelf,
    },
    theme,
  );
