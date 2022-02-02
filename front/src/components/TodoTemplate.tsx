import React from 'react';
import styled, { css } from 'styled-components';
import { ChildrenProps } from '../types/type.props';

import { HCenter } from '../layout/layout';

const TodoTemplate = ({ children }: ChildrenProps) => {
  return (
    <TodoTemplateStyle>
      <Title>To Do</Title>
      {children}
    </TodoTemplateStyle>
  );
};

const TodoTemplateStyle = styled(HCenter)`
  ${({ theme }) => {
    return css`
      margin-top: ${theme.space[12]};
    `;
  }}
`;

const Title = styled.h1`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes['3xl']};
      color: ${theme.color.primary};
      padding: ${theme.space[6]};
    `;
  }}
`;

export default TodoTemplate;
