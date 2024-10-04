import * as S from './ImageInput.style';

interface ImageInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageInput = ({ name, value, onChange }: ImageInputProps) => {
  return(
    <S.ImageInputWrapper>
      <S.TitleText>이미지</S.TitleText>
      <S.FlexBox>
        <S.FileTextBox
          name={name}
          value={value}
          placeholder='사진을 첨부하세요'
          readOnly
        />
        <S.Label
          htmlFor='file'
        >
          파일 선택
        </S.Label>
        <S.FileInput 
          type='file' 
          name={name} 
          id='file'
          onChange={onChange}
        />
      </S.FlexBox>
    </S.ImageInputWrapper>
  );
};

export default ImageInput;