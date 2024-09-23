import BtnLarge from '../../components/button/LargeButton/BtnLarge';
import Toggle from '../../components/Toggle/Toggle';
import * as S from './CreateGroup.style';
import { ChangeEvent, useState } from 'react';

interface GroupCreateType {
  name: string;
  imageUrl: string;
  introduction: string;
  isPublic: boolean;
  password: string;
}

const CreateGroup = () => {

  const [values, setValues] = useState<GroupCreateType>({
    name: '',
    imageUrl: '',
    introduction: '',
    isPublic: true,
    password: '',
  });
  
  const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const handleForm = () => {
    //api 연결
    alert('api 연결합니다');
  };
  const onToggle = () => {
    setValues((prevValues) => ({
      ...prevValues,
      isPublic: !prevValues.isPublic,
    }));
  };

  console.log(values)
  return(
    <S.CreateGroupWrapper>
      <S.PageTitleText>그룹 만들기</S.PageTitleText>
      <S.GroupForm>
        <S.InputBox>
          <S.InputTitleText>그룹명</S.InputTitleText>
          <S.GroupTextInput 
            type='text'
            name='name'
            value={values.name}
            onChange={onChange}
            placeholder='그룹명을 입력해 주세요'
            height='4rem'
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitleText>대표 이미지</S.InputTitleText>
          <S.FlexBox>
            <S.FileTextBox
              name='imageUrl'
              value={values.imageUrl}
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
          <S.InputTitleText>그룹 소개</S.InputTitleText>
          <S.TextArea
              name='introduction'
              value={values.introduction}
              onChange={onChange}
              placeholder='그룹을 소개해주세요'
            />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitleText>그룹 공개 선택</S.InputTitleText>
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
          <S.InputTitleText>비밀번호 설정</S.InputTitleText>
          <S.GroupTextInput 
              type='text'
              name='password'
              value={values.password}
              onChange={onChange}
            />
        </S.InputBox>

        <BtnLarge onClick={() => handleForm()}>만들기</BtnLarge>
      </S.GroupForm>
    </S.CreateGroupWrapper>
  );
};

export default CreateGroup;