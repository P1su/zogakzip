import { useNavigate } from 'react-router-dom';
import { IcLogo } from '../../assets/svg';
import BtnSmall from '../button/SmallButton/BtnSmall';
import * as S from './PageHeader.style';

const PageHeader = () => {
  const currentPath = window.location.pathname;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('create-group');
  };

  const handleMain = () => {
    navigate('/');
  }
  
  return(
    <S.PageHeaderWrapper>
      <S.IconField onClick={() => handleMain()}>
        <IcLogo />
      </S.IconField>
      {currentPath === '/' 
        &&  
        <S.ButtonField>
          <BtnSmall onClick={() => handleNavigate()}>그룹 만들기</BtnSmall>
        </S.ButtonField>
      }
    </S.PageHeaderWrapper>
  );
};

export default PageHeader;