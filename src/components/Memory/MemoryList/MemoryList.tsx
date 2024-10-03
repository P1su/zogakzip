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
  
  const fetchMemory = async () => {
    try{
      const response = await instance.get(`/groups/posts/${groupId}`, {
        params: {
          pages: 1,
          pageSize: 10,
          sortBy: 'latest',
          keyword: '',
          isPublic: true,
          groupId: groupId,
          }
        }
      );
      setData(response.data.data);
      setCount(response.data.totalItemCount);
      console.log(response);
    }
    catch(error){
      console.log(error);
    }
  }

  const handleNavigate = () => {
    navigate('/create-memory');
  };

  useEffect(() => {
    fetchMemory();
  }, []);

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
                    itemData={item}
                  />
                ))
              }
            </S.MemoryBox>
          :
            <S.NonMemoryBox>
              <S.NonMemoryImage src={nonMemory} />
              <BtnLarge onClick={() => {handleNavigate()}}>그룹 만들기</BtnLarge>
            </S.NonMemoryBox>
      }
    </S.MemoryListWrapper>
  );
};

export default MemoryList;