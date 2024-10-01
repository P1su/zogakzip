import * as S from './GroupInfo.style';
import mockImage from '../../../public/mockImage.png';
import { instance } from '../../apis/client';
import { useLocation } from 'react-router-dom';

const GroupInfo = () => {
  //api 연결
  const location = useLocation();
  const groupId = location.state.groupId;
  const fetchGroupInfo = async () => {
    const response = await instance.get('/groups', {
      params: {
        groupId: groupId,
      },
    });
    console.log(response);
  };

  fetchGroupInfo();
  /*const mockData = {
    "id": 123,
    "name": "string",
    "imageUrl": "string",
    "isPublic": true,
    "likeCount": 0,
    "badges": ["badge1", "badge2"],
    "postCount": 0,
    "createdAt": "2024-02-22T07:47:49.803Z",
    "introduction": "string"
  };*/

  return(
    <S.GroupInfoWrapper>
      <S.GroupImg src={mockImage} />
      <S.InfoBox>
        <S.InfoHeader>
          <S.HeaderFlexBox>
            <S.HeaderText>날짜 | 공개</S.HeaderText>
          </S.HeaderFlexBox>
          <S.HeaderFlexBox>
            <S.HeaderText>그룹 수정하기</S.HeaderText>
            <S.HeaderText>그룹 삭제하기</S.HeaderText>
          </S.HeaderFlexBox>
        </S.InfoHeader>
        <S.TitleBox>
          <S.TitleText>제목</S.TitleText>
          <S.SubTitleText>부제목</S.SubTitleText>
          <S.SubTitleText>부제목</S.SubTitleText>
        </S.TitleBox>
        <S.IntroText>그리고 내용</S.IntroText>
      </S.InfoBox>
    </S.GroupInfoWrapper>
  );
};

export default GroupInfo;