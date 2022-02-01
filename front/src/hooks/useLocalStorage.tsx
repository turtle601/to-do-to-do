import { useRecoilValue } from 'recoil';
import { todosState } from '../atoms/atom.todo';

import { TodoType } from '../types/type';

export const useLocalStorage = () => {
  const todos = useRecoilValue<TodoType[]>(todosState);

  const storeTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const todoStore = localStorage.getItem('todos');

  return [todoStore, storeTodos];
};
