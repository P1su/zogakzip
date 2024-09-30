import styled from 'styled-components';

export const MemoryHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  width: 156rem;
  gap: 2rem;
`;
export const InfoHeader = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
  width: 100%;
`;
export const HeaderFlexBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  gap: 4rem;
`
export const InfoBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  width: 100%;
  height: 15rem;
  gap: 2rem;
`;
export const InfoFooter = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({})};
  width: 100%;
  gap: 2rem;
`;
export const FooterFlexBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  gap: 2rem;
`;
export const InfoTitle = styled.p`
  ${({ theme }) =>  theme.fonts.big_title};
`;
export const TagBox = styled.div`
  width: 100%;
  ${({ theme }) =>  theme.fonts.font_03};
`;
export const TagSpan = styled.span`
  ${({ theme }) =>  theme.fonts.font_03};
  color: ${({ theme }) => theme.colors.G_03};
`;
export const NicknameSpan = styled.span`
  ${({ theme }) =>  theme.fonts.font_06};
`;
export const PublicSpan = styled.span`
  ${({ theme }) =>  theme.fonts.font_06};
  color: ${({ theme }) => theme.colors.G_03};
`;
export const MemoryEditSpan = styled.span`
  ${({ theme }) =>  theme.fonts.font_08};
`;
export const MomentSpan = styled.span`
  ${({ theme }) =>  theme.fonts.font_05 };
`;
export const CountSpan = styled.span`
  ${({ theme }) =>  theme.fonts.font_08};
  color: ${({ theme }) => theme.colors.G_03};
`;
