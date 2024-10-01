import ToolBar from '../../components/ToolBar/ToolBar';
import * as S from './Main.style';
import GroupList from '../../components/Group/GroupList';

const Main = () => {
  return(
    <S.MainWrapper>
      <ToolBar />
      <GroupList />
    </S.MainWrapper>
  );
}

export default Main;