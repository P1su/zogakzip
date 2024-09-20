import styled from 'styled-components';

export const MainWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  height: 100vh;
  gap: 6rem;
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
export const GroupBox = styled.div`
  display: grid;
  width: 156rem;
  height: 100vh;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
