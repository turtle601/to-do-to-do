import React from 'react';
import styled, { css } from 'styled-components';
import { useRecoilState } from 'recoil';
import { MdRemoveCircleOutline } from 'react-icons/md';
import { todosState } from '../atoms/atom.todo';

import { VCenter } from '../layout/layout';
import { TodoProps } from '../types/type';

const TodoListItem = ({ todo }: TodoProps) => {
  const [todos, setTodos] = useRecoilState(todosState);

  const removeEvent = (id: number) => {
    setTodos(
      todos.filter(todo => {
        return todo.id !== id;
      }),
    );
  };

  return (
    <TodoItem>
      <Text>{todo.text}</Text>
      <RemoveButton onClick={() => removeEvent(todo.id)}>
        <MdRemoveCircleOutline />
      </RemoveButton>
    </TodoItem>
  );
};

const TodoItem = styled(VCenter)`
  ${({ theme }) => {
    return css`
      padding: ${theme.space[4]};
      color: ${theme.color.bgColor};

      border-top: 1px solid ${theme.color.bgColor};

      &:nth-child(odd) {
        background: ${theme.color.secondary};
      }

      &:nth-child(even) {
        background: ${theme.color.primary};
      }
    `;
  }}
`;

const Text = styled.div`
  flex: 1;
`;

const RemoveButton = styled(VCenter)`
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes['2xl']};
      color: ${theme.color.danger};
    `;
  }}
`;

export default React.memo(TodoListItem);
