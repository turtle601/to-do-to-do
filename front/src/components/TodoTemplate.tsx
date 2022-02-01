import React from 'react';
import { ChildrenProps } from '../types/type.props';

import { HCenter } from '../layout/layout';

const TodoTemplate = ({ children }: ChildrenProps) => {
  return (
    <HCenter>
      <div>Title</div>
      {children}
    </HCenter>
  );
};

export default TodoTemplate;
