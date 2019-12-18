import {width} from './width';
import {defaultTheme as theme} from '@r6203/theme';

test('sets width', () => {
  expect(width({width: undefined, theme})).toEqual({
    width: undefined,
  });

  expect(width({width: 'full', theme})).toEqual({
    width: theme.width.full,
  });

  expect(width({width: 4, theme})).toEqual({
    width: theme.width[4],
  });

  expect(width({width: '1/3', theme})).toEqual({
    width: theme.width['1/3'],
  });
});

test('sets responsive width', () => {
  expect(width({width: ['full', {md: 'screen'}], theme})).toEqual({
    width: theme.width.full,
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      width: theme.width.screen,
    },
  });

  expect(
    width({
      width: ['full', {sm: 'screen', md: '1/2', lg: 'full', xl: 'screen'}],
      theme,
    }),
  ).toEqual({
    width: theme.width.full,
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      width: theme.width.screen,
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      width: theme.width['1/2'],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      width: theme.width.full,
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      width: theme.width.screen,
    },
  });
});
