import styled from 'styled-components';

export const GroupInfoWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({})};
  width: 156rem;
  height: 27.3rem;
  gap: 6rem;
  margin-bottom: 26rem;
`;
export const GroupImg = styled.img`
  width: 26.2rem;
  height: 27.3rem;
`;
export const InfoBox = styled.div`
${({ theme: { mixin }}) => mixin.flexBox({ direction: 'column' })};
  display: flex;
  width: 100%;
  height: 27.3rem;
  gap: 2rem;
`;
export const InfoHeader = styled.div`
${({ theme: { mixin }}) => mixin.flexBox({ justify : 'space-between' })};
  width: 100%;
`;
export const HeaderFlexBox = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({justify: 'space-between' })};
  width: 11rem;
`;
export const HeaderFlexBox2 = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({justify: 'space-between' })};
  width: 25rem;
`;
export const TitleBox = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({ align: 'center' })};
  gap: 3rem;
`;
export const TitleText = styled.span`
  ${({ theme }) => theme.fonts.big_title};
  
`;
export const SubTitleText = styled.span`
  ${({ theme }) => theme.fonts.font_02};
`;
export const IntroText = styled.p`
  ${({ theme }) => theme.fonts.font_03};
`;
export const HeaderText = styled.span`
  ${({ theme }) => theme.fonts.font_08};
  cursor: pointer;
`;
export const HeaderBlurText = styled.span`
  ${({ theme }) => theme.fonts.font_08};
  color: ${({ theme }) => theme.colors.G_01};
  cursor: pointer;
`
