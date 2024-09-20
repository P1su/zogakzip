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