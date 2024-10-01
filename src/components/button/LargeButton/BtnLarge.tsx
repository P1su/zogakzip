import * as S from './BtnLarge.style';

interface BtnLargeProps {
  onClick: () => void;
  children: React.ReactNode;
}

const BtnLarge = ({ onClick, children }: BtnLargeProps) => {
  return(
    <S.LargeButton onClick={() => onClick()}>
      {children}
    </S.LargeButton>
  );
};

export default BtnLarge;