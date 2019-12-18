import {boxShadow} from './boxShadow';
import {defaultTheme as theme} from '@r6203/theme';

test('sets box shadow', () => {
  expect(boxShadow({boxShadow: undefined, theme})).toEqual({
    boxShadow: undefined,
  });

  expect(boxShadow({boxShadow: 'sm', theme})).toEqual({
    boxShadow: theme.boxShadow.sm,
  });
});

test('sets responsive box shadow', () => {
  expect(boxShadow({boxShadow: ['sm', {md: 'md'}], theme})).toEqual({
    boxShadow: theme.boxShadow.sm,
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      boxShadow: theme.boxShadow.md,
    },
  });

  expect(
    boxShadow({
      boxShadow: ['md', {sm: 'sm', md: 'md', lg: 'lg', xl: 'xl'}],
      theme,
    }),
  ).toEqual({
    boxShadow: theme.boxShadow.md,
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      boxShadow: theme.boxShadow.sm,
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      boxShadow: theme.boxShadow.md,
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      boxShadow: theme.boxShadow.lg,
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      boxShadow: theme.boxShadow.xl,
    },
  });
});
