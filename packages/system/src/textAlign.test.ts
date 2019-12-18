import {textAlign} from './textAlign';
import {defaultTheme as theme} from '@r6203/theme';

test('sets text align', () => {
  const aligns = ['left', 'center', 'right', 'justify'] as const;

  aligns.forEach(a =>
    expect(textAlign({textAlign: a, theme})).toEqual({
      textAlign: a,
    }),
  );
});
