import {height} from './height';
import {defaultTheme as theme} from '@r6203/theme';

test('sets height', () => {
  expect(height({height: undefined, theme})).toEqual({
    height: undefined,
  });

  expect(height({height: 'full', theme})).toEqual({
    height: theme.height.full,
  });

  expect(height({height: 4, theme})).toEqual({
    height: theme.height[4],
  });
});

test('sets responsive height', () => {
  expect(height({height: ['full', {md: 'screen'}], theme})).toEqual({
    height: theme.height.full,
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      height: theme.height.screen,
    },
  });

  expect(
    height({
      height: ['full', {sm: 'screen', md: 4, lg: 'full', xl: 'screen'}],
      theme,
    }),
  ).toEqual({
    height: theme.height.full,
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      height: theme.height.screen,
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      height: theme.height[4],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      height: theme.height.full,
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      height: theme.height.screen,
    },
  });
});
