import {alignContent} from './alignContent';
import {defaultTheme as theme} from '@r6203/theme';

test('sets align content', () => {
  const aligns = ['center', 'flex-start'] as const;

  aligns.forEach(a =>
    expect(alignContent({alignContent: a, theme})).toEqual({
      alignContent: a,
    }),
  );
});
