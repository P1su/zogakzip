import React from 'react';
import * as S from './Modal.style';
import { IcDelete } from '../../assets/svg';

interface ModalProps {
  children: React.ReactNode;
  title: string;
}

const Modal = ({ children, title }: ModalProps) => {
  return(
    <S.ModalWrapper>
      <IcDelete />
      <S.ModalTitle>{title}</S.ModalTitle>
      {children}
    </S.ModalWrapper>
  );
};

export default Modal;