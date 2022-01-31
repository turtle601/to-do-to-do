import React from 'react';
import { ChildrenProps } from '../types/type.props';

const TodoTemplate = ({ children }: ChildrenProps) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default TodoTemplate;
