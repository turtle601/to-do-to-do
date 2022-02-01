import { atom, selector } from 'recoil';
import { TodoType } from '../types/type';

export const todosState = atom<TodoType[]>({
  key: 'todos',
  default: [],
});

export const categoryClickState = atom({
  key: 'categoryClick',
  default: -1,
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

// selector로 원하는 카테고리 리스트 가져오기
export const choiceTodoSelector = selector({
  key: 'choiceTodoSelector',
  get: ({ get }) => {
    const todosCategory = get(todosCategorySelector);
    const categoryClick = get(categoryClickState);

    return todosCategory[categoryClick];
  },
});
