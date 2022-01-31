import { atom, selector } from 'recoil';
import { TodoType } from '../types/type';

export const todosState = atom<TodoType[]>({
  key: 'todos',
  default: [],
});

// selector로 각 카테고리 찾아서 재정의하기
