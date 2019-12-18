import {backgroundColor} from './backgroundColor';
import {defaultTheme as theme} from '@r6203/theme';

test('sets background color', () => {
  expect(backgroundColor({backgroundColor: 'primary', theme})).toEqual({
    background: theme.colors.primary,
  });

  expect(backgroundColor({backgroundColor: 'secondary', theme})).toEqual({
    background: theme.colors.secondary,
  });
});
