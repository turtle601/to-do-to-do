import React from 'react';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyle } from './styles/global';

const App = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <button type="button" onClick={toggleTheme}>
        +
      </button>
      hi
    </ThemeProvider>
  );
};

export default App;
