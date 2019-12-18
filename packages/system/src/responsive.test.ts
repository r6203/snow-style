import {responsive} from './responsive';
import {defaultTheme as theme} from '@r6203/theme';

test('creates non-responsive values', () => {
  expect(responsive({color: undefined}, theme)).toEqual({color: undefined});

  expect(responsive({color: theme.colors.secondary}, theme)).toEqual({
    color: theme.colors.secondary,
  });

  expect(
    responsive(
      {color: theme.colors.secondary, bg: theme.colors.primary},
      theme,
    ),
  ).toEqual({
    bg: theme.colors.primary,
    color: theme.colors.secondary,
  });
});

test('creates responsive values', () => {
  expect(responsive({color: [theme.colors.primary]}, theme)).toEqual({
    color: theme.colors.primary,
  });

  expect(
    responsive(
      {color: [theme.colors.primary], bg: [theme.colors.secondary]},
      theme,
    ),
  ).toEqual({
    bg: theme.colors.secondary,
    color: theme.colors.primary,
  });

  expect(
    responsive(
      {color: [theme.colors.secondary, {md: theme.colors.primary}]},
      theme,
    ),
  ).toEqual({
    color: theme.colors.secondary,
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      color: theme.colors.primary,
    },
  });

  expect(
    responsive(
      {
        bg: [theme.colors.primary, {md: theme.colors.secondary}],
        color: [theme.colors.secondary, {md: theme.colors.primary}],
      },
      theme,
    ),
  ).toEqual({
    bg: theme.colors.primary,
    color: theme.colors.secondary,
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      bg: theme.colors.secondary,
      color: theme.colors.primary,
    },
  });

  expect(
    responsive(
      {
        color: [
          theme.colors.secondary,
          {
            sm: theme.colors.primary,
            md: theme.colors.secondary,
            lg: theme.colors.primary,
            xl: theme.colors.secondary,
          },
        ],
      },
      theme,
    ),
  ).toEqual({
    color: theme.colors.secondary,
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      color: theme.colors.primary,
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      color: theme.colors.secondary,
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      color: theme.colors.primary,
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      color: theme.colors.secondary,
    },
  });
});

test('creates pseudo class values', () => {
  expect(
    responsive(
      {color: [theme.colors.secondary, {focus: theme.colors.primary}]},
      theme,
    ),
  ).toEqual({
    color: theme.colors.secondary,
    '&:focus': {
      color: theme.colors.primary,
    },
  });

  expect(
    responsive(
      {
        bg: [theme.colors.primary, {active: theme.colors.secondary}],
        color: [theme.colors.secondary, {active: theme.colors.primary}],
      },
      theme,
    ),
  ).toEqual({
    bg: theme.colors.primary,
    color: theme.colors.secondary,
    '&:active': {
      bg: theme.colors.secondary,
      color: theme.colors.primary,
    },
  });

  expect(
    responsive(
      {
        color: [
          theme.colors.secondary,
          {
            focus: theme.colors.primary,
            active: theme.colors.secondary,
            hover: theme.colors.primary,
          },
        ],
      },
      theme,
    ),
  ).toEqual({
    color: theme.colors.secondary,
    '&:focus': {
      color: theme.colors.primary,
    },
    '&:active': {
      color: theme.colors.secondary,
    },
    '&:hover': {
      color: theme.colors.primary,
    },
  });
});

test('applies lookup functions', () => {
  expect(
    responsive({color: 'primary'}, theme, {
      color: value => (theme.colors as any)[value],
    }),
  ).toEqual({
    color: theme.colors.primary,
  });
});
