import * as S from './GroupList.style';
import nonGroup from '../../assets/img/nonGroup.png';
import BtnLarge from '../button/LargeButton/BtnLarge';
import PublicGroupItem from './PublicGroupItem/PublicGroupItem';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../apis/client';
import { useEffect, useState } from 'react';
import GroupType from './../../types/GroupType';

const GroupList = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    const response = await instance.get('/groups', {
      params:{
        pages: 1,
        pageSize: 10,
        sortBy: 'latest',
        keyword: '',
        isPublic: true
      },
    });

    console.log(response.data);
    setData(response.data.data);
    setCount(response.data.totalItemCount);
  };
  
  //const data = groupMockData;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/create-group');
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return(
    <S.GroupListWrapper>
      {
        count != 0 
          ?
            <S.GroupBox>
              {
                data.map((item: GroupType) => (
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
              <BtnLarge onClick={() => {handleNavigate()}}>그룹 만들기</BtnLarge>
            </S.NonGroupBox>
      }
    </S.GroupListWrapper>
  );
};

export default GroupList;