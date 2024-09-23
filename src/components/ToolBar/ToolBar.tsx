import * as S from './ToolBar.style';
import { useState } from 'react';
import Tab from './Tab/Tab';
import SearchBar from './SearchBar/SearchBar';
import Dropdown from './Dropdown/Dropdown';

const ToolBar = () => {
  const [isOn, setIsOn] = useState<boolean>(true);
  const handelToggle = () => {
    setIsOn(!isOn);
  }
  
  return(
    <S.ToolBarWrapper>
      <S.TagBox>
        <Tab
          isOn={isOn}
          onTab={handelToggle}
          size='small'
        >
          공개
        </Tab>
        <Tab
          isOn={!isOn}
          onTab={handelToggle}
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