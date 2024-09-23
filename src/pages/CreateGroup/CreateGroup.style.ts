import { styled, css } from 'styled-components';

const BaseInputStyle = css`
  ${({ theme }) => theme.fonts.font_08};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.G_03};
  border-radius: 6px;
  &:focus{
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
export const CreateGroupWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
`;
export const GroupForm = styled.form`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 40rem;
  gap: 4rem;
`;
export const InputBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column', justify: 'flex-start'})};
  width: 100%;
  gap: 1rem;
`;
export const GroupTextInput = styled.input`
  ${BaseInputStyle}
  height: 4rem;
  padding: 0 2rem 0 2rem;
`;
export const TextArea = styled.textarea`
  ${BaseInputStyle}
  height: 12rem;
  padding: 1.4rem 2rem 0 2rem;
  resize: none;
`;
export const PageTitleText = styled.span`
  ${({ theme }) => theme.fonts.title};
`;
export const InputTitleText = styled.span`
  ${({ theme }) => theme.fonts.font_05};
`;