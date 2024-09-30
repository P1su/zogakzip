import * as S from './MemoryHeader.style';

const MemoryHeader = () => {
  return(
    <S.MemoryHeaderWrapper>
      <S.InfoHeader>
        <S.HeaderFlexBox>
          <S.NicknameSpan>달봉이 아들</S.NicknameSpan>
          <S.PublicSpan>공개</S.PublicSpan>
        </S.HeaderFlexBox>
        <S.HeaderFlexBox>
          <S.MemoryEditSpan>
            추억 수정하기
          </S.MemoryEditSpan>
          <S.MemoryEditSpan>
            추억 삭제하기
          </S.MemoryEditSpan>
        </S.HeaderFlexBox>
      </S.InfoHeader>

      <S.InfoBox>
        <S.InfoTitle>인천 앞바다에서 무려 60cm 월척을 낚다!</S.InfoTitle>
        <S.TagBox>#인천 #인천</S.TagBox>
      </S.InfoBox>

      <S.InfoFooter>
        <S.FooterFlexBox>
          <S.MomentSpan>
            인천 앞바다 · 24.01.19
          </S.MomentSpan>
        </S.FooterFlexBox>
        <S.FooterFlexBox>
          <S.CountSpan>120</S.CountSpan>
          <S.CountSpan>90</S.CountSpan>
        </S.FooterFlexBox>
      </S.InfoFooter>
    </S.MemoryHeaderWrapper>
  );
};

export default MemoryHeader;