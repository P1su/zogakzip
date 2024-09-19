import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
export const ButtonField = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-end' })};
  width: 100%;
  position: absolute;
  top: 2.7rem;
  padding-right: 18rem;
`;
export const Text = styled.p`
  ${({ theme }) => theme.fonts.font_06};
`;

