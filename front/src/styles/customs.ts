import styled, { css } from 'styled-components';

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;

  ${({ theme }) => {
    return css`
      padding: ${theme.space[6]};
      font-size: ${theme.fontSizes.xl};
      &:focus {
        border-color: ${theme.color.spot};
      }
      &::placeholder {
        color: ${theme.color.gray[500]};
      }
    `;
  }}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  ${({ theme }) => {
    return css`
      gap: ${theme.space[2]};
    `;
  }}
`;
