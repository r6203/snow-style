import * as CSS from 'csstype';

import {Theme} from '@r6203/theme';
import {ResponsiveParam, responsive} from './responsive';
import {spacing} from './spacing';
import {StyledProps, Spacing} from './types';

type Padding = keyof Theme['padding'];

export interface PaddingProps {
  pt?: ResponsiveParam<Padding>;
  pr?: ResponsiveParam<Padding>;
  pb?: ResponsiveParam<Padding>;
  pl?: ResponsiveParam<Padding>;
  px?: ResponsiveParam<Padding>;
  py?: ResponsiveParam<Padding>;
  p?: ResponsiveParam<Padding>;
}

export const padding = ({
  p,
  py,
  px,
  pl,
  pb,
  pr,
  pt,
  theme,
}: StyledProps<PaddingProps, Theme>): CSS.Properties => {
  const {s, top, right, bottom, left} = spacing({
    s: p,
    x: px,
    y: py,
    t: pt,
    r: pr,
    b: pb,
    l: pl,
  });

  return responsive(
    {
      padding: s,
      paddingTop: top,
      paddingRight: right,
      paddingBottom: bottom,
      paddingLeft: left,
    },
    theme,
    {
      padding: value => theme.padding[value],
      paddingTop: value => theme.padding[value],
      paddingRight: value => theme.padding[value],
      paddingBottom: value => theme.padding[value],
      paddingLeft: value => theme.padding[value],
    },
  );
};
