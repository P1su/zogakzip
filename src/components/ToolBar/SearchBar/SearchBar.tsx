import * as S from './SearchBar.style';

const SearchBar = () => {
  return(
    <S.Input 
      type='input'
      placeholder='그룹명을 검색해주세요.'
    >
    </S.Input>
  );
};

export default SearchBar;