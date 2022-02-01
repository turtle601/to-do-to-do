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

export const Button = styled.button`
  background: none;
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;

  ${({ theme }) => {
    return css`
      padding-left: ${theme.space[5]};
      padding-right: ${theme.space[5]};
      font-size: ${theme.fontSizes['2xl']};

      background-color: ${theme.color.primary};

      &:hover {
        opacity: 0.8;
      }
    `;
  }}
`;
