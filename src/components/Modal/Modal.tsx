import React from 'react';
import * as S from './Modal.style';
import { IcDelete } from '../../assets/svg';
import BtnLarge from '../button/LargeButton/BtnLarge';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  BtnText: string;
  onClick: () => void;
}

const Modal = ({ onClose, children, title, BtnText, onClick }: ModalProps) => {
  return(
    <>
      <S.Overlay />
      <S.ModalWrapper>
        <S.DeleteIconWrapper onClick={() => onClose()}>
          <IcDelete />
        </S.DeleteIconWrapper>
        <S.ModalTitle>{title}</S.ModalTitle>
        {children}
        <S.ButtonField>
          <BtnLarge onClick = {() => onClick()}>{BtnText}</BtnLarge>
        </S.ButtonField>
      </S.ModalWrapper>
    </>
  );
};

export default Modal;