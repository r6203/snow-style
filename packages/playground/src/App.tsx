import React from 'react';
import {ThemeProvider} from 'emotion-theming';

import 'normalize.css';

import {defaultTheme as theme} from '@r6203/theme';
import {Flexbox} from '@r6203/styled';

const App = () => (
  <ThemeProvider theme={theme}>
    <Flexbox></Flexbox>
  </ThemeProvider>
);

export default App;
