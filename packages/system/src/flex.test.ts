import {flex} from './flex';
import {defaultTheme as theme} from '@r6203/theme';

test('sets flex', () => {
  expect(flex({flex: 'auto', theme})).toEqual({
    flex: '1 1 auto',
  });

  expect(flex({flex: 'none', theme})).toEqual({
    flex: 'none',
  });

  expect(flex({flex: 'initial', theme})).toEqual({
    flex: '0 1 auto',
  });

  expect(flex({flex: 1, theme})).toEqual({
    flex: '1 1 0%',
  });
});
