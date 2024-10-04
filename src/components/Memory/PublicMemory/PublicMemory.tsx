import * as S from './PublicMemory.style';
import MemoryType from '../../../types/MemoryType';
import { useNavigate } from 'react-router-dom';
import { IcComment, IcFlowerIcon } from '../../../assets/svg';

interface PublicMemoryProps {
  groupId: number;
  itemData: MemoryType;
}

const PublicMemory = ({ groupId, itemData }: PublicMemoryProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/group/${groupId}/memory/${itemData.id}`);
  };
  
  return(
    <S.PublicMemoryWrapper onClick={() => handleNavigate()}>
      <S.GroupImage src={itemData.imageUrl}/>

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
          <S.SubTitleSpan>·</S.SubTitleSpan>
          <S.SubTitleSpan>{itemData.moment}</S.SubTitleSpan>
        </S.FooterBox>
        <S.FooterBox>
          <S.FooterFlexBox>
            <IcFlowerIcon />
            <S.TextSpan>{itemData.likeCount}</S.TextSpan>
          </S.FooterFlexBox>
          <IcComment />
          <S.TextSpan>{itemData.commentCount}</S.TextSpan>
        </S.FooterBox>
      </S.MeomryFooter>
    </S.PublicMemoryWrapper>
  );
};

export default PublicMemory;