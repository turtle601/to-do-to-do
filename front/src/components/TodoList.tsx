import React from 'react';
import styled, { css } from 'styled-components';

import { useRecoilValue } from 'recoil';

import { choiceTodoSelector } from '../atoms/atom.todo';

import { TodoType } from '../types/type';

import TodoListItem from './TodoListItem';

const List = styled.ul`
  width: 512px;
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;

  ${({ theme }) => {
    return css`
      margin-top: ${theme.space[4]};
    `;
  }}
`;

const TodoList = () => {
  const choiceTodo = useRecoilValue<TodoType[]>(choiceTodoSelector);

  return (
    <List>
      {choiceTodo?.map(todo => {
        return <TodoListItem key={todo.id} todo={todo} />;
      })}
    </List>
  );
};

export default TodoList;
