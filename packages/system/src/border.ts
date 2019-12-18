import {ResponsiveParam, responsive} from './responsive';
import {StyledProps, Color} from './types';
import {Theme} from '@r6203/theme';

export interface BorderWidthProps {
  borderWidth?: ResponsiveParam<keyof Theme['borderWidth']>;
  borderTopWidth?: ResponsiveParam<keyof Theme['borderWidth']>;
  borderRightWidth?: ResponsiveParam<keyof Theme['borderWidth']>;
  borderBottomWidth?: ResponsiveParam<keyof Theme['borderWidth']>;
  borderLeftWidth?: ResponsiveParam<keyof Theme['borderWidth']>;
}

export const borderWidth = ({
  borderWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  theme,
}: StyledProps<BorderWidthProps, Theme>) =>
  responsive(
    {
      borderWidth,
      borderTopWidth,
      borderRightWidth,
      borderBottomWidth,
      borderLeftWidth,
    },
    theme,
    {
      borderWidth: value => theme.borderWidth[value],
      borderTopWidth: value => theme.borderWidth[value],
      borderRightWidth: value => theme.borderWidth[value],
      borderBottomWidth: value => theme.borderWidth[value],
      borderLeftWidth: value => theme.borderWidth[value],
    },
  );

export interface BorderColorProps {
  borderColor?: ResponsiveParam<Color>;
}

export const borderColor = ({
  borderColor,
  theme,
}: StyledProps<BorderColorProps, Theme>) =>
  responsive<Color>(
    {
      borderColor,
    },
    theme,
    {
      borderColor: value => (theme.colors as any)[value],
    },
  );

export interface BorderRadiusProps {
  borderRadius?: ResponsiveParam<keyof Theme['borderRadius']>;
  borderTopRadius?: ResponsiveParam<keyof Theme['borderRadius']>;
  borderRightRadius?: ResponsiveParam<keyof Theme['borderRadius']>;
  borderBottomRadius?: ResponsiveParam<keyof Theme['borderRadius']>;
  borderLeftRadius?: ResponsiveParam<keyof Theme['borderRadius']>;
  borderTopLeftRadius?: ResponsiveParam<keyof Theme['borderRadius']>;
  borderTopRightRadius?: ResponsiveParam<keyof Theme['borderRadius']>;
  borderBottomRightRadius?: ResponsiveParam<keyof Theme['borderRadius']>;
  borderBottomLeftRadius?: ResponsiveParam<keyof Theme['borderRadius']>;
}

export const borderRadius = ({
  borderRadius,
  borderTopRadius,
  borderRightRadius,
  borderBottomRadius,
  borderLeftRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  theme,
}: StyledProps<BorderRadiusProps, Theme>) =>
  responsive(
    {
      borderRadius,
      borderTopRadius,
      borderRightRadius,
      borderBottomRadius,
      borderLeftRadius,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomRightRadius,
      borderBottomLeftRadius,
    },
    theme,
    {
      borderRadius: value => theme.borderRadius[value],
      borderTopRadius: value => theme.borderRadius[value],
      borderRightRadius: value => theme.borderRadius[value],
      borderBottomRadius: value => theme.borderRadius[value],
      borderLeftRadius: value => theme.borderRadius[value],
      borderTopLeftRadius: value => theme.borderRadius[value],
      borderTopRightRadius: value => theme.borderRadius[value],
      borderBottomRightRadius: value => theme.borderRadius[value],
      borderBottomLeftRadius: value => theme.borderRadius[value],
    },
  );
