import styled from 'styled-components';

export const PageHeaderWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({ justify: 'space-between', align: 'center' })};
  width: 100%;
  height: 10rem;
`;
export const IconField = styled.div`
  margin-left: 50%;
`;
export const ButtonField = styled.div`
  padding-right: 40rem;
`;
