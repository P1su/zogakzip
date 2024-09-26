import styled from 'styled-components';

export const PageHeaderWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({ justify: 'center', align: 'center' })};
  width: 100%;
  height: 10rem;
`;
export const IconField = styled.div`
  position: relative;
`;
export const ButtonField = styled.div`
  padding-left: 135rem;
`;
