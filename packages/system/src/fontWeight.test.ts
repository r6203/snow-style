import {fontWeight} from './fontWeight';
import {defaultTheme as theme} from '@r6203/theme';

test('sets font weight', () => {
  const weights = ['light', 'normal', 'medium', 'bold'] as const;

  weights.forEach(w =>
    expect(fontWeight({fontWeight: w, theme})).toEqual({
      fontWeight: theme.fontWeights[w],
    }),
  );
});
