import { useParams } from 'react-router-dom';
import * as S from './Memory.style';
import MemoryHeader from '../../components/Memory/MemoryHeader/MemoryHeader';
import mockImage from '../../../public/mockImage.png';
import BtnLarge from '../../components/button/LargeButton/BtnLarge';

const Memory = () => {
  const { groupId, postId } = useParams();
  console.log(groupId, postId);

  const mockData = {
    "id": 123,
    "groupId": 123,
    "nickname": "string",
    "title": "string",
    "content": "인천 앞바다에서 월척을 낚았습니다!\n가족들과 기억에 오래도록 남을 멋진 하루였어요 가족들과 기억에 오래도록 남을 멋진 하루였어요 가족들과 기억에 오래도록 남을 멋진 하루였어요",
    "imageUrl": "string",
    "tags": [ "string", "string" ],
    "location": "string",
    "moment": "2024-02-21",
    "isPublic": true,
    "likeCount": 0,
    "commentCount": 0,
    "createdAt": "2024-02-22T07:47:49.803Z"
  };

  const handleReply = () => {
    alert('미구현 기능입니다.');
  };

  return(
    <S.MemoryWrapper>
      <MemoryHeader />
      <S.HorizontalLine />
      <S.MemoryImage src={mockImage}/>
      <S.MemoryContent>{mockData.content}</S.MemoryContent>
      <BtnLarge onClick={handleReply}>댓글 등록하기</BtnLarge>
    </S.MemoryWrapper>
  ); 
};

export default Memory;