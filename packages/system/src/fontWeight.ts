import * as CSS from 'csstype';

import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';

type FontWeight = keyof Theme['fontWeights'];

export interface FontWeightProps {
  fontWeight?: ResponsiveParam<FontWeight>;
}

export const fontWeight = ({
  fontWeight,
  theme,
}: StyledProps<FontWeightProps, Theme>): CSS.Properties =>
  responsive<FontWeight>(
    {
      fontWeight,
    },
    theme,
    {fontWeight: value => theme.fontWeights[value]},
  );
