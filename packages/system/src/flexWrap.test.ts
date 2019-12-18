import {flexWrap} from './flexWrap';
import {defaultTheme as theme} from '@r6203/theme';

test('sets flex wrap', () => {
  const aligns = ['wrap'] as const;

  aligns.forEach(a =>
    expect(flexWrap({flexWrap: a, theme})).toEqual({
      flexWrap: a,
    }),
  );
});
