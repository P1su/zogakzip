import { ChangeEvent, useState } from 'react';
import * as S from './MemoryForm.style';
import Toggle from '../Toggle/Toggle';

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

const MemoryForm = () => {

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

  const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
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
  
  return(
    <S.MemoryFormWrapper>
      <S.FormBox>
        <S.InputBox>
          <S.InputTitleText>닉네임</S.InputTitleText>
          <S.TextInput 
            name='nickname'
            value={values.nickname}
            onChange={onChange}
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitleText>제목</S.InputTitleText>
          <S.TextInput 
            name='title'
            value={values.title}
            onChange={onChange}
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitleText>이미지</S.InputTitleText>
          <S.FlexBox>
            <S.FileTextBox
              name='imageUrl'
              placeholder='사진을 첨부하세요'
              readOnly
            />
            <S.Label
              htmlFor='file'
            >
              파일 선택
            </S.Label>
            <S.FileInput 
              type='file' 
              name='imageUrl' 
              id='file'
              onChange={onChange}
            />
          </S.FlexBox>
        </S.InputBox>
        <S.InputBox>
          <S.InputTitleText>본문</S.InputTitleText>
            <S.TextArea
              name='content'
              value={values.content}
              placeholder='그룹을 소개해주세요'
              onChange={onChange}
            />
        </S.InputBox>
      </S.FormBox>

      <S.FormBox>
        <S.InputBox>
          <S.InputTitleText>태그</S.InputTitleText>
          <S.TextInput 
            name='tags'
            value={values.tags}
            onChange={onChange}
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitleText>장소</S.InputTitleText>
          <S.TextInput 
            name='location'
            value={values.location}
            onChange={onChange}
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitleText>추억의 순간</S.InputTitleText>
          <S.TextInput 
            name='moment'
            value={values.moment}
            onChange={onChange}
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitleText>추억 공개 선택</S.InputTitleText>
            <S.FlexBox>
            { values.isPublic ?
                  <S.ContentText>공개</S.ContentText>
                :
                  <S.ContentText>비공개</S.ContentText>
              }
              <Toggle 
                isActive={values.isPublic}
                onToggle={onToggle}  
              />
          </S.FlexBox>
        </S.InputBox>
        <S.InputBox>
          <S.InputTitleText>비밀번호 생성</S.InputTitleText>
          <S.TextInput 
            name='postPassword'
            value={values.postPassword}
            onChange={onChange}
          />
        </S.InputBox>
      </S.FormBox>
    </S.MemoryFormWrapper>
  );
};

export default MemoryForm;