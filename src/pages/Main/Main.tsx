import BtnSmall from '../../components/button/SmallButton/BtnSmall';
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
    </S.MainWrapper>
  );
}

export default Main;