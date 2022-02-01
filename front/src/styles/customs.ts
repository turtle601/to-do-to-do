import styled, { css } from 'styled-components';

export const Input = styled.input`
  outline: none;
  background: none;

  ${({ theme }) => {
    return css`
      padding: ${theme.space[6]};
      font-size: ${theme.fontSizes.xl};
      &:focus {
        border-color: ${theme.color.primary};
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

  ${({ theme }) => {
    return css`
      gap: ${theme.space[2]};
    `;
  }}
`;
