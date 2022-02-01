import React from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';

import { choiceTodoSelector } from '../atoms/atom.todo';

import { TodoType } from '../types/type';

const List = styled.ul`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = () => {
  const choiceTodo = useRecoilValue<TodoType[]>(choiceTodoSelector);

  return (
    <List>
      {choiceTodo?.map(todo => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </List>
  );
};

export default TodoList;
