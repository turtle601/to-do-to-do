import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { lightTheme, darkTheme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />

      <div>hi</div>
    </ThemeProvider>
  );
};

export default App;
