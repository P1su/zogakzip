import * as S from './Reply.style';

const Reply = () => {
  return(
    <S.ReplyWrapper>
      <S.CountSpan>댓글 0</S.CountSpan>
      <S.HorizontalLine />
      <S.NonReplySpan>등록된 댓글이 없습니다.</S.NonReplySpan>
      <S.SubtitleSpan>가장 먼저 댓글을 등록해보세요.</S.SubtitleSpan>
    </S.ReplyWrapper>
  );
};

export default Reply;