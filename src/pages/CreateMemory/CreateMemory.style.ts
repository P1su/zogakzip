import styled from 'styled-components';

export const CreateMemoryWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  padding: 6rem 0 6rem 0;
`;
export const IconField = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-end' })};
  width: 110rem;
  cursor: pointer;
`;
export const TitleText = styled.span`
  ${({ theme }) => theme.fonts.title};
`;