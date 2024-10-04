import * as S from './PrivateGroupItem.style';
import GroupType from '../../../types/GroupType';
import { useNavigate } from 'react-router-dom';
import { IcFlowerIcon } from '../../../assets/svg';

interface PrivateGroupItemProps {
  itemData: GroupType;
}

interface StatusType {
  name: string;
  count: number;
  isImage: boolean;
}

const PrivateGroupItem = ({ itemData }: PrivateGroupItemProps) => {
  
  const navigate = useNavigate();

  const statusItems: StatusType[] = [
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

  const today = new Date();
  const itemDate = new Date(itemData.createdAt);
  const diffDate = Math.floor((today.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24));

  const handleNavigate = () => {
    navigate(`/group/${itemData.id}`, {state: {groupId: itemData.id, groupItem: itemData}});
  };

  return(
    <S.PrivateGroupItemWrapper onClick={() => handleNavigate()}>
      <S.DateBox>
        <S.TextSpan>
          {`D+ ${diffDate}`}
        </S.TextSpan>
        <S.TextSpan>|</S.TextSpan>
        <S.TextSpan>비공개</S.TextSpan>
      </S.DateBox>

      <S.InfoBox>
        <S.TitleSpan>
          {itemData.name}
        </S.TitleSpan>
      </S.InfoBox>
      
      <S.StatusBox>
        {statusItems.map(item => (
          <S.StatusItem key={item.name}>
            <S.SubTitleSpan>{item.name}</S.SubTitleSpan>
            <S.StatusTextBox>
              {item.isImage && <IcFlowerIcon />}
              <S.TextSpan>{item.count}</S.TextSpan>
            </S.StatusTextBox>
          </S.StatusItem>
        ))}
      </S.StatusBox>  
    </S.PrivateGroupItemWrapper>
  );
};

export default PrivateGroupItem;