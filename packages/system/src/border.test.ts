import {borderColor, borderWidth, borderRadius} from './border';
import {defaultTheme as theme} from '@r6203/theme';

test('sets border color', () => {
  expect(borderColor({borderColor: undefined, theme})).toEqual({
    borderColor: undefined,
  });

  expect(borderColor({borderColor: 'primary', theme})).toEqual({
    borderColor: theme.colors.primary,
  });
});

test('sets responsive border color', () => {
  expect(
    borderColor({borderColor: ['secondary', {md: 'primary'}], theme}),
  ).toEqual({
    borderColor: theme.colors.secondary,
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderColor: theme.colors.primary,
    },
  });

  expect(
    borderColor({
      borderColor: [
        'primary',
        {sm: 'primary', md: 'secondary', lg: 'primary', xl: 'secondary'},
      ],
      theme,
    }),
  ).toEqual({
    borderColor: theme.colors.primary,
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      borderColor: theme.colors.primary,
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderColor: theme.colors.secondary,
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      borderColor: theme.colors.primary,
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      borderColor: theme.colors.secondary,
    },
  });
});

test('sets border width', () => {
  expect(borderWidth({borderWidth: undefined, theme})).toEqual({
    borderWidth: undefined,
  });

  expect(borderWidth({borderTopWidth: undefined, theme})).toEqual({
    borderTopWidth: undefined,
  });

  expect(borderWidth({borderRightWidth: undefined, theme})).toEqual({
    borderRightWidth: undefined,
  });

  expect(borderWidth({borderBottomWidth: undefined, theme})).toEqual({
    borderBottomWidth: undefined,
  });

  expect(borderWidth({borderLeftWidth: undefined, theme})).toEqual({
    borderLeftWidth: undefined,
  });

  expect(borderWidth({borderWidth: 2, theme})).toEqual({
    borderWidth: theme.borderWidth[2],
  });

  expect(borderWidth({borderTopWidth: 2, theme})).toEqual({
    borderTopWidth: theme.borderWidth[2],
  });

  expect(borderWidth({borderRightWidth: 2, theme})).toEqual({
    borderRightWidth: theme.borderWidth[2],
  });

  expect(borderWidth({borderBottomWidth: 2, theme})).toEqual({
    borderBottomWidth: theme.borderWidth[2],
  });

  expect(borderWidth({borderLeftWidth: 2, theme})).toEqual({
    borderLeftWidth: theme.borderWidth[2],
  });

  expect(borderWidth({borderTopWidth: 2, borderBottomWidth: 4, theme})).toEqual(
    {
      borderTopWidth: theme.borderWidth[2],
      borderBottomWidth: theme.borderWidth[4],
    },
  );
});

test('sets responsive border width', () => {
  expect(borderWidth({borderWidth: [2, {md: 4}], theme})).toEqual({
    borderWidth: theme.borderWidth[2],
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderWidth: theme.borderWidth[4],
    },
  });

  expect(
    borderWidth({
      borderWidth: [2, {sm: 2, md: 4, lg: 2, xl: 4}],
      theme,
    }),
  ).toEqual({
    borderWidth: theme.borderWidth[2],
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      borderWidth: theme.borderWidth[2],
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderWidth: theme.borderWidth[4],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      borderWidth: theme.borderWidth[2],
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      borderWidth: theme.borderWidth[4],
    },
  });

  expect(
    borderWidth({
      borderTopWidth: [2, {sm: 2, md: 4, lg: 2, xl: 4}],
      theme,
    }),
  ).toEqual({
    borderTopWidth: theme.borderWidth[2],
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      borderTopWidth: theme.borderWidth[2],
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderTopWidth: theme.borderWidth[4],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      borderTopWidth: theme.borderWidth[2],
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      borderTopWidth: theme.borderWidth[4],
    },
  });

  expect(
    borderWidth({
      borderRightWidth: [2, {sm: 2, md: 4, lg: 2, xl: 4}],
      theme,
    }),
  ).toEqual({
    borderRightWidth: theme.borderWidth[2],
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      borderRightWidth: theme.borderWidth[2],
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderRightWidth: theme.borderWidth[4],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      borderRightWidth: theme.borderWidth[2],
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      borderRightWidth: theme.borderWidth[4],
    },
  });

  expect(
    borderWidth({
      borderBottomWidth: [2, {sm: 2, md: 4, lg: 2, xl: 4}],
      theme,
    }),
  ).toEqual({
    borderBottomWidth: theme.borderWidth[2],
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      borderBottomWidth: theme.borderWidth[2],
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderBottomWidth: theme.borderWidth[4],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      borderBottomWidth: theme.borderWidth[2],
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      borderBottomWidth: theme.borderWidth[4],
    },
  });

  expect(
    borderWidth({
      borderLeftWidth: [2, {sm: 2, md: 4, lg: 2, xl: 4}],
      theme,
    }),
  ).toEqual({
    borderLeftWidth: theme.borderWidth[2],
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      borderLeftWidth: theme.borderWidth[2],
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderLeftWidth: theme.borderWidth[4],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      borderLeftWidth: theme.borderWidth[2],
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      borderLeftWidth: theme.borderWidth[4],
    },
  });
});

