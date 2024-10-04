import useModal from '../../../hooks/useModal';
import Modal from '../../Modal/Modal';
import TextInput from '../../Form/TextInput/TextInput';
import * as S from './MemoryHeader.style';
import { ChangeEvent, useState } from 'react';
import { instance } from '../../../apis/client';
import MemoryType from '../../../types/MemoryType';

interface MemoryHeaderProps {
  memoryData: MemoryType;
  onOpen: () => void;
}

const MemoryHeader = ({ memoryData, onOpen }: MemoryHeaderProps) => {
  const [isOpen, openModal, closeModal] = useModal();
  const [password, setPassword] = useState('');

  const handleModal = () => {
    openModal();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleDelete = async () => {
    try{
      const response = await instance.delete(`/posts/${memoryData.id}`, {
        data:{
          postPassword: password,
        },
      });
      console.log(response);
    }
    catch(error){
      console.log(error);
    }
  };

  return(
    <S.MemoryHeaderWrapper>
      {isOpen &&
        <Modal
          onClose={closeModal}
          title='그룹 삭제'
          BtnText='삭제하기'
          onClick={handleDelete}
        >
          <TextInput
            name='password'
            value={password}
            onChange={onChange}
            placeholder='그룹 비밀번호를 입력해주세요.'
          >
            삭제 권한 인증
          </TextInput>
        </Modal>
      }
      <S.InfoHeader>
        <S.HeaderFlexBox>
          <S.NicknameSpan>{memoryData.nickname}</S.NicknameSpan>
          <S.PublicSpan>공개</S.PublicSpan>
        </S.HeaderFlexBox>
        <S.HeaderFlexBox>
          <S.MemoryEditSpan onClick={() => onOpen()}>
            추억 수정하기
          </S.MemoryEditSpan>
          <S.MemoryEditSpan onClick={() => handleModal()}>
            추억 삭제하기
          </S.MemoryEditSpan>
        </S.HeaderFlexBox>
      </S.InfoHeader>

      <S.InfoBox>
        <S.InfoTitle>{memoryData.title}</S.InfoTitle>
        <S.TagBox>
          {
            memoryData.tags.map(tag => (
              <S.TagSpan key={tag}>{`#${tag}`}</S.TagSpan>
            ))
          }
        </S.TagBox>
      </S.InfoBox>

      <S.InfoFooter>
        <S.FooterFlexBox>
          <S.MomentSpan>
            {`${memoryData.location} · ${memoryData.moment}`}
          </S.MomentSpan>
        </S.FooterFlexBox>
        <S.FooterFlexBox>
          <S.CountSpan>{memoryData.likeCount}</S.CountSpan>
          <S.CountSpan>{memoryData.commentCount}</S.CountSpan>
        </S.FooterFlexBox>
      </S.InfoFooter>
    </S.MemoryHeaderWrapper>
  );
};

export default MemoryHeader;