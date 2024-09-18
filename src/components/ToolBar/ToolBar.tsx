import * as S from './ToolBar.style';
import { useState } from 'react';
import Toggle from './Toggle/Toggle';
import SearchBar from './SearchBar/SearchBar';

const ToolBar = () => {
  const [isOn, setIsOn] = useState<boolean>(true);
  const handelToggle = () => {
    setIsOn(!isOn);
  }
  
  return(
    <S.ToolBarWrapper>
      <Toggle
        isOn={isOn}
        onToggle={handelToggle}
        size='small'
      >
        공개
      </Toggle>
      <Toggle
        isOn={!isOn}
        onToggle={handelToggle}
        size='large'
      >
        비공개
      </Toggle>
      <SearchBar />
    </S.ToolBarWrapper>
  );
};

export default ToolBar;