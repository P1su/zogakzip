import BtnLarge from '../../button/LargeButton/BtnLarge';
import PublicMemory from '../PublicMemory/PublicMemory';
import nonMemory from '../../../assets/img/nonMemory.png';
import * as S from './MemoryList.style';
import { instance } from '../../../apis/client';
import { useEffect, useState } from 'react';
import MemoryType from '../../../types/MemoryType';
import { useNavigate } from 'react-router-dom';

interface MemoryListProps {
  groupId: number;
}

const MemoryList = ({ groupId }: MemoryListProps) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/create-memory');
  };

  useEffect(() => {
    const fetchMemory = async () => {
      try{
        const response = await instance.get(`/groups/posts/${groupId}`);
        setData(response.data.data);
        setCount(response.data.totalItemCount);
      }
      catch(error){
        console.log(error);
      }
    };

    fetchMemory();
  }, [groupId]);

  return(
    <S.MemoryListWrapper>
      {
        count != 0 
          ?
            <S.MemoryBox>
              {
                data.map((item: MemoryType) => (
                  <PublicMemory
                    key={item.id}
                    groupId={groupId}
                    itemData={item}
                  />
                ))
              }
            </S.MemoryBox>
          :
            <S.NonMemoryBox>
              <S.NonMemoryImage src={nonMemory} />
              <BtnLarge onClick={() => {handleNavigate()}}>추억 올리기</BtnLarge>
            </S.NonMemoryBox>
      }
    </S.MemoryListWrapper>
  );
};

export default MemoryList;