import styled from 'styled-components';

export const PublicGroupItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 37.5rem;
  height: 55.1rem;
  padding: 2rem 2rem 0 2rem;
  border: 1px solid ${({ theme }) => theme.colors.G_03};
  border-radius: 12px;
  gap: 2rem;
`;
export const GroupImage = styled.img`
  width: 33.5rem;
  height: 33.5rem;
  border-radius: 12px;
`;
export const DateBox = styled.div`
  ${({ theme : { mixin } }) => mixin.flexBox({})};
  gap: 1rem;
`;
export const InfoBox = styled.div`
  ${({ theme : { mixin } }) => mixin.flexBox({ direction: 'column' })};
  gap: 1rem;
`;
export const StatusBox = styled.div`
  ${({ theme : { mixin } }) => mixin.flexBox({})};
  height: 3.8rem;
  gap: 4rem;
`;
export const StatusItem = styled.div`
  ${({ theme : { mixin } }) => mixin.flexBox({ direction: 'column', justify: 'flex-start' })};
  width: 100%;
  height: 3.8rem;
  gap: 0.5rem;
`;
export const StatusTextBox = styled.div`
  ${({ theme : { mixin } }) => mixin.flexBox({ direction: 'row', justify: 'flex-start', align: 'center' })};
  width: 100%;
  height: 2.2rem;
  gap: 0.5rem;
`;
export const TextSpan = styled.span`
  ${({ theme }) => theme.fonts.font_08};
`;
export const TitleSpan = styled.span`
  ${({ theme }) => theme.fonts.font_04};
`;
export const ContentSpan = styled.span`
  ${({ theme }) => theme.fonts.font_06};
`;
export const SubTitleSpan = styled.span`
  ${({ theme }) => theme.fonts.font_09};
  color: ${({ theme }) => theme.colors.G_02};
`;
