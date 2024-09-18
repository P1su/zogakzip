import styled from 'styled-components';
import searchIcon from '../../../assets/searchIcon.svg';

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.G_04};
  ${({ theme }) => theme.fonts.font_08}; 
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 2rem center;
  width: 118.6rem;
  height: 4.5rem;
  border: none;
  border-radius: 6px;
  padding: 1rem 2rem 1rem 2rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.G_02};
    padding-left: 3rem;
  }
`;