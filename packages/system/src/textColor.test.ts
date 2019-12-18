import {textColor} from './textColor';
import {defaultTheme as theme} from '@r6203/theme';

test('sets color', () => {
  expect(textColor({textColor: undefined, theme})).toEqual({
    color: undefined,
  });

  expect(textColor({textColor: 'primary', theme})).toEqual({
    color: theme.colors.primary,
  });
});

test('sets responsive color', () => {
  expect(textColor({textColor: ['secondary', {md: 'primary'}], theme})).toEqual(
    {
      color: theme.colors.secondary,
      [`@media (min-width: ${theme.breakpoints.md})`]: {
        color: theme.colors.primary,
      },
    },
  );

  expect(
    textColor({
      textColor: [
        'primary',
        {sm: 'primary', md: 'secondary', lg: 'primary', xl: 'secondary'},
      ],
      theme,
    }),
  ).toEqual({
    color: theme.colors.primary,
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
