import React from 'react';
import { useRecoilState } from 'recoil';

import { useForm } from 'react-hook-form';

import { todosState } from '../atoms/atom.todo';

import { FormType } from '../types/type';

const TodoInput = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormType>();

  const submitTodo = (data: FormType): void => {
    setTodos([...todos, { id: Date.now(), ...data }]);
    setValue('text', '');
    setValue('category', '');
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitTodo)}>
        <input {...register('text', { required: '할 일을 입력하세요' })} />
        <input
          {...register('category', { required: '카테고리를 정해주세요' })}
        />
        <button type="submit">할 일 입력</button>
      </form>
      <div>{errors?.text?.message}</div>
      <div>{errors?.category?.message}</div>

      {todos.map(todo => {
        return (
          <ul>
            <li>{todo.category}</li>
          </ul>
        );
      })}

      {todos.map(todo => {
        return (
          <ul>
            <li>{todo.text}</li>
          </ul>
        );
      })}
    </>
  );
};

export default TodoInput;
