import * as S from './NotFound.style';
import notFound from '../../assets/img/notFound.png';

const NotFound = () => {
  return(
    <S.NotFoundWrapper>
      <S.NotFoundImage src={notFound} />
    </S.NotFoundWrapper>
  );
};

export default NotFound;