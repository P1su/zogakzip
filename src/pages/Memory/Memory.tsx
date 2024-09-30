import { useParams } from 'react-router-dom';
import * as S from './Memory.style';
import MemoryHeader from '../../components/Memory/MemoryHeader/MemoryHeader';

const Memory = () => {
  const { groupId, postId } = useParams();
  console.log(groupId, postId);

  const mockData = {
    "id": 123,
    "groupId": 123,
    "nickname": "string",
    "title": "string",
    "content": "string",
    "imageUrl": "string",
    "tags": [ "string", "string" ],
    "location": "string",
    "moment": "2024-02-21",
    "isPublic": true,
    "likeCount": 0,
    "commentCount": 0,
    "createdAt": "2024-02-22T07:47:49.803Z"
  };

  return(
    <S.MemoryWrapper>
      <MemoryHeader />
    </S.MemoryWrapper>
  ); 
};

export default Memory;