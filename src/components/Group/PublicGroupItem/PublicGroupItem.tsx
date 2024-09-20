import * as S from './PublicGroupItem.style';
import GroupType from '../../../types/GroupType';

interface PublicGroupItemProps {
  itemData: GroupType;
}

const PublicGroupItem = ({ itemData }: PublicGroupItemProps) => {
  
  return(
    <S.PublicGroupItemWrapper>
      <S.GroupImage src={itemData.imageUrl}/>
      <S.DateBox>
        <S.TextSpan>
          {itemData.createdAt}
        </S.TextSpan>
        <S.TextSpan>|</S.TextSpan>
        <S.TextSpan>공개</S.TextSpan>
      </S.DateBox>
      <S.InfoBox>
        <S.TitleSpan>
          {itemData.name}
        </S.TitleSpan>
        <S.ContentSpan>
          {itemData.introduction}
        </S.ContentSpan>
      </S.InfoBox>
      <S.StatusBox>
        <S.StatusItem>
          <S.SubTitleSpan>획득 배지</S.SubTitleSpan>
          <S.TextSpan>{itemData.badgeCount}</S.TextSpan>
        </S.StatusItem>
        <S.StatusItem>
          <S.SubTitleSpan>추억</S.SubTitleSpan>
          <S.TextSpan>{itemData.postCount}</S.TextSpan>
        </S.StatusItem>
        <S.StatusItem>
          <S.SubTitleSpan>그룹 공감</S.SubTitleSpan>
          <S.TextSpan>{itemData.likeCount}</S.TextSpan>
        </S.StatusItem>
      </S.StatusBox>
    </S.PublicGroupItemWrapper>
  );
};

export default PublicGroupItem;