import MemoryForm from '../../components/MemoryForm/MemoryForm';
import * as S from './CreateMemory.style';
import { useLocation } from 'react-router-dom';

const CreateMemory = () => {
  const location = useLocation();
  const groupId = location.state.groupId;
  console.log(groupId);

  return(
    <S.CreateMemoryWrapper>
      <S.TitleText>추억 올리기</S.TitleText>
      <MemoryForm groupId={groupId} />
    </S.CreateMemoryWrapper>
  );
};

export default CreateMemory;