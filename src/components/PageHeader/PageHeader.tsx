import { IcLogo } from '../../assets/svg';
import BtnSmall from '../button/SmallButton/BtnSmall';
import * as S from './PageHeader.style';

const PageHeader = () => {
  const currentPath = window.location.pathname;
  return(
    <S.PageHeaderWrapper>
      <S.IconField>
        <IcLogo />
      </S.IconField>
      {currentPath === '/' 
        &&  
        <S.ButtonField>
          <BtnSmall onClick={() => alert('')}>그룹 만들기</BtnSmall>
        </S.ButtonField>
      }
    </S.PageHeaderWrapper>
  );
};

export default PageHeader;