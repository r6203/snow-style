import {justifyContent} from './justifyContent';
import {defaultTheme as theme} from '@r6203/theme';

test('sets justify content', () => {
  const justify = ['space-between', 'center'] as const;

  justify.forEach(j =>
    expect(justifyContent({justifyContent: j, theme})).toEqual({
      justifyContent: j,
    }),
  );
});
