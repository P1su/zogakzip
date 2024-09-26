import styled from 'styled-components';

export const CreateMemoryWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
export const TitleText = styled.span`
  ${({ theme }) => theme.fonts.title};
`;