import React from 'react';
import styled from 'styled-components';
import { ChildrenProps } from '../types/type.props';

import { HCenter } from '../layout/layout';

const TodoTemplate = ({ children }: ChildrenProps) => {
  return (
    <TodoTemplateStyle>
      <div>Title</div>
      {children}
    </TodoTemplateStyle>
  );
};

const TodoTemplateStyle = styled(HCenter)``;

export default TodoTemplate;
