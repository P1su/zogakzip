import styled from 'styled-components';

export const MemoryWrapper = styled.div`
  ${({ theme : { mixin }}) => mixin.flexCenter({})};
  width: 100%;
  height: 100%;
  gap: 6rem;
`;
export const HorizontalLine = styled.div`
  width: 156rem;
  border-bottom: 1px solid  ${({ theme }) => theme.colors.G_01}; 
`;
export const MemoryImage = styled.img`
  width: 78rem;
  height: 78rem;
`;
export const MemoryContent = styled.p`
  ${({ theme }) => theme.fonts.font_01};
  width: 78rem;
`;