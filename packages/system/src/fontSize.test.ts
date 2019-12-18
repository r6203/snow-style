import {fontSize} from './fontSize';
import {defaultTheme as theme} from '@r6203/theme';

test('sets font size', () => {
  const sizes = [
    'xs',
    'sm',
    'base',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
  ] as const;

  sizes.forEach(s =>
    expect(fontSize({fontSize: s, theme})).toEqual({
      fontSize: theme.fontSizes[s],
    }),
  );

  expect(fontSize({fontSize: ['sm', {md: 'xl'}], theme})).toEqual({
    fontSize: theme.fontSizes['sm'],
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      fontSize: theme.fontSizes['xl'],
    },
  });
});
