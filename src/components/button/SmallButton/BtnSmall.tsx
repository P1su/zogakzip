import * as S from './BtnSmall.style';

interface BtnSmallProps {
  onClick: () => void;
  children: React.ReactNode;
}

const BtnSmall = ({ onClick, children }: BtnSmallProps) => {
  return(
    <S.SmallButton onClick={() => onClick()}>
      {children}
    </S.SmallButton>
  );
};

export default BtnSmall;