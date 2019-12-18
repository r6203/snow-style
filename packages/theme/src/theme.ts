export const breakpoints = ['sm', 'md', 'lg', 'xl'] as const;
export type Breakpoint = typeof breakpoints[number];

export interface Theme {
  breakpoints: Record<Breakpoint, string>;
  colors: {
    primary: string;
    secondary: string;
    text: string;
    muted: string;
    background: string;
  };
  spacing: Record<number, string>;
  margin: Theme['spacing'] & {auto: 'auto'};
  padding: Theme['spacing'] & {auto: 'auto'};
  fonts: {
    body: string;
    heading: string;
  };
  fontWeights: {
    light: number;
    normal: number;
    medium: number;
    bold: number;
  };
  fontSizes: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  borderRadius: {
    none: string;
    sm: string;
    default: string;
    lg: string;
    full: string;
  };
  borderWidth: {
    default: string;
    0: string;
    2: string;
    4: string;
    8: string;
  };
  boxShadow: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  height: {
    auto: string;
    full: string;
    screen: string;
  } & Theme['spacing'];
  width: {
    auto: string;
    full: string;
    screen: string;
    '1/2': string;
    '1/3': string;
    '2/3': string;
    '1/4': string;
    '2/4': string;
    '3/4': string;
    '1/5': string;
    '2/5': string;
    '3/5': string;
    '4/5': string;
    '1/6': string;
    '2/6': string;
    '3/6': string;
    '4/6': string;
    '5/6': string;
    '1/12': string;
    '2/12': string;
    '3/12': string;
    '4/12': string;
    '5/12': string;
    '6/12': string;
    '7/12': string;
    '8/12': string;
    '9/12': string;
    '10/12': string;
    '11/12': string;
  } & Theme['spacing'];
  lineHeight: {
    none: number;
    tight: number;
    snug: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
  variants: Record<string, any>;
}

export interface ThemeProps<T> {
  theme: T;
}
