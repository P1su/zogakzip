import * as S from './ToolBar.style';
import Tab from './Tab/Tab';
import SearchBar from './SearchBar/SearchBar';
import Dropdown from './Dropdown/Dropdown';

interface ToolBarProps {
  isOn: boolean;
  onToggle: () => void;
}

const ToolBar = ({ isOn, onToggle }: ToolBarProps) => {
  return(
    <S.ToolBarWrapper>
      <S.TagBox>
        <Tab
          isOn={isOn}
          onTab={onToggle}
          size='small'
        >
          공개
        </Tab>
        <Tab
          isOn={!isOn}
          onTab={onToggle}
          size='large'
        >
          비공개
        </Tab>
      </S.TagBox>
      <SearchBar />
      <Dropdown />
    </S.ToolBarWrapper>
  );
};

export default ToolBar;