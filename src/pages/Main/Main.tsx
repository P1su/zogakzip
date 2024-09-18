import BtnSmall from '../../components/button/SmallButton/BtnSmall';
import * as S from './Main.style';

const Main = () => {
  return(
    <S.MainWrapper>
      <S.ButtonField>
        <BtnSmall onClick={() => alert('')}>
          그룹 만들기
        </BtnSmall>
      </S.ButtonField>

      시작 페이지입니다
    </S.MainWrapper>
  );
}

export default Main;