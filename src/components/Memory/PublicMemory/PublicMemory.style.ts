import styled from 'styled-components';

export const PublicMemoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 37.5rem;
  height: 55.1rem;
  padding: 2rem 2rem 0 2rem;
  border: 1px solid ${({ theme }) => theme.colors.G_03};
  border-radius: 12px;
  gap: 2rem;
  cursor: pointer;
`;
export const GroupImage = styled.img`
  width: 33.5rem;
  height: 33.5rem;
  border-radius: 12px;
`;
export const NicknameBox = styled.div`
  ${({ theme : { mixin } }) => mixin.flexBox({})};
  gap: 1rem;
`;
export const InfoBox = styled.div`
  ${({ theme : { mixin } }) => mixin.flexBox({ direction: 'column' })};
  gap: 1rem;
`;
export const TagBox = styled.div`
  ${({ theme : { mixin } }) => mixin.flexBox({})};
  gap: 1rem;
`;
export const MeomryFooter = styled.div`
${({ theme : { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
  width: 100%;
  padding-top: 2.5rem;
`;
export const FooterBox = styled.div`
  display: flex;
  gap: 2rem;
`;
export const NicknameText = styled.span`
  ${({ theme }) => theme.fonts.font_08};
`;
export const TextSpan = styled.span`
  ${({ theme }) => theme.fonts.font_08};
  color: ${({ theme }) => theme.colors.G_02};
`;
export const TitleSpan = styled.span`
  ${({ theme }) => theme.fonts.font_04};
`;
export const SubTitleSpan = styled.span`
  ${({ theme }) => theme.fonts.font_09};
`;