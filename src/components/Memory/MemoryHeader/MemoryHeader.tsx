import useModal from '../../../hooks/useModal';
import Modal from '../../Modal/Modal';
import TextInput from '../../Form/TextInput/TextInput';
import * as S from './MemoryHeader.style';
import { ChangeEvent, useState } from 'react';
import { instance } from '../../../apis/client';
import MemoryType from '../../../types/MemoryType';
import { IcComment, IcFlowerIcon } from '../../../assets/svg';
import { useNavigate } from 'react-router-dom';

interface MemoryHeaderProps {
  memoryData: MemoryType;
  groupId: number;
  onOpen: () => void;
}

const MemoryHeader = ({ memoryData, groupId, onOpen }: MemoryHeaderProps) => {
  const [isOpen, openModal, closeModal] = useModal();
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
      navigate(`/group/${groupId}`, {state: {groupId: groupId}});
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
          title='추억 삭제'
          BtnText='삭제하기'
          onClick={handleDelete}
        >
          <TextInput
            name='password'
            value={password}
            onChange={onChange}
            placeholder='추억 비밀번호를 입력해주세요.'
          >
            삭제 권한 인증
          </TextInput>
        </Modal>
      }
      <S.InfoHeader>
        <S.HeaderFlexBox>
          <S.NicknameSpan>{memoryData.nickname}</S.NicknameSpan>
          <S.PublicSpan>{`${memoryData.isPublic ? '공개' : '비공개'}`}</S.PublicSpan>
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
          <S.SpanFlexBox>
            <IcFlowerIcon />
            <S.CountSpan>{memoryData.likeCount}</S.CountSpan>
          </S.SpanFlexBox>
          <S.SpanFlexBox>
            <IcComment />
            <S.CountSpan>{memoryData.commentCount}</S.CountSpan>
          </S.SpanFlexBox>
        </S.FooterFlexBox>
      </S.InfoFooter>
    </S.MemoryHeaderWrapper>
  );
};

export default MemoryHeader;