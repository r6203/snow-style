import {margin} from './margin';
import {defaultTheme as theme} from '@r6203/theme';

test('sets margin', () => {
  expect(margin({m: 2, theme})).toEqual({
    margin: theme.spacing[2],
  });
  expect(margin({m: 2, mt: 4, theme})).toEqual({
    margin: theme.spacing[2],
    marginTop: theme.spacing[4],
  });
  expect(margin({m: 2, mr: 4, theme})).toEqual({
    margin: theme.spacing[2],
    marginRight: theme.spacing[4],
  });
  expect(margin({m: 2, mb: 4, theme})).toEqual({
    margin: theme.spacing[2],
    marginBottom: theme.spacing[4],
  });
  expect(margin({m: 2, ml: 4, theme})).toEqual({
    margin: theme.spacing[2],
    marginLeft: theme.spacing[4],
  });
  expect(margin({m: 2, ml: 0, theme})).toEqual({
    margin: theme.spacing[2],
    marginLeft: theme.spacing[0],
  });
  expect(margin({m: 2, mb: 0, theme})).toEqual({
    margin: theme.spacing[2],
    marginBottom: theme.spacing[0],
  });

  expect(margin({mt: 2, theme})).toEqual({
    marginTop: theme.spacing[2],
  });

  expect(margin({mr: 2, theme})).toEqual({
    marginRight: theme.spacing[2],
  });

  expect(margin({mb: 2, theme})).toEqual({
    marginBottom: theme.spacing[2],
  });

  expect(margin({ml: 2, theme})).toEqual({
    marginLeft: theme.spacing[2],
  });

  expect(margin({mx: 2, theme})).toEqual({
    marginLeft: theme.spacing[2],
    marginRight: theme.spacing[2],
  });
  expect(margin({mx: 2, ml: 6, theme})).toEqual({
    marginLeft: theme.spacing[6],
    marginRight: theme.spacing[2],
  });
  expect(margin({mx: 2, mr: 6, theme})).toEqual({
    marginLeft: theme.spacing[2],
    marginRight: theme.spacing[6],
  });
  expect(margin({mx: 2, ml: 6, mr: 6, theme})).toEqual({
    marginLeft: theme.spacing[6],
    marginRight: theme.spacing[6],
  });

  expect(margin({my: 2, theme})).toEqual({
    marginTop: theme.spacing[2],
    marginBottom: theme.spacing[2],
  });
  expect(margin({my: 2, mt: 6, theme})).toEqual({
    marginTop: theme.spacing[6],
    marginBottom: theme.spacing[2],
  });
  expect(margin({my: 2, mb: 6, theme})).toEqual({
    marginTop: theme.spacing[2],
    marginBottom: theme.spacing[6],
  });
  expect(margin({my: 2, mt: 6, mb: 6, theme})).toEqual({
    marginTop: theme.spacing[6],
    marginBottom: theme.spacing[6],
  });
});
