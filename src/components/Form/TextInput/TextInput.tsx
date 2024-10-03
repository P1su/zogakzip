import * as S from './TextInput.style';

interface TextInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  children: React.ReactNode;
}

const TextInput = ({ name, value, onChange, placeholder, children }: TextInputProps) => {
  return(
    <S.TextInputWrapper>
      <S.TitleText>{children}</S.TitleText>
      <S.TextInput
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </S.TextInputWrapper>
  );
};

export default TextInput;