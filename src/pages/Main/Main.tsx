import ToolBar from '../../components/ToolBar/ToolBar';
import * as S from './Main.style';
import GroupList from '../../components/Group/GroupList';
import { useState } from 'react';

const Main = () => {
  const [isOn, setIsOn] = useState<boolean>(true);
  const handelToggle = () => {
    setIsOn(!isOn);
  };

  return(
    <S.MainWrapper>
      <ToolBar 
        isOn={isOn}
        onToggle={handelToggle}
      />
      <GroupList 
        isPublic={isOn}
      />
    </S.MainWrapper>
  );
}

export default Main;