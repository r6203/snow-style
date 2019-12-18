import {padding} from './padding';
import {defaultTheme as theme} from '@r6203/theme';

test('sets padding', () => {
  expect(padding({p: 2, theme})).toEqual({
    padding: theme.spacing[2],
  });
  expect(padding({p: 2, pt: 4, theme})).toEqual({
    padding: theme.spacing[2],
    paddingTop: theme.spacing[4],
  });
  expect(padding({p: 2, pr: 4, theme})).toEqual({
    padding: theme.spacing[2],
    paddingRight: theme.spacing[4],
  });
  expect(padding({p: 2, pb: 4, theme})).toEqual({
    padding: theme.spacing[2],
    paddingBottom: theme.spacing[4],
  });
  expect(padding({p: 2, pl: 4, theme})).toEqual({
    padding: theme.spacing[2],
    paddingLeft: theme.spacing[4],
  });
  expect(padding({p: 2, pl: 0, theme})).toEqual({
    padding: theme.spacing[2],
    paddingLeft: theme.spacing[0],
  });
  expect(padding({p: 2, pb: 0, theme})).toEqual({
    padding: theme.spacing[2],
    paddingBottom: theme.spacing[0],
  });

  expect(padding({p: 2, theme})).toEqual({
    padding: theme.spacing[2],
  });

  expect(padding({pt: 2, theme})).toEqual({
    paddingTop: theme.spacing[2],
  });

  expect(padding({pr: 2, theme})).toEqual({
    paddingRight: theme.spacing[2],
  });

  expect(padding({pb: 2, theme})).toEqual({
    paddingBottom: theme.spacing[2],
  });

  expect(padding({pl: 2, theme})).toEqual({
    paddingLeft: theme.spacing[2],
  });

  expect(padding({px: 2, theme})).toEqual({
    paddingLeft: theme.spacing[2],
    paddingRight: theme.spacing[2],
  });
  expect(padding({px: 2, pl: 6, theme})).toEqual({
    paddingLeft: theme.spacing[6],
    paddingRight: theme.spacing[2],
  });
  expect(padding({px: 2, pr: 6, theme})).toEqual({
    paddingLeft: theme.spacing[2],
    paddingRight: theme.spacing[6],
  });
  expect(padding({px: 2, pl: 6, pr: 6, theme})).toEqual({
    paddingLeft: theme.spacing[6],
    paddingRight: theme.spacing[6],
  });

  expect(padding({py: 2, theme})).toEqual({
    paddingTop: theme.spacing[2],
    paddingBottom: theme.spacing[2],
  });
  expect(padding({py: 2, pt: 6, theme})).toEqual({
    paddingTop: theme.spacing[6],
    paddingBottom: theme.spacing[2],
  });
  expect(padding({py: 2, pb: 6, theme})).toEqual({
    paddingTop: theme.spacing[2],
    paddingBottom: theme.spacing[6],
  });
  expect(padding({py: 2, pt: 6, pb: 6, theme})).toEqual({
    paddingTop: theme.spacing[6],
    paddingBottom: theme.spacing[6],
  });
});

test('sets responsive padding', () => {
  expect(
    padding({
      p: [4, {sm: 8, md: 10, lg: 12, xl: 16}],
      theme,
    }),
  ).toEqual({
    padding: theme.spacing[4],
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      padding: theme.spacing[8],
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      padding: theme.spacing[10],
    },
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      padding: theme.spacing[12],
    },
    [`@media (min-width: ${theme.breakpoints.xl})`]: {
      padding: theme.spacing[16],
    },
  });
});
