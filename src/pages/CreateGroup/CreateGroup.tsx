import { useNavigate } from 'react-router-dom';
import { instance } from '../../apis/client';
import BtnLarge from '../../components/button/LargeButton/BtnLarge';
import * as S from './CreateGroup.style';
import { ChangeEvent, useState } from 'react';
import TextInput from '../../components/Form/TextInput/TextInput';
import TextArea from '../../components/Form/TextArea/TextArea';
import ImageInput from '../../components/Form/ImageInput/ImageInput';
import PublicToggle from '../../components/Form/PublicToggle/PublicToggle';

interface GroupCreateType {
  name: string;
  imageUrl: string;
  introduction: string;
  isPublic: boolean;
  password: string;
}

const CreateGroup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<GroupCreateType>({
    name: '',
    imageUrl: '',
    introduction: '',
    isPublic: true,
    password: '',
  });
  const [file, setFile] = useState<File | null>(null);  
  const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => { 
      setValues({
      ...values,
        [e.target.name]: reader.result
      });
    };
    setFile(file);
  };

  const postData = async () =>{
    const formData = new FormData();
    if(file){
      formData.append('imageUrl', file);
    }
    formData.append('name', values.name);
    formData.append('introduction', values.introduction);
    formData.append('isPublic', String(values.isPublic));
    formData.append('password', values.password);
    try{
      const response  = await instance.post('/groups',formData);
      console.log(response);
    }
    catch(error){
      console.log(error);
    }
  };

  const handleForm = () => {
    //api 연결
    postData();
    navigate('/');
  };

  const onToggle = () => {
    setValues((prevValues) => ({
      ...prevValues,
      isPublic: !prevValues.isPublic,
    }));
  };

  return(
    <S.CreateGroupWrapper>
      <S.PageTitleText>그룹 만들기</S.PageTitleText>
      <S.GroupForm>
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
          placeholder='비밀번호를 입력해 주세요'
        >
          비밀번호 설정
        </TextInput>

        <BtnLarge onClick={() => handleForm()}>만들기</BtnLarge>
      </S.GroupForm>
    </S.CreateGroupWrapper>
  );
};

export default CreateGroup;