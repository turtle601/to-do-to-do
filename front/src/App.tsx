import React from 'react';

import { ThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { GlobalStyle } from './styles/global';

import { themeSelector } from './atoms/atom.theme';

import TodoTemplate from './components/TodoTemplate';
import TodoInput from './components/TodoInput';
import TodoCategory from './components/TodoCategory';

const App = () => {
  const theme = useRecoilValue(themeSelector);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <TodoTemplate>
        <TodoInput />
        <TodoCategory />
      </TodoTemplate>
    </ThemeProvider>
  );
};

export default App;
