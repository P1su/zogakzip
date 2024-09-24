import { useParams } from 'react-router-dom';
import * as S from './Group.style';

const Group = () => {
  const { groupId } = useParams();
  console.log(groupId);
  return(
    <S.GroupWrapper>
      그룹 페이지입니다. 
    </S.GroupWrapper>
  );
};

export default Group;