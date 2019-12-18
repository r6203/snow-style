import {Theme} from '@r6203/theme';

import {StyledProps} from './types';

interface VariantProps {
  variant?: string;
}

export const variant = <T extends VariantProps>(type: string) => ({
  variant,
  theme,
}: StyledProps<T, Theme>) => {
  if (!type) return {};
  if (!theme.variants) return {};
  if (!(type in theme.variants)) return {};

  const variantObject = (theme.variants as any)[type];
  const variants = variant ? variantObject[variant!] : variantObject;

  if (!variants) {
    return {};
  }

  return Object.keys(variants).reduce((acc, vk) => {
    let value = variants[vk];

    if (typeof value === 'function') {
      value = value(theme);
    }

    return {...acc, [vk]: value};
  }, {});
};
