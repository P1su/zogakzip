import styled from 'styled-components';

export const SmallButton = styled.button`
  ${({ theme }) => theme.fonts.font_07};
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  width: 20rem;
  height: 4.5rem;
  border-radius: 6px;
`;