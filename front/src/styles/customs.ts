import styled, { css } from 'styled-components';

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;

  ${({ theme }) => {
    return css`
      color: ${theme.color.primary};
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

export const ErrorMessage = styled.div`
  ${({ theme }) => {
    return css`
      margin-left: ${theme.space[5]};
      font-size: ${theme.fontSizes.xs};
      color: ${theme.color.danger};
    `;
  }}
`;

export const Tabs = styled.ul`
  ${({ theme }) => {
    return css`
      margin-top: ${theme.space[5]};
    `;
  }}
  width: 512px;

  display: flex;
  flex-wrap: wrap;

  gap: 10px;
`;

export const Tab = styled.li<{ idx: number }>`
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.1s background ease-in;

  &:hover {
    opacity: 0.8;
  }

  ${props => {
    return css`
      &:nth-child(${props.idx + 1}) {
        color: ${props.theme.color.spot};
      }
    `;
  }}

  ${({ theme }) => {
    return css`
      padding-left: ${theme.space[4]};
      padding-right: ${theme.space[4]};
      color: ${theme.color.bgColor};
      padding-top: ${theme.space[2]};
      padding-bottom: ${theme.space[2]};
      background-color: ${theme.color.primary};
    `;
  }}
`;
