import { useParams } from 'react-router-dom';
import * as S from './Memory.style';
import MemoryHeader from '../../components/Memory/MemoryHeader/MemoryHeader';
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

interface CreateMemoryType {
  nickname: string;
  title: string;
  content: string;
  postPassword: string;
  imageUrl: string;
  tags: string[];
  location: string;
  moment: string;
  isPublic: boolean;
  id?: number;
  likeCount?: number;
  commentCount?: number;
  createdAt?: string;
  groupPassword?: string;
}

const Memory = () => {
  const [file, setFile] = useState<File | null>(null); 
  const [isOpen, openModal, closeModal] = useModal();
  const [tag, setTag] = useState('');
  const [data, setData] = useState<CreateMemoryType>({    
    nickname: '',
    title: '',
    content: '',
    imageUrl: '',
    tags: [],
    location: '',
    moment:'',
    isPublic: true,
    postPassword: '',
  }
);

  const { postId } = useParams();

  const handleReply = () => {
    alert('미구현 기능입니다.');
  };

  useEffect(() => {
    const fetchMemory = async () => {
      try {
        const response = await instance.get(`/posts/${postId}`);
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchMemory();
  }, [postId]); // Add 'fetchMemory' to the dependency array

  const handleKeydown = () => {
    setData(prevValues => ({
      ...prevValues,
      tags: [...prevValues.tags, tag], // 기존 태그 배열에 새로운 태그 추가
    }));
  };
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    if(file){
      reader.readAsDataURL(file);

      reader.onloadend = () => { 
        setData({
        ...data,
          [e.target.name]: reader.result
        });
      };
      setFile(file);
    }
  };

  const putMemory  = async () => {
    const formData = new FormData();
    if(file){
      formData.append('imageUrl', file);
    }
    formData.append('nickname', data.nickname);
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('postPassword', data.postPassword);
    formData.append('tags', data.tags.join(' '));
    formData.append('location', data.location);
    formData.append('moment', data.moment);
    formData.append('isPublic', data.isPublic? 'true' : 'false');

    try{
      const response = await instance.put(`/posts/${postId}`, data);
      console.log(response);
    }
    catch(error){
      console.log(error);
    };
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      handleKeydown();
      setTag('');
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const onChangeTag = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  const onToggle = () => {
    setData((prevValues) => ({
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
            value={data.nickname}
            onChange={onChange}
            placeholder='닉네임을 입력해주세요'
          >
            닉네임
          </TextInput>
          <TextInput
            name='title'
            value={data.title}
            onChange={onChange}
            placeholder='제목을 입력해주세요'
          >
            제목
          </TextInput>
          <ImageInput
            name='imageUrl'
            value={data.imageUrl}
            onChange={handleImage}
          />
          <TextArea
            name='content'
            value={data.content}
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
            {data.tags.map((tag) => (
              <span key={tag}>{`#${tag}`}</span>
            ))}
          </S.TagBox>
          <TextInput
            name='location'
            value={data.location}
            onChange={onChange}
            placeholder='장소를 입력해주세요'
          >
            장소
          </TextInput>
          <TextInput
            name='moment'
            value={data.moment}
            onChange={onChange}
            placeholder='추억의 순간을 입력해주세요'
          >
            추억의 순간
          </TextInput>
          <PublicToggle
            value={data.isPublic}
            onToggle={onToggle}
          >
            추억 공개 설정
          </PublicToggle>
          <TextInput
            name='postPassword'
            value={data.postPassword}
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
          <S.MemoryImage src={data.imageUrl}/>
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