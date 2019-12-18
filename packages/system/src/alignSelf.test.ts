import {alignSelf} from './alignSelf';
import {defaultTheme as theme} from '@r6203/theme';

test('sets align items', () => {
  const aligns = ['center', 'flex-start'] as const;

  aligns.forEach(a =>
    expect(alignSelf({alignSelf: a, theme})).toEqual({
      alignSelf: a,
    }),
  );
});
