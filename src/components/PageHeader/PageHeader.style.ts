import styled from 'styled-components';

export const PageHeaderWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({ justify: 'space-between', align: 'center' })};
  width: 50%;
  height: 10rem;
  margin-left: 47.5%;
`;
export const IconField = styled.div`
  cursor: pointer;
`;
export const ButtonField = styled.div`
  padding-right: 40rem;
`;
