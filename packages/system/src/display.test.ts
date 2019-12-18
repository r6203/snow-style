import {display} from './display';
import {defaultTheme as theme} from '@r6203/theme';

test('sets display', () => {
  const values = ['block', 'flex', 'none'] as const;

  values.forEach(v =>
    expect(display({display: v, theme})).toEqual({
      display: v,
    }),
  );
});
