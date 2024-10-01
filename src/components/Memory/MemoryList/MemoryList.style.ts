import styled from 'styled-components';

export const MemoryListWrapper = styled.div`
  width: 156rem;
  height: 100vh;
  padding-top: 2rem;
`;
export const NonMemoryBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  padding-top: 10rem;
  gap: 18rem;
`;
export const NonMemoryImage = styled.img`
`;
export const MemoryBox = styled.div`
  display: grid;
  width: 156rem;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`;