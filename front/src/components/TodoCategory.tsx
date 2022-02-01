import React from 'react';
import { useRecoilValue } from 'recoil';

import { todosCategorySelector } from '../atoms/atom.todo';
import { TodoType } from '../types/type';

import { Tabs, Tab } from '../styles/customs';

const TodoCategory = () => {
  const todosCategory = useRecoilValue<TodoType[][]>(todosCategorySelector);

  return (
    <Tabs>
      {todosCategory.map(todo => {
        return <Tab key={todo[0].category}>{todo[0].category}</Tab>;
      })}
    </Tabs>
  );
};

export default TodoCategory;
