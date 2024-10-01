import styled from 'styled-components';

export const ReplyWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  width: 100%;
`;
export const CountSpan = styled.span`
  width: 156rem;
  ${({ theme: { mixin }}) => mixin.flexBox({ justify: 'flex-start' })};
  ${({ theme }) => theme.fonts.font_02};
  
`;
export const HorizontalLine = styled.div`
  width: 156rem;
  margin-top: 1rem;
  border-top: 1px solid  ${({ theme }) => theme.colors.G_01}; 
`;
export const NonReplySpan = styled.span`
  ${({ theme }) => theme.fonts.font_02};
  color: ${({ theme }) => theme.colors.G_01};
  padding: 12rem 0 1.9rem 0;
`;
export const SubtitleSpan = styled.span`
  ${({ theme }) => theme.fonts.font_08};
  color: ${({ theme }) => theme.colors.G_02};
`;