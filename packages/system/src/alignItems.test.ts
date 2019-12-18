import {alignItems} from './alignItems';
import {defaultTheme as theme} from '@r6203/theme';

test('sets align items', () => {
  const aligns = ['center', 'flex-start'] as const;

  aligns.forEach(a =>
    expect(alignItems({alignItems: a, theme})).toEqual({
      alignItems: a,
    }),
  );
});
