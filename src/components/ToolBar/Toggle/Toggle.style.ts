import styled from 'styled-components';

export const ToggleButton = styled.button<{ $isOn: boolean; size: 'small' | 'large' }>`
  ${({ theme }) => theme.fonts.font_07};
  height: 4.5rem;
  border-radius: 22.5px;
  background: ${({$isOn}) => $isOn 
    ? 
      ({ theme }) => theme.colors.black
    :
      ({ theme }) => theme.colors.white
  };
  color: ${({$isOn}) => $isOn 
    ? 
      ({ theme }) => theme.colors.white
    :
      ({ theme }) => theme.colors.black
  };
  width: ${({size}) => size === 'small' 
    ? 
      '6.6rem'
    :
      '7.8rem'
  };
`;