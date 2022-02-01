import { atom, selector } from 'recoil';
import { TodoType } from '../types/type';

export const todosState = atom<TodoType[]>({
  key: 'todos',
  default: [],
});

// selector로 각 카테고리 찾아서 재정의하기

// todos => category로 나눈 배열 리스트
export const todosCategorySelector = selector({
  key: 'todosCategorySelector',
  get: ({ get }) => {
    const todos = get(todosState);

    const categories = Array.from(
      new Set(
        todos.map(todo => {
          return todo.category;
        }),
      ).values(),
    );

    return categories.map(category => {
      return todos.filter(todo => todo.category === category);
    });
  },
});
