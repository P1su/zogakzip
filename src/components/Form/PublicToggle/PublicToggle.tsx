import React from 'react';
import * as S from './PublicToggle.style';
import Toggle from '../../Toggle/Toggle';

interface PublicToggleProps{
  value: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const PublicToggle = ({ value, onToggle, children}: PublicToggleProps) => {
  return(
    <S.PublicToggleWrapper>
      <S.TitleText>{children}</S.TitleText>
      <S.FlexBox>
        {
          value ?
            <S.ContentTextSpan>공개</S.ContentTextSpan>
          :
            <S.ContentTextSpan>비공개</S.ContentTextSpan>
        }
        <Toggle
          isActive={value}
          onToggle={onToggle}
        />
      </S.FlexBox>
    </S.PublicToggleWrapper>
  );
};

export default PublicToggle;