import BtnLarge from '../../components/button/LargeButton/BtnLarge';
import * as S from './CreateGroup.style';
import { useState } from 'react';

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

  const handleForm = () => {
    //api 연결
    alert('api 연결합니다');
  };

  return(
    <S.CreateGroupWrapper>
      <S.PageTitleText>그룹 만들기</S.PageTitleText>
      <S.GroupForm>
        <S.InputBox>
          <S.InputTitleText>그룹명</S.InputTitleText>
          <S.GroupTextInput 
            type='text'
            value={values.name}
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitleText>대표 이미지</S.InputTitleText>
          <S.GroupTextInput 
            type='file'
            value={values.name}
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitleText>그룹 소개</S.InputTitleText>
          <S.GroupTextInput 
              type='text'
              value={values.name}
            />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitleText>그룹 공개 선택</S.InputTitleText>
          <S.GroupTextInput 
              type='text'
              value={values.name}
            />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitleText>비밀번호 설정</S.InputTitleText>
          <S.GroupTextInput 
              type='text'
              value={values.name}
            />
        </S.InputBox>
        <BtnLarge onClick={() => handleForm()}>만들기</BtnLarge>
      </S.GroupForm>
    </S.CreateGroupWrapper>
  );
};

export default CreateGroup;