import styled from 'styled-components';

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
  width: 100%;
`;
export const PageTitleText = styled.span`
  ${({ theme }) => theme.fonts.title};
`;
export const InputTitleText = styled.span`
  ${({ theme }) => theme.fonts.font_05};
`;