import * as S from './PublicGroupItem.style';

const PublicGroupItem = () => {
  return(
    <S.PublicGroupItemWrapper>
      <S.GroupImage />
      <S.DateBox>
        <S.TextSpan>
            D+265
        </S.TextSpan>
        <S.TextSpan>|</S.TextSpan>
        <S.TextSpan>공개</S.TextSpan>
      </S.DateBox>
      <S.InfoBox>
        <S.TitleSpan>
          달봉이네 가족
        </S.TitleSpan>
        <S.ContentSpan>
          서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.
        </S.ContentSpan>
      </S.InfoBox>
      <S.StatusBox>
        <S.StatusItem>
          <S.SubTitleSpan>획득 배지</S.SubTitleSpan>
          <S.TextSpan>2</S.TextSpan>
        </S.StatusItem>
      </S.StatusBox>
    </S.PublicGroupItemWrapper>
  );
};

export default PublicGroupItem;