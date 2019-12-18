import CSS from 'csstype';

import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';

type Flex = 'initial' | 'auto' | 'none' | 1;

export interface FlexProps {
  flex?: ResponsiveParam<Flex>;
}

export const flex = ({
  flex,
  theme,
}: StyledProps<FlexProps, Theme>): CSS.Properties => {
  let f = undefined;

  if (flex === 'none') f = 'none';
  else if (flex === 'auto') f = '1 1 auto';
  else if (flex === 'initial') f = '0 1 auto';
  else if (flex === 1) f = '1 1 0%';

  return responsive(
    {
      flex: f,
    },
    theme,
  );
};
