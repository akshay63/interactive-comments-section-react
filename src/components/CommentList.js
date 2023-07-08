import CommentShow from "./CommentShow";

function CommentList({ comments, onDelete, onEdit, onReply }) {
  console.log(comments);
  const renderedComments = comments.map((comment) => {
    return (
      <CommentShow
        onEdit={onEdit}
        onDelete={onDelete}
        onReply={onReply}
        key={comment.id}
        comment={comment}
      />
    );
  });
  return <div className="w-full comment-list">{renderedComments}</div>;
}

export default CommentList;
