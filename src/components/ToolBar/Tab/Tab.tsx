import * as S from './Tab.style';

interface TabProps {
  isOn: boolean;
  onTab: () => void;
  size: 'small' | 'large';
  children: React.ReactNode;
}

const Tab = ({ isOn, onTab, size, children }: TabProps) => {
  return(
    <S.ToggleButton
      $isOn={isOn}
      size={size}
      onClick={() => onTab()}
    >
      {children}
    </S.ToggleButton>
  );
};

export default Tab;