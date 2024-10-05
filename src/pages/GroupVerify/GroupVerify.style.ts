import styled from 'styled-components';

export const GroupVerifyWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  width: 100%;
  gap: 6rem;
  padding-top: 28.4rem;
`;
export const TitleBox = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  width: 100%;
  gap: 2rem;
`;
export const TitleText = styled.span`
  ${({ theme }) => theme.fonts.title};
`;
export const SubtitleText = styled.span`
  ${({ theme }) => theme.fonts.font_08};
`;