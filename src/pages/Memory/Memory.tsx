import { useParams } from 'react-router-dom';
import * as S from './Memory.style';
import MemoryHeader from '../../components/Memory/MemoryHeader/MemoryHeader';
import mockImage from '../../../public/mockImage.png';
import BtnLarge from '../../components/button/LargeButton/BtnLarge';
import Reply from '../../components/Reply/Reply';
import { instance } from '../../apis/client';
import { useEffect, useState } from 'react';
import MemoryType from '../../types/MemoryType';

const Memory = () => {
  const [data, setData] = useState<MemoryType | undefined>(undefined);
  const { groupId, postId } = useParams();
  console.log(groupId, postId);

  const fetchMemory = async () => {
    try{
      const response = await instance.get(`/posts/${postId}`);
      console.log(response);
      setData(response.data);
    }
    catch(error){
      console.log(error);
    }
  };

  const handleReply = () => {
    alert('미구현 기능입니다.');
  };

  useEffect(() => {
    fetchMemory();
  },[])

  return(
    <S.MemoryWrapper>
      {data?
        <>
          <MemoryHeader 
            memoryData={data}
          />
          <S.HorizontalLine />
          <S.MemoryImage src={mockImage}/>
          <S.MemoryContent>{data.content}</S.MemoryContent>
          <BtnLarge onClick={handleReply}>댓글 등록하기</BtnLarge>
          <Reply /> 
        </>
        : null 
      }
    </S.MemoryWrapper>
  ); 
};

export default Memory;