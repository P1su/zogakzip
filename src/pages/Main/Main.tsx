import BtnSmall from '../../components/button/SmallButton/BtnSmall';
import PublicGroupItem from '../../components/Group/PublicGroup/PublicGroupItem/PublicGroupItem';
import ToolBar from '../../components/ToolBar/ToolBar';
import * as S from './Main.style';

const Main = () => {
  return(
    <S.MainWrapper>
      <S.ButtonField>
        <BtnSmall onClick={() => alert('')}>
          그룹 만들기
        </BtnSmall>
      </S.ButtonField>
      <ToolBar />
      <PublicGroupItem/>
    </S.MainWrapper>
  );
}

export default Main;