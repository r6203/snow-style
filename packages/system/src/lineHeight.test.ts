import {lineHeight} from './lineHeight';
import {defaultTheme as theme} from '@r6203/theme';

test('sets line height', () => {
  expect(lineHeight({lineHeight: undefined, theme})).toEqual({
    lineHeight: undefined,
  });

  expect(lineHeight({lineHeight: 'snug', theme})).toEqual({
    lineHeight: theme.lineHeight.snug,
  });
});

test('sets responsive line height', () => {
  expect(lineHeight({lineHeight: ['loose', {md: 'snug'}], theme})).toEqual({
    lineHeight: theme.lineHeight.loose,
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      lineHeight: theme.lineHeight.snug,
    },
  });

  expect(
    lineHeight({
      lineHeight: [
        'tight',
        {sm: 'none', md: 'loose', lg: 'normal', xl: 'relaxed'},
      ],
      theme,
    }),
  ).toEqual({
    lineHeight: theme.lineHeight.tight,
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      lineHeight: theme.lineHeight.none,
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      lineHeight: theme.lineHeight.loose,
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      lineHeight: theme.lineHeight.normal,
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      lineHeight: theme.lineHeight.relaxed,
    },
  });
});
