import * as CSS from 'csstype';
import merge from 'lodash/merge';

import * as system from './';

export interface AsProps {
  as?: React.ElementType;
}

export type SystemProps = AsProps &
  system.BackgroundProps &
  system.BorderColorProps &
  system.BorderRadiusProps &
  system.BorderWidthProps &
  system.BoxShadowProps &
  system.DisplayProps &
  system.FlexProps &
  system.FontSizeProps &
  system.FontWeightProps &
  system.HeightProps &
  system.JustifyContentProps &
  system.LineHeightProps &
  system.MarginProps &
  system.PaddingProps &
  system.TextAlignProps &
  system.TextColorProps &
  system.WidthProps;

export type SystemFunctionProps = Record<string, any> & {theme: any};
export type SystemFunction = (props: SystemFunctionProps) => CSS.Properties;

export function applyStyles(
  props: SystemFunctionProps,
  styles: SystemFunction[],
  variant?: any,
) {
  let variantStyles = {};

  if (typeof variant !== 'undefined') {
    variantStyles = variant(props);
  }

  const allProps = merge({}, variantStyles, props);

  return styles.reduce((acc, style) => merge({}, acc, style(allProps)), {});
}

export const systemStyles = (props: SystemFunctionProps, variant?: string) =>
  applyStyles(
    props,
    [
      system.alignContent,
      system.alignItems,
      system.alignSelf,
      system.backgroundColor,
      system.borderColor,
      system.borderRadius,
      system.borderWidth,
      system.boxShadow,
      system.display,
      system.flex,
      system.flexDirection,
      system.flexWrap,
      system.fontSize,
      system.fontWeight,
      system.height,
      system.justifyContent,
      system.lineHeight,
      system.margin,
      system.padding,
      system.textAlign,
      system.textColor,
      system.width,
    ],
    variant ? system.variant(variant) : undefined,
  );
