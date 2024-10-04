import * as S from './GroupInfo.style';
import { instance } from '../../apis/client';
import { useLocation, useNavigate } from 'react-router-dom';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import TextInput from '../Form/TextInput/TextInput';
import { ChangeEvent, useState } from 'react';

interface GroupInfoProps {
  name: string;
  imageUrl: string;
  badgeCount: number;
  likeCount: number;
  introduction: string;
  onOpen: () => void;
}

const GroupInfo = ({ name, imageUrl, badgeCount, likeCount, introduction, onOpen }: GroupInfoProps) => {
  const [isOpen, openModal, closeModal] = useModal();
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  const groupId = location.state.groupId;

  const fetchGroupInfo = async () => {
    const response = await instance.get(`/groups/${groupId}`, {
    });
    console.log(response);
  };

  fetchGroupInfo();
  /*const mockData = {
    "id": 123,
    "name": "string",
    "imageUrl": "string",
    "isPublic": true,
    "likeCount": 0,
    "badges": ["badge1", "badge2"],
    "postCount": 0,
    "createdAt": "2024-02-22T07:47:49.803Z",
    "introduction": "string"
  };*/
  const handleModal = () => {
    openModal();
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }
  const handleDelete = async () => {
    try{
      const response = await instance.delete(`/groups/${groupId}`, {
        data: {
          password: password,
        },
      });
      console.log(response);
      navigate('/');
    }
    catch (e){
      console.log(e);
    }

  };
  return(
    <S.GroupInfoWrapper>
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
      <S.GroupImg src={imageUrl} />
      <S.InfoBox>
        <S.InfoHeader>
          <S.HeaderFlexBox>
            <S.HeaderText>날짜 | 공개</S.HeaderText>
          </S.HeaderFlexBox>
          <S.HeaderFlexBox>
            <S.HeaderText onClick={() => onOpen()}>그룹 수정하기</S.HeaderText>
            <S.HeaderText onClick={() => handleModal()}>그룹 삭제하기</S.HeaderText>
          </S.HeaderFlexBox>
        </S.InfoHeader>
        <S.TitleBox>
          <S.TitleText>{name}</S.TitleText>
          <S.SubTitleText>{badgeCount}</S.SubTitleText>
          <S.SubTitleText>{likeCount}</S.SubTitleText>
        </S.TitleBox>
        <S.IntroText>{introduction}</S.IntroText>
      </S.InfoBox>
    </S.GroupInfoWrapper>
  );
};

export default GroupInfo;