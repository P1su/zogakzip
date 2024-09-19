import styled from 'styled-components';

export const LargeButton = styled.button`
  ${({ theme }) => theme.fonts.font_05};
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  width: 40rem;
  height: 5rem;
  border-radius: 6px;
`;