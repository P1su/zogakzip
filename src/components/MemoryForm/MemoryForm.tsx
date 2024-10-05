import { ChangeEvent, useState } from 'react';
import * as S from './MemoryForm.style';
import { instance } from '../../apis/client';
import BtnLarge from '../button/LargeButton/BtnLarge';
import TextInput from '../Form/TextInput/TextInput';
import ImageInput from '../Form/ImageInput/ImageInput';
import TextArea from '../Form/TextArea/TextArea';
import PublicToggle from '../Form/PublicToggle/PublicToggle';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';

interface CreateMemoryType {
  nickname: string;
  title: string;
  content: string;
  postPassword: string;
  groupPassword: string;
  imageUrl: string;
  tags: string[];
  location: string;
  moment: string;
  isPublic: boolean;
}

interface MemoryFormProps {
  groupId: number;
}

const MemoryForm = ({ groupId }: MemoryFormProps) => {
  const [isOpen, openModal, closeModal] = useModal();
  const [tag, setTag] = useState('');
  const navigate = useNavigate();
  const [values, setValues] = useState<CreateMemoryType>({
    nickname: '',
    title: '',
    content: '',
    postPassword: '',
    groupPassword: '',
    imageUrl: '',
    tags: [],
    location: '',
    moment: '',
    isPublic: true,
  });
  const [file, setFile] = useState<File | null>(null);  


  const handleKeydown = () => {
    setValues(prevValues => ({
      ...prevValues,
      tags: [...prevValues.tags, tag], // 기존 태그 배열에 새로운 태그 추가
    }));
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      handleKeydown();
      setTag('');
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const onChangeTag = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  const onToggle = () => {
    setValues((prevValues) => ({
      ...prevValues,
      isPublic: !prevValues.isPublic,
    }));
  };

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
      setFile(file);
    }
  };

  const postMemory = async () => {
    const formData = new FormData();
    if(file){
      formData.append('imageUrl', file);
    }
    formData.append('nickname', values.nickname);
    formData.append('title', values.title);
    formData.append('content', values.content);
    formData.append('postPassword', values.postPassword);
    formData.append('groupPassword', values.groupPassword);
    formData.append('tags', values.tags.join('#'));
    formData.append('location', values.location);
    formData.append('moment', values.moment);
    formData.append('isPublic', String(values.isPublic));
    try{
      const response = await instance.post(`/groups/posts/${groupId}`,formData);
      console.log(response);
      navigate(`/group/${groupId}/memory/${response.data.id}`);
    }
    catch (error){
      console.log(error);
    }
  };


  console.log(values)
  return(
    <S.MemoryFormWrapper>
      {isOpen &&
        <Modal
          onClose={closeModal}
          title='그룹 권한 인증'
          BtnText='제출하기'
          onClick={postMemory}
        >
          <TextInput
            name='groupPassword'
            value={values.groupPassword}
            onChange={onChange}
            placeholder='그룹 비밀번호를 입력해주세요.'
          >
            그룹 권한 인증
          </TextInput>
        </Modal>
      }
      <S.LayerBox>
        <S.FormBox>
          <TextInput
            name='nickname'
            value={values.nickname}
            onChange={onChange}
            placeholder='닉네임을 입력해주세요'
          >
            닉네임
          </TextInput>
          <TextInput
            name='title'
            value={values.title}
            onChange={onChange}
            placeholder='제목을 입력해주세요'
          >
            제목
          </TextInput>
          <ImageInput
            name='imageUrl'
            value={values.imageUrl}
            onChange={handleImage}
          />
          <TextArea
            name='content'
            value={values.content}
            placeholder='본문 내용을 입력해주세요'
            onChange={onChange}
          >
            본문
          </TextArea>
        </S.FormBox>

        <S.FormBox>
          <TextInput
            name='tag'
            value={tag}
            onChange={onChangeTag}
            onKeyDown={onEnter}
            placeholder='태그를 입력해주세요'
          >
            태그
          </TextInput>
          <S.TagBox>
            {values.tags.map((tag) => (
              <span key={tag}>{`#${tag}`}</span>
            ))}
          </S.TagBox>
          <TextInput
            name='location'
            value={values.location}
            onChange={onChange}
            placeholder='장소를 입력해주세요'
          >
            장소
          </TextInput>
          <TextInput
            name='moment'
            value={values.moment}
            onChange={onChange}
            placeholder='YYYY-MM-DD'
          >
            추억의 순간
          </TextInput>
          <PublicToggle
            value={values.isPublic}
            onToggle={onToggle}
          >
            추억 공개 설정
          </PublicToggle>
          <TextInput
            name='postPassword'
            value={values.postPassword}
            onChange={onChange}
            placeholder='추억의 비밀번호를 생성해주세요'
          >
            비밀번호 생성
          </TextInput>
        </S.FormBox>
      </S.LayerBox>
      <BtnLarge onClick={openModal}>추억 생성하기</BtnLarge>
    </S.MemoryFormWrapper>
  );
};

export default MemoryForm;