test('sets border radius', () => {
  expect(borderRadius({borderRadius: undefined, theme})).toEqual({
    borderRadius: undefined,
  });

  expect(borderRadius({borderTopRadius: undefined, theme})).toEqual({
    borderTopRadius: undefined,
  });

  expect(borderRadius({borderRightRadius: undefined, theme})).toEqual({
    borderRightRadius: undefined,
  });

  expect(borderRadius({borderBottomRadius: undefined, theme})).toEqual({
    borderBottomRadius: undefined,
  });

  expect(borderRadius({borderLeftRadius: undefined, theme})).toEqual({
    borderLeftRadius: undefined,
  });

  expect(borderRadius({borderTopLeftRadius: undefined, theme})).toEqual({
    borderTopLeftRadius: undefined,
  });

  expect(borderRadius({borderTopRightRadius: undefined, theme})).toEqual({
    borderTopRightRadius: undefined,
  });

  expect(borderRadius({borderBottomRightRadius: undefined, theme})).toEqual({
    borderBottomRightRadius: undefined,
  });

  expect(borderRadius({borderBottomLeftRadius: undefined, theme})).toEqual({
    borderBottomLeftRadius: undefined,
  });

  expect(borderRadius({borderRadius: 'sm', theme})).toEqual({
    borderRadius: theme.borderRadius['sm'],
  });

  expect(borderRadius({borderTopRadius: 'sm', theme})).toEqual({
    borderTopRadius: theme.borderRadius['sm'],
  });

  expect(borderRadius({borderRightRadius: 'sm', theme})).toEqual({
    borderRightRadius: theme.borderRadius['sm'],
  });

  expect(borderRadius({borderBottomRadius: 'sm', theme})).toEqual({
    borderBottomRadius: theme.borderRadius['sm'],
  });

  expect(borderRadius({borderLeftRadius: 'sm', theme})).toEqual({
    borderLeftRadius: theme.borderRadius['sm'],
  });

  expect(borderRadius({borderTopLeftRadius: 'sm', theme})).toEqual({
    borderTopLeftRadius: theme.borderRadius['sm'],
  });

  expect(borderRadius({borderTopRightRadius: 'sm', theme})).toEqual({
    borderTopRightRadius: theme.borderRadius['sm'],
  });

  expect(borderRadius({borderBottomRightRadius: 'sm', theme})).toEqual({
    borderBottomRightRadius: theme.borderRadius['sm'],
  });

  expect(borderRadius({borderBottomLeftRadius: 'sm', theme})).toEqual({
    borderBottomLeftRadius: theme.borderRadius['sm'],
  });

  expect(
    borderRadius({borderTopRadius: 'sm', borderBottomRadius: 'lg', theme}),
  ).toEqual({
    borderTopRadius: theme.borderRadius['sm'],
    borderBottomRadius: theme.borderRadius['lg'],
  });
});

