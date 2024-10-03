import styled from 'styled-components';

export const ImageInputWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column', justify: 'flex-start'})};
  width: 40rem;
  gap: 1rem;
  padding-top: 4rem;
`;
export const TitleText = styled.div`
  ${({ theme }) => theme.fonts.font_05};
`;
export const FlexBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  width: 100%;
  gap: 1rem;
`;
export const FileTextBox = styled.input`
  ${({ theme }) => theme.fonts.font_08};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.G_03};
  border-radius: 6px;
  &:focus{
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
  height: 4.5rem;
  padding: 0 2rem 0 2rem;
`;
export const Label = styled.label`
  ${({ theme: { mixin } }) => mixin. flexCenter({})};
  ${({ theme }) => theme.fonts.font_08};
  width: 10rem;
  height: 4.5rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 6px;
`;
export const FileInput = styled.input`
  display: none;
`;