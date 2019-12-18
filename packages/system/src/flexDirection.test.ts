import {flexDirection} from './flexDirection';
import {defaultTheme as theme} from '@r6203/theme';

test('sets align items', () => {
  const aligns = ['row', 'column'] as const;

  aligns.forEach(a =>
    expect(flexDirection({flexDirection: a, theme})).toEqual({
      flexDirection: a,
    }),
  );
});
