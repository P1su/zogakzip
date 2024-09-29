import MemoryForm from '../../components/MemoryForm/MemoryForm';
import * as S from './CreateMemory.style';
import BtnLarge from '../../components/button/LargeButton/BtnLarge';

const CreateMemory = () => {
  const handleClick = () => {
    alert('저장 성공');
  };

  return(
    <S.CreateMemoryWrapper>
      <S.TitleText>추억 올리기</S.TitleText>
      <MemoryForm />
      <BtnLarge onClick={handleClick}>추억 생성하기</BtnLarge>
    </S.CreateMemoryWrapper>
  );
};

export default CreateMemory;