import {Theme} from './theme';

const buttonBase = {
  px: (t: Theme) => t.spacing[4],
  py: (t: Theme) => t.spacing[3],
};

const textBase = {
  textColor: (t: Theme) => t.colors.text,
};

const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
};

export const defaultTheme: Theme = {
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  colors: {
    primary: 'orange',
    secondary: 'green',
    text: 'black',
    muted: 'gray',
    background: 'white',
  },
  spacing,
  margin: {
    ...spacing,
    auto: 'auto',
  },
  padding: {
    ...spacing,
    auto: 'auto',
  },
  fonts: {
    body: 'Rubik, sans-serif',
    heading: 'Rubik, sans-serif',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 600,
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    lg: '0.5rem',
    full: '9999px',
  },
  borderWidth: {
    default: '1px',
    0: '0',
    2: '2px',
    4: '4px',
    8: '8px',
  },
  boxShadow: {
    none: 'none',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  height: {
    auto: 'auto',
    full: '100%',
    screen: '100vh',
    ...spacing,
  },
  width: {
    auto: 'auto',
    full: '100%',
    screen: '100vh',
    ...spacing,
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  variants: {
    button: {
      primary: {
        ...buttonBase,
        backgroundColor: (t: Theme) => t.colors.primary,
      },
      secondary: {
        ...buttonBase,
        backgroundColor: 'secondary',
        textColor: 'white',
      },
      light: {
        backgroundColor: 'white',
        textColor: 'black',
      },
    },
    text: {
      ...textBase,
      mt: 0,
      mb: (t: Theme) => t.margin[2],
    },
    heading: {
      h1: {
        ...textBase,
        fontSize: (t: Theme) => t.fontSizes['3xl'],
      },
      h2: {
        ...textBase,
        fontSize: (t: Theme) => t.fontSizes['2xl'],
      },
      h3: {
        ...textBase,
        fontSize: (t: Theme) => t.fontSizes.xl,
      },
      h4: {
        ...textBase,
        fontSize: (t: Theme) => t.fontSizes.lg,
      },
      h5: {
        ...textBase,
        fontSize: (t: Theme) => t.fontSizes.lg,
      },
      h6: {
        ...textBase,
        fontSize: (t: Theme) => t.fontSizes.lg,
      },
    },
  },
};
