import React from 'react';

import { ThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { GlobalStyle } from './styles/global';

import { themeSelector } from './atoms/atom.theme';

import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const theme = useRecoilValue(themeSelector);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoTemplate />
    </ThemeProvider>
  );
};

export default App;
