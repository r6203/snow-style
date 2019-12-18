import {ResponsiveParam} from './responsive';

interface SpacingProps<T> {
  t?: ResponsiveParam<T>;
  r?: ResponsiveParam<T>;
  b?: ResponsiveParam<T>;
  l?: ResponsiveParam<T>;
  x?: ResponsiveParam<T>;
  y?: ResponsiveParam<T>;
  s?: ResponsiveParam<T>;
}

export const spacing = <T>({s, x, y, t, r, b, l}: SpacingProps<T>) => {
  let left;
  let right;

  if (x !== undefined) {
    left = right = x;
  }

  if (l !== undefined) {
    left = l;
  }

  if (r !== undefined) {
    right = r;
  }

  let top;
  let bottom;

  if (y !== undefined) {
    top = bottom = y;
  }

  if (t !== undefined) {
    top = t;
  }

  if (b !== undefined) {
    bottom = b;
  }

  return {
    s,
    top,
    right,
    bottom,
    left,
  };
};
