import styled from 'styled-components';

export const ToolBarWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center', justify: 'center' })};
  width: 100%;
  gap: 4rem;
`;
export const TagBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  gap: 1rem;
`;