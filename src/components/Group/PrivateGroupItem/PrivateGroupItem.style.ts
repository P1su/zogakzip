import styled from 'styled-components';

export const PrivateGroupItemWrapper = styled.div`
  ${({ theme : { mixin } }) => mixin.flexBox({ direction: 'column' })};
  width: 100%;
  height: 15.6rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.G_03};
  padding: 2rem 2rem 2rem 2rem;
  gap: 2rem;
  cursor: pointer;
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
  padding-right: 18rem;
`;
export const StatusItem = styled.div`
  ${({ theme : { mixin } }) => mixin.flexBox({ direction: 'column', justify: 'flex-start' })};
  width: 5rem;
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
  width: 7rem;
`;
