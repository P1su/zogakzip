import * as S from './TextArea.style';

interface TextAreaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  children: React.ReactNode;
}

const TextArea = ({ name, value, onChange, placeholder, children }: TextAreaProps) => {
  return(
    <S.TextAreaWrapper>
      <S.TitleText>{children}</S.TitleText>
      <S.GroupTextarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </S.TextAreaWrapper>
  );
};

export default TextArea;