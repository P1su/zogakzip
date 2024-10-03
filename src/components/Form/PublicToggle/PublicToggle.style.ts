import styled from 'styled-components';

export const PublicToggleWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column', justify: 'flex-start'})};
  width: 100%;
  gap: 1rem;
`;
export const TitleText = styled.div`
  ${({ theme }) => theme.fonts.font_05};
`;
export const FlexBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  width: 100%;
  gap: 1rem;
`;
export const ContentTextSpan = styled.span`
  ${({ theme: { mixin } }) => mixin. flexBox({ align: 'center' })};
  ${({ theme }) => theme.fonts.font_08};
  width: 5rem;
  padding-top: 2rem;
`;