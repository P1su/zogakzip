import { groupMockData } from '../../mock/groupMockData';
import * as S from './GroupList.style';
import PublicGroupList from './PublicGroup/PublicGroupList/PublicGroupList';
import nonGroup from '../../assets/img/nonGroup.png';
import BtnLarge from '../button/LargeButton/BtnLarge';

const GroupList = () => {
  const data = groupMockData;

  return(
    <S.GroupListWrapper>
      {
        data.totalItemCount == 0 
          ?
            <PublicGroupList />
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