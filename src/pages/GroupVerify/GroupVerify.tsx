import TextInput from '../../components/Form/TextInput/TextInput';
import * as S from './GroupVerify.style';
import { ChangeEvent, useState } from 'react';
import { instance } from '../../apis/client';
import { useLocation } from 'react-router-dom';
import BtnLarge from '../../components/button/LargeButton/BtnLarge';

const GroupVerify = () => {
  const [password, setPassword] = useState('');
  const location = useLocation();
  const groupId = location.state.groupId;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const postPassword = async () => {
    try{
      const response = await instance.post(`/groups/${groupId}/verify-password`, password);
      console.log(response);
    }
    catch (error){
      console.log(error);
    }
    alert('미구현 기능입니다.');
  }

  return(
    <S.GroupVerifyWrapper>
      <S.TitleBox>
        <S.TitleText>비공개 그룹</S.TitleText>
        <S.SubtitleText>비공개 그룹에 접근하기 위해 권한 확인이 필요합니다.</S.SubtitleText>
      </S.TitleBox>
      <TextInput
        name='password'
        value={password}
        onChange={handleChange}
        placeholder='그룹 비밀번호를 입력해 주세요'
      >
        비밀번호 입력
      </TextInput>
      <BtnLarge onClick={postPassword}>제출하기</BtnLarge>
    </S.GroupVerifyWrapper>
  );
};

export default GroupVerify;