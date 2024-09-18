import styled from 'styled-components';

export const PageHeaderWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  width: 100%;
  height: 10rem;
`;