import styled from 'styled-components';

export const GroupInfoWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({})};
  width: 156rem;
  height: 27.3rem;
  gap: 6rem;
  margin-bottom: 25rem;
`;
export const GroupImg = styled.img`
  width: 26.2rem;
  height: 27.3rem;
`;
export const InfoBox = styled.div`
${({ theme: { mixin }}) => mixin.flexBox({ direction: 'column' })};
  display: flex;
  width: 100%;
  gap: 2rem;
`;
export const InfoHeader = styled.div`
${({ theme: { mixin }}) => mixin.flexBox({ justify : 'space-between' })};
  width: 100%;
`;
export const HeaderFlexBox = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({})};
  gap: 4rem;
`;
export const TitleBox = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({})};
  gap: 3rem;
`;
export const TitleText = styled.span`
  ${({ theme }) => theme.fonts.big_title};
  width: 94.4rem;
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