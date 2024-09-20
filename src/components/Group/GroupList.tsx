import { groupMockData } from '../../mock/groupMockData';
import * as S from './GroupList.style';
import nonGroup from '../../assets/img/nonGroup.png';
import BtnLarge from '../button/LargeButton/BtnLarge';
import PublicGroupItem from './PublicGroupItem/PublicGroupItem';

const GroupList = () => {
  //api연결
  const data = groupMockData;

  return(
    <S.GroupListWrapper>
      {
        data.totalItemCount == 0 
          ?
            <S.GroupBox>
              {
                data.data.map((item) => (
                  <PublicGroupItem
                    key={item.id}
                    itemData={item}
                  />
                ))
              }
            </S.GroupBox>
          :
            <S.NonGroupBox>
              <S.NonGroupImage src={nonGroup} />
              <BtnLarge onClick={() => {alert('dd')}}>그룹 만들기</BtnLarge>
            </S.NonGroupBox>
      }
    </S.GroupListWrapper>
  );
};

export default GroupList;