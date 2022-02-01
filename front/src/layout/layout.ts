import styled, { css } from 'styled-components';

export const Flex = styled.div`
  display: flex;
`;

export const FlexGap = styled(Flex)`
  ${({ theme }) => {
    return css`
      gap: ${theme.space[2]};
    `;
  }}
`;

export const VFlex = styled(Flex)`
  flex-direction: column;
`;

export const Center = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

export const VCenter = styled(Flex)`
  align-items: center;
`;

export const HCenter = styled(VFlex)`
  align-items: center;
`;
