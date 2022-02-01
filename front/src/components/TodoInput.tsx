import React from 'react';
import styled, { css } from 'styled-components';
import { useRecoilState } from 'recoil';

import { useForm } from 'react-hook-form';

import { todosState } from '../atoms/atom.todo';

import { FormType } from '../types/type';

import { Flex, Center } from '../layout/layout';
import { Input, Form } from '../styles/customs';

const Input2 = styled(Input)`
  flex: 1;
`;

const InputTemplate = styled(Center)`
  width: 512px;

  ${({ theme }) => {
    return css`
      height: ${theme.space[48]};
    `;
  }}
`;

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
    <InputTemplate>
      <Form onSubmit={handleSubmit(submitTodo)}>
        <Input
          {...register('text', { required: '할 일을 입력하세요' })}
          placeholder="할 일을 입력해주세요"
        />
        <Flex>
          <Input2
            {...register('category', { required: '카테고리를 정해주세요' })}
            placeholder="카테고리 입력"
          />
          <button type="submit">할 일 입력</button>
        </Flex>
      </Form>
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
    </InputTemplate>
  );
};

export default TodoInput;
