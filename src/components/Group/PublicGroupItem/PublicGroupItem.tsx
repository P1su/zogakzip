import * as S from './PublicGroupItem.style';
import GroupType from '../../../types/GroupType';

interface PublicGroupItemProps {
  itemData: GroupType;
}

interface StatusType {
  name: string;
  count: number;
  isImage: boolean;
}

const PublicGroupItem = ({ itemData }: PublicGroupItemProps) => {
  const statusItems: StatusType[] = [
    {
      name: '획득 배지',
      count: itemData.badgeCount,
      isImage: false,
    },
    {
      name: '추억',
      count: itemData.postCount,
      isImage: false,
    },
    {
      name: '그룹 공감',
      count: itemData.likeCount,
      isImage: true,
    },
  ];
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
        {statusItems.map(item => (
          <S.StatusItem key={item.name}>
            <S.SubTitleSpan>{item.name}</S.SubTitleSpan>
            {/*item.isImage && <IcFlowerIcon />*/}
            <S.TextSpan>{item.count}</S.TextSpan>
          </S.StatusItem>
        ))}
      </S.StatusBox>
    </S.PublicGroupItemWrapper>
  );
};

export default PublicGroupItem;