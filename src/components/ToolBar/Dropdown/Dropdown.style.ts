import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  ${({ theme }) => theme.fonts.font_08};
  width: 100%;
`;
export const Select = styled.select`
  width: 16rem;
  height: 4.5rem;
  border: 1px solid;
  border-radius: 6px;
`;
export const Option = styled.option`
`;