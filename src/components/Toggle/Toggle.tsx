import { IcActiveToggle, IcDefaultToggle } from '../../assets/svg';
import * as S from './Toggle.style';

interface ToggleProps {
  isActive: boolean;
  onToggle: () => void;
}

const Toggle = ({ isActive, onToggle }: ToggleProps) => {
  return(
    <S.ToggleWrapper onClick={() => onToggle()}>
      {
        isActive? (
          <IcActiveToggle />
        ) : (
          <IcDefaultToggle />
        )
      }
    </S.ToggleWrapper>
  );
};

export default Toggle;