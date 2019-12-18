import {variant} from './variant';
import {defaultTheme, Theme} from '@r6203/theme';

test('creates variant with primitive value', () => {
  const theme: Theme = {
    ...defaultTheme,
    variants: {
      button: {
        primary: {
          backgroundColor: 'green',
        },
        secondary: {
          backgroundColor: 'yellow',
        },
      },
    },
  };

  expect(variant('button')({variant: 'primary', theme})).toEqual({
    backgroundColor: 'green',
  });
});

test('creates variant with function value', () => {
  let theme: Theme = {
    ...defaultTheme,
    variants: {
      button: {
        primary: {
          backgroundColor: (t: Theme) => t.colors.primary,
        },
        secondary: {
          backgroundColor: 'yellow',
        },
      },
    },
  };

  expect(variant('button')({variant: 'primary', theme})).toEqual({
    backgroundColor: theme.colors.primary,
  });

  theme = {
    ...defaultTheme,
    variants: {
      button: {
        primary: {
          backgroundColor: (t: Theme) => t.colors.primary,
          px: (t: Theme) => t.spacing[4],
          py: (t: Theme) => t.spacing[4],
        },
        secondary: {
          backgroundColor: 'yellow',
        },
      },
    },
  };

  expect(variant('button')({variant: 'primary', theme})).toEqual({
    backgroundColor: theme.colors.primary,
    px: theme.spacing[4],
    py: theme.spacing[4],
  });
});

test('returns empty styles for undefined variant value', () => {
  const theme: Theme = {
    ...defaultTheme,
    variants: {
      button: {},
    },
  };

  expect(variant('button')({variant: 'primary', theme})).toEqual({});
});

test('returns empty styles for undefined variant name', () => {
  const theme: Theme = {
    ...defaultTheme,
    variants: {
      button: {},
    },
  };

  expect(variant('container')({variant: 'foo', theme})).toEqual({});
});

test('returns single variant', () => {
  const theme: Theme = {
    ...defaultTheme,
    variants: {
      text: {
        mb: 2,
      },
    },
  };

  expect(variant('text')({variant: undefined, theme})).toEqual({mb: 2});
});
