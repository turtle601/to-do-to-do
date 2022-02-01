import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

import { errorSelector, useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';

import { todosState } from '../atoms/atom.todo';

import { FormType } from '../types/type';

import { Flex, Center } from '../layout/layout';
import { Input, Form, Button, ErrorMessage } from '../styles/customs';

const TodoInput = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    setValue,
  } = useForm<FormType>();

  const submitTodo = (data: FormType): void => {
    if (data.text) {
      setError('text', { type: 'focus' }, { shouldFocus: true });
    }

    if (data.category) {
      setError('category', { type: 'focus' }, { shouldFocus: true });
    }

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
        <ErrorMessage>{errors?.text?.message}</ErrorMessage>
        <Flex>
          <Input2
            {...register('category', { required: '카테고리를 정해주세요' })}
            placeholder="카테고리 입력"
          />
          <Button type="submit">
            <MdAdd />
          </Button>
        </Flex>
        <ErrorMessage>{errors?.category?.message}</ErrorMessage>
      </Form>
    </InputTemplate>
  );
};

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

export default TodoInput;
