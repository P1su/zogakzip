import { memoryMockData } from '../../../mock/meomoryMockData';
import BtnLarge from '../../button/LargeButton/BtnLarge';
import PublicMemory from '../PublicMemory/PublicMemory';
import nonMemory from '../../../assets/img/nonMemory.png';
import * as S from './MemoryList.style';

const MemoryList = () => {
  const data = memoryMockData;
  
  const handleNavigate = () => {
    alert('추억 만들기 페이지 이동');
  };

  return(
    <S.MemoryListWrapper>
      {
        data.totalItemCount != 0 
          ?
            <S.MemoryBox>
              {
                data.data.map((item) => (
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