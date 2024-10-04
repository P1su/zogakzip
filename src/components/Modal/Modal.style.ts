import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 9999;
  position: fixed;
  bottom: 0;
  left: 0;
`;
export const ModalWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background-color: ${({ theme }) => theme.colors.white};
  width: 48rem;
  z-index: 9999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  padding: 2rem 2rem 2rem 2rem;
`;
export const ModalTitle = styled.div`
  ${({ theme }) => theme.fonts.title};
`;
export const DeleteIconWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-end' })};
  width: 100%;
  cursor: pointer;
`;