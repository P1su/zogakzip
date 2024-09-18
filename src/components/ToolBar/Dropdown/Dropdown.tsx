import * as S from './Dropdown.style';

const Dropdown = () => {
  return(
    <S.DropdownWrapper>
      <S.Select>
        <S.Option value='공감순'>공감순</S.Option>
        <S.Option value='최신순'>최신순</S.Option>
        <S.Option value='댓글순'>댓글순</S.Option>
      </S.Select>
    </S.DropdownWrapper>
  );
};

export default Dropdown;