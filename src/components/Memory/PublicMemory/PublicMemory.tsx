import * as S from './PublicMemory.style';
import MemoryType from '../../../types/MemoryType';

interface PublicMemoryProps {
  itemData: MemoryType;
}


const PublicMemory = ({ itemData }: PublicMemoryProps) => {
  return(
    <S.PublicMemoryWrapper>
      <S.GroupImage />

      <S.NicknameBox>
        <S.NicknameText>{itemData.nickname}</S.NicknameText>
        <S.TextSpan>| 공개</S.TextSpan>
      </S.NicknameBox>
      <S.InfoBox>
        <S.TitleSpan>{itemData.title}</S.TitleSpan>
        <S.TagBox>
          {itemData.tags.map(tag =>(
            <S.TextSpan key={tag}>{`#${tag}`}</S.TextSpan>
          ))} 
        </S.TagBox>
      </S.InfoBox>
      <S.MeomryFooter>
        <S.FooterBox>
          <S.SubTitleSpan>{itemData.location}</S.SubTitleSpan>
          <S.SubTitleSpan>{itemData.moment}</S.SubTitleSpan>
        </S.FooterBox>
        <S.FooterBox>
          <S.TextSpan>{itemData.likeCount}</S.TextSpan>
          <S.TextSpan>{itemData.commentCount}</S.TextSpan>
        </S.FooterBox>
      </S.MeomryFooter>
    </S.PublicMemoryWrapper>
  );
};

export default PublicMemory;