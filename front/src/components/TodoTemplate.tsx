import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const TodoTemplate = () => {
  const [theme, setTheme] = useDarkMode();

  return (
    <>
      TodoInput
      <button type="button" onClick={setTheme}>
        +
      </button>
    </>
  );
};

export default TodoTemplate;
