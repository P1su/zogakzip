import { IcDelete } from '../../assets/svg';
import MemoryForm from '../../components/MemoryForm/MemoryForm';
import * as S from './CreateMemory.style';
import { useLocation, useNavigate } from 'react-router-dom';

const CreateMemory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const groupId = location.state.id;
  console.log(groupId);

  const handleNavigate = () => {
    navigate(`/group/${groupId}`, {state: {groupId: groupId}});
  };
  
  return(
    <S.CreateMemoryWrapper>
      <S.IconField onClick={() => handleNavigate()}>
        <IcDelete />
      </S.IconField>
      <S.TitleText>추억 올리기</S.TitleText>
      <MemoryForm groupId={groupId} />
    </S.CreateMemoryWrapper>
  );
};

export default CreateMemory;