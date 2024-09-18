import styled from 'styled-components';

export const StartWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.title};
  width: 100%;
  height: 100vh;
`;
export const Text = styled.p`
  ${({ theme }) => theme.fonts.font_06};
`;

