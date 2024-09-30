import styled from 'styled-components';

export const MemoryWrapper = styled.div`
  ${({ theme : { mixin }}) => mixin.flexCenter({})};
  width: 100%;
`;