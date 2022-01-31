import React from 'react';

import { useForm } from 'react-hook-form';

const TodoInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data: any) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register('todo', { required: '할 일을 입력하세요' })} />
        <input
          {...register('category', { required: '카테고리를 정해주세요' })}
        />
        <button type="submit">할 일 입력</button>
      </form>
      <div>{errors?.todo?.message}</div>
      <div>{errors?.category?.message}</div>
    </>
  );
};

export default TodoInput;
