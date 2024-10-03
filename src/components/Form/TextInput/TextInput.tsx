import * as S from './TextInput.style';

interface TextInputProps {
  name: string;
  value: string | string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  children: React.ReactNode;
}

const TextInput = ({ name, value, onChange, onKeyDown, placeholder, children }: TextInputProps) => {
  return(
    <S.TextInputWrapper>
      <S.TitleText>{children}</S.TitleText>
      <S.TextInput
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
    </S.TextInputWrapper>
  );
};

export default TextInput;