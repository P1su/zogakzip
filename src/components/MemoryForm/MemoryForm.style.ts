import styled from 'styled-components';

export const MemoryFormWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  gap: 5rem;
`;
export const LayerBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  width: 96rem;
  gap: 10rem;
`;
export const FormBox = styled.div`
  width: 100%;
`;
export const TagBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  width: 40rem;
  gap: 1rem;
  span {
    ${({ theme }) => theme.fonts.font_08};
    color: ${({ theme }) => theme.colors.G_01};
  }  
`;