test('sets responsive border radius', () => {
  expect(borderRadius({borderRadius: ['sm', {md: 'lg'}], theme})).toEqual({
    borderRadius: theme.borderRadius['sm'],
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderRadius: theme.borderRadius['lg'],
    },
  });

  expect(
    borderRadius({
      borderRadius: ['sm', {sm: 'sm', md: 'lg', lg: 'sm', xl: 'lg'}],
      theme,
    }),
  ).toEqual({
    borderRadius: theme.borderRadius['sm'],
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      borderRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderRadius: theme.borderRadius['lg'],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      borderRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      borderRadius: theme.borderRadius['lg'],
    },
  });

  expect(
    borderRadius({
      borderTopRadius: ['sm', {sm: 'sm', md: 'lg', lg: 'sm', xl: 'lg'}],
      theme,
    }),
  ).toEqual({
    borderTopRadius: theme.borderRadius['sm'],
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      borderTopRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderTopRadius: theme.borderRadius['lg'],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      borderTopRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      borderTopRadius: theme.borderRadius['lg'],
    },
  });

  expect(
    borderRadius({
      borderRightRadius: ['sm', {sm: 'sm', md: 'lg', lg: 'sm', xl: 'lg'}],
      theme,
    }),
  ).toEqual({
    borderRightRadius: theme.borderRadius['sm'],
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      borderRightRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderRightRadius: theme.borderRadius['lg'],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      borderRightRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      borderRightRadius: theme.borderRadius['lg'],
    },
  });

  expect(
    borderRadius({
      borderBottomRadius: ['sm', {sm: 'sm', md: 'lg', lg: 'sm', xl: 'lg'}],
      theme,
    }),
  ).toEqual({
    borderBottomRadius: theme.borderRadius['sm'],
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      borderBottomRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderBottomRadius: theme.borderRadius['lg'],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      borderBottomRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      borderBottomRadius: theme.borderRadius['lg'],
    },
  });

  expect(
    borderRadius({
      borderLeftRadius: ['sm', {sm: 'sm', md: 'lg', lg: 'sm', xl: 'lg'}],
      theme,
    }),
  ).toEqual({
    borderLeftRadius: theme.borderRadius['sm'],
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      borderLeftRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderLeftRadius: theme.borderRadius['lg'],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      borderLeftRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      borderLeftRadius: theme.borderRadius['lg'],
    },
  });

  expect(
    borderRadius({
      borderTopLeftRadius: ['sm', {sm: 'sm', md: 'lg', lg: 'sm', xl: 'lg'}],
      theme,
    }),
  ).toEqual({
    borderTopLeftRadius: theme.borderRadius['sm'],
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      borderTopLeftRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderTopLeftRadius: theme.borderRadius['lg'],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      borderTopLeftRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      borderTopLeftRadius: theme.borderRadius['lg'],
    },
  });

  expect(
    borderRadius({
      borderTopRightRadius: ['sm', {sm: 'sm', md: 'lg', lg: 'sm', xl: 'lg'}],
      theme,
    }),
  ).toEqual({
    borderTopRightRadius: theme.borderRadius['sm'],
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      borderTopRightRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderTopRightRadius: theme.borderRadius['lg'],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      borderTopRightRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      borderTopRightRadius: theme.borderRadius['lg'],
    },
  });

  expect(
    borderRadius({
      borderBottomRightRadius: ['sm', {sm: 'sm', md: 'lg', lg: 'sm', xl: 'lg'}],
      theme,
    }),
  ).toEqual({
    borderBottomRightRadius: theme.borderRadius['sm'],
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      borderBottomRightRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderBottomRightRadius: theme.borderRadius['lg'],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      borderBottomRightRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      borderBottomRightRadius: theme.borderRadius['lg'],
    },
  });

  expect(
    borderRadius({
      borderBottomLeftRadius: ['sm', {sm: 'sm', md: 'lg', lg: 'sm', xl: 'lg'}],
      theme,
    }),
  ).toEqual({
    borderBottomLeftRadius: theme.borderRadius['sm'],
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      borderBottomLeftRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      borderBottomLeftRadius: theme.borderRadius['lg'],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      borderBottomLeftRadius: theme.borderRadius['sm'],
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      borderBottomLeftRadius: theme.borderRadius['lg'],
    },
  });
});
