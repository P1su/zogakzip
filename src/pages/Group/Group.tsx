import { useParams } from 'react-router-dom';
import * as S from './Group.style';
import BtnSmall from '../../components/button/SmallButton/BtnSmall';
import ToolBar from '../../components/ToolBar/ToolBar';

const Group = () => {
  const { groupId } = useParams();
  console.log(groupId);

  const handleNavigate = () => {
    //추억 생성 페이지 이동
    alert('라우트 이동');
  };

  return(
    <S.GroupWrapper>
      <S.MemoryHeader>
        <S.MemoryListTitle>추억 목록</S.MemoryListTitle>
        <S.ButtonField>
          <BtnSmall onClick={handleNavigate}>추억올리기</BtnSmall>
        </S.ButtonField>
      </S.MemoryHeader>
      <ToolBar />
    </S.GroupWrapper>
  );
};

export default Group;