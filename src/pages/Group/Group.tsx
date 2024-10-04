import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Group.style';
import BtnSmall from '../../components/button/SmallButton/BtnSmall';
import ToolBar from '../../components/ToolBar/ToolBar';
import MemoryList from '../../components/Memory/MemoryList/MemoryList';
import GroupInfo from '../../components/GroupInfo/GroupInfo';
import useModal from '../../hooks/useModal';
import Modal from './../../components/Modal/Modal';
import TextArea from '../../components/Form/TextArea/TextArea';
import TextInput from '../../components/Form/TextInput/TextInput';
import ImageInput from '../../components/Form/ImageInput/ImageInput';
import PublicToggle from '../../components/Form/PublicToggle/PublicToggle';
import { instance } from '../../apis/client';
import { useState, ChangeEvent, useEffect } from 'react';

interface GroupCreateType {
  name: string;
  imageUrl: string;
  introduction: string;
  isPublic: boolean;
  password: string;
  badgeCount: number;
  likeCount: number;

}

const Group = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const navigate = useNavigate();
  const { groupId } = useParams();

  const [values, setValues] = useState<GroupCreateType>({
    name: '',
    imageUrl: '',
    introduction: '',
    isPublic: true,
    password: '',
    badgeCount: 0,
    likeCount: 0,
  });


  const handleNavigate = () => {
    navigate('/create-memory', {state: {id: groupId}});
  };

  const handleOpen = () => {
    openModal();
  };

  console.log(values)
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    if(file){
      reader.readAsDataURL(file);

      reader.onloadend = () => { 
        setValues({
        ...values,
          [e.target.name]: reader.result
        });
      };
    }
  };
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const onToggle = () => {
    setValues((prevValues) => ({
      ...prevValues,
      isPublic: !prevValues.isPublic,
    }));
  };

  const putGroup = async () => {

    try{
      const response = await instance.put(`/groups/${groupId}/`, values);
      console.log(response);
      closeModal();
    }
    catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchGroupInfo = async () => {
      const response = await instance.get(`/groups/${groupId}`, {
      });
      console.log(response);
      setValues(response.data);
    };

    fetchGroupInfo();
  }, [groupId]);

  return(
    <S.GroupWrapper>
      {isOpen &&
        <Modal
          onClose={closeModal}
          title='그룹 정보 수정'
          BtnText='수정하기'
          onClick={putGroup}
        >
          <TextInput
            name='name'
            value={values.name}
            onChange={onChange}
            placeholder='그룹명을 입력해 주세요'
          >
            그룹명
          </TextInput>
          <ImageInput
            name='imageUrl'
            value={values.imageUrl}
            onChange={handleImage}
          />
          <TextArea
            name='introduction'
            value={values.introduction}
            onChange={onChange}
            placeholder='그룹을 소개해주세요'
          >
            그룹 소개
          </TextArea>
          <PublicToggle 
            value={values.isPublic}
            onToggle={onToggle}
          >
            추억 공개 선택
          </PublicToggle>
          <TextInput
            name='password'
            value={values.password}
            onChange={onChange}
            placeholder='수정 권한 인증'
          >
            수정 권한 인증
          </TextInput>
        </Modal>
      }
      <GroupInfo 
        name={values.name}
        imageUrl={values.imageUrl}
        badgeCount={values.badgeCount}
        likeCount={values.likeCount}
        introduction={values.introduction}
        onOpen={handleOpen}
      />
        <S.MemoryHeader>
          <S.MemoryListTitle>추억 목록</S.MemoryListTitle>
          <S.ButtonField>
            <BtnSmall onClick={handleNavigate}>추억올리기</BtnSmall>
          </S.ButtonField>
        </S.MemoryHeader>
        <ToolBar />
        <MemoryList groupId={Number(groupId)}/>
    </S.GroupWrapper>
  );
};

export default Group;