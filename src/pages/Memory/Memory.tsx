import { useParams } from 'react-router-dom';
import * as S from './Memory.style';
import MemoryHeader from '../../components/Memory/MemoryHeader/MemoryHeader';
import mockImage from '../../../public/mockImage.png';
import BtnLarge from '../../components/button/LargeButton/BtnLarge';
import Reply from '../../components/Reply/Reply';
import { instance } from '../../apis/client';
import { useEffect, useState, ChangeEvent } from 'react';
import useModal from '../../hooks/useModal';
import Modal from '../../components/Modal/Modal';
import TextInput from '../../components/Form/TextInput/TextInput';
import TextArea from '../../components/Form/TextArea/TextArea';
import ImageInput from '../../components/Form/ImageInput/ImageInput';
import PublicToggle from '../../components/Form/PublicToggle/PublicToggle';

interface TempType {
  id: number;
  nickname: string;
  title: string;
  content: string;
  imageUrl: string;
  tags: string[];
  location: string;
  moment: string;
  isPublic: boolean;
  postPassword: string;
}
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

const Memory = () => {
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
  const [isOpen, openModal, closeModal] = useModal();
  const [tag, setTag] = useState('');
  const [data, setData] = useState<TempType>({    
    id: 0,
    nickname: '',
    title: '',
    content: '',
    imageUrl: '',
    tags: [],
    location: '',
    moment:'',
    isPublic: true,
    postPassword: '',}
);

  const { groupId, postId } = useParams();

  const fetchMemory = async () => {
    try{
      const response = await instance.get(`/posts/${postId}`);
      console.log(response);
      setData(response.data);
    }
    catch(error){
      console.log(error);
    }
  };

  const putMemory  = async () => {
    try{
      const response = await instance.put(`/posts/${postId}`, values);
      console.log(response);
    }
    catch(error){
      console.log(error);
    };
  };

  const handleReply = () => {
    alert('미구현 기능입니다.');
  };

  useEffect(() => {
    fetchMemory();
  },[])

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

  console.log(data);
  return(
    <S.MemoryWrapper>
      {
        isOpen &&
        <Modal
          onClose={closeModal}
          title='추억 수정하기'
          BtnText='수정하기'
          onClick={putMemory}
        >
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
            onChange={onChange}
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
            placeholder='추억의 순간을 입력해주세요'
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
        </Modal>
      }
      {data?
        <>
          <MemoryHeader 
            memoryData={data}
            onOpen={openModal}
          />
          <S.HorizontalLine />
          <S.MemoryImage src={mockImage}/>
          <S.MemoryContent>{data.content}</S.MemoryContent>
          <BtnLarge onClick={handleReply}>댓글 등록하기</BtnLarge>
          <Reply /> 
        </>
        : null 
      }
    </S.MemoryWrapper>
  ); 
};

export default Memory;