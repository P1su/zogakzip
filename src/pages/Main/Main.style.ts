import styled from 'styled-components';

export const MainWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  padding-top: 2rem;
  gap: 6rem;
`;
export const Text = styled.p`
  ${({ theme }) => theme.fonts.font_06};
`;
export const GroupBox = styled.div`
  display: grid;
  width: 156rem;
  height: 100vh;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
