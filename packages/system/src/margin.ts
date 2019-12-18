import * as CSS from 'csstype';

import {ResponsiveParam, responsive} from './responsive';
import {StyledProps} from './types';
import {Theme} from '@r6203/theme';
import {spacing} from './spacing';

type Margin = keyof Theme['margin'];

export interface MarginProps {
  mt?: ResponsiveParam<Margin>;
  mr?: ResponsiveParam<Margin>;
  mb?: ResponsiveParam<Margin>;
  ml?: ResponsiveParam<Margin>;
  mx?: ResponsiveParam<Margin>;
  my?: ResponsiveParam<Margin>;
  m?: ResponsiveParam<Margin>;
}

export const margin = ({
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  m,
  theme,
}: StyledProps<MarginProps, Theme>): CSS.Properties => {
  const {s, top, right, bottom, left} = spacing({
    s: m,
    x: mx,
    y: my,
    t: mt,
    r: mr,
    b: mb,
    l: ml,
  });

  return responsive(
    {
      margin: s,
      marginTop: top,
      marginRight: right,
      marginBottom: bottom,
      marginLeft: left,
    },
    theme,
    {
      margin: value => theme.margin[value],
      marginTop: value => theme.margin[value],
      marginRight: value => theme.margin[value],
      marginBottom: value => theme.margin[value],
      marginLeft: value => theme.margin[value],
    },
  );
};
