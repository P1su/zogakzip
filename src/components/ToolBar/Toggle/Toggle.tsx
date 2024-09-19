import * as S from './Toggle.style';

interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
  size: 'small' | 'large';
  children: React.ReactNode;
}

const Toggle = ({ isOn, onToggle, size, children }: ToggleProps) => {
  return(
    <S.ToggleButton
      $isOn={isOn}
      size={size}
      onClick={() => onToggle()}
    >
      {children}
    </S.ToggleButton>
  );
};

export default Toggle;