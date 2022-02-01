import React, { MouseEvent } from 'react';

import { useRecoilValue } from 'recoil';

import { choiceTodoSelector } from '../atoms/atom.todo';

import { TodoType } from '../types/type';

const TodoList = () => {
  const choiceTodo = useRecoilValue<TodoType[]>(choiceTodoSelector);
  console.log(choiceTodo);

  return <>1</>;
};

export default TodoList;
