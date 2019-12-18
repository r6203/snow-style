import CSS from 'csstype';

import {Theme, ThemeProps} from '@r6203/theme';

export type StyledProps<P, T> = P & ThemeProps<T>;
export type Color = keyof Theme['colors'] | CSS.Property.Color;
export type Spacing = keyof Theme['spacing'];
