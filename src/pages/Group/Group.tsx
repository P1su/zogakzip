import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Group.style';
import BtnSmall from '../../components/button/SmallButton/BtnSmall';
import ToolBar from '../../components/ToolBar/ToolBar';
import MemoryList from '../../components/Memory/MemoryList/MemoryList';
import GroupInfo from '../../components/GroupInfo/GroupInfo';

const Group = () => {
  //서치바 placeholder 바꾸기
  const navigate = useNavigate();
  const { groupId } = useParams();
  console.log(groupId);

  const handleNavigate = () => {
    navigate('/create-memory', {state: {groupId: groupId}});
  };

  return(
    <S.GroupWrapper>
      <GroupInfo />
        <S.MemoryHeader>
          <S.MemoryListTitle>추억 목록</S.MemoryListTitle>
          <S.ButtonField>
            <BtnSmall onClick={handleNavigate}>추억올리기</BtnSmall>
          </S.ButtonField>
        </S.MemoryHeader>
        <ToolBar />
        <MemoryList />
    </S.GroupWrapper>
  );
};

export default Group;