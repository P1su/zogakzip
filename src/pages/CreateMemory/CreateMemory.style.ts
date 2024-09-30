import styled from 'styled-components';

export const CreateMemoryWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  height: 100vh;
  gap: 10rem;
`;
export const TitleText = styled.span`
  ${({ theme }) => theme.fonts.title};
`;