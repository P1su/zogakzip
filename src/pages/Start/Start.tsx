import BtnSmall from '../../components/button/SmallButton/BtnSmall';
import * as S from './Start.style';

const Start = () => {
  return(
    <S.StartWrapper>
      <S.ButtonField>
        <BtnSmall onClick={() => alert('')}>
          그룹 만들기
        </BtnSmall>
      </S.ButtonField>

      시작 페이지입니다
    </S.StartWrapper>
  );
}

export default Start;