import React, { MouseEvent } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { todosCategorySelector, categoryClickState } from '../atoms/atom.todo';
import { TodoType } from '../types/type';

import { Tabs, Tab } from '../styles/customs';

const TodoCategory = () => {
  const todosCategory = useRecoilValue<TodoType[][]>(todosCategorySelector);
  const setCategoryClick = useSetRecoilState(categoryClickState);

  const clickHandler = (ev: MouseEvent<HTMLElement>) => {
    const event = ev.target as HTMLDivElement;
    const { dataset } = event;

    setCategoryClick(Number(dataset.id));
  };

  return (
    <Tabs>
      {todosCategory.map((todo, idx) => {
        return (
          <Tab key={todo[0].category} onClick={clickHandler} data-id={idx}>
            {todo[0].category}
          </Tab>
        );
      })}
    </Tabs>
  );
};

export default TodoCategory;
