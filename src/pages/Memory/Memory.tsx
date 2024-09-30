import { useParams } from 'react-router-dom';
import * as S from './Memory.style';

const Memory = () => {
  const { groupId, postId } = useParams();
  console.log(groupId, postId);
  
  return(
    <S.MemoryWrapper>
      메모리 페이지입니다.
    </S.MemoryWrapper>
  ); 
};

export default Memory;