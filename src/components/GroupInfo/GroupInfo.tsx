import * as S from './GroupInfo.style';
import { instance } from '../../apis/client';
import { useLocation, useNavigate } from 'react-router-dom';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import TextInput from '../Form/TextInput/TextInput';
import { ChangeEvent, useEffect, useState } from 'react';

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
  const [data, setData] = useState({
    name: '',
    id: 0,
    badgeCount: 0,
    createdAt: new Date(),
    imageUrl: '',
    introduction: '',
    isPublic: false,
    likeCount: 0,
    postCount: 0,
  });
  const location = useLocation();
  const groupId = location.state.groupId;


  useEffect(() => {
    const fetchGroupInfo = async () => {
      const response = await instance.get(`/groups/${groupId}`, {
      });
      console.log(response);
      setData(response.data);
    };

    fetchGroupInfo();
  }, [groupId]);

  

  const handleModal = () => {
    openModal();
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

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
  const today = new Date();
  const itemDate = new Date(data.createdAt);
  const diffDate = Math.floor((today.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24));



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
            <S.HeaderText>{`D+${diffDate}`}</S.HeaderText>
            <S.HeaderBlurText>|</S.HeaderBlurText>
            <S.HeaderBlurText>{`${data.isPublic ? '공개' : '비공개'}`}</S.HeaderBlurText>
          </S.HeaderFlexBox>
          <S.HeaderFlexBox2>
            <S.HeaderText onClick={() => onOpen()}>그룹 수정하기</S.HeaderText>
            <S.HeaderText onClick={() => handleModal()}>그룹 삭제하기</S.HeaderText>
          </S.HeaderFlexBox2>
        </S.InfoHeader>
        <S.TitleBox>
          <S.TitleText>{name}</S.TitleText>
          <S.SubTitleText>{`추억 ${data.postCount}`}</S.SubTitleText>
          <S.SubTitleText>{`그룹 공감 ${data.likeCount}`}</S.SubTitleText>
        </S.TitleBox>
        <S.IntroText>{introduction}</S.IntroText>
      </S.InfoBox>
    </S.GroupInfoWrapper>
  );
};

export default GroupInfo;