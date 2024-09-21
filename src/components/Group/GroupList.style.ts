import styled from 'styled-components';

export const GroupListWrapper = styled.div`
  width: 156rem;
  height: 100vh;
`;
export const NonGroupBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  padding-top: 10rem;
  gap: 18rem;
`;
export const NonGroupImage = styled.img`
`;
export const GroupBox = styled.div`
  display: grid;
  width: 156rem;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`;