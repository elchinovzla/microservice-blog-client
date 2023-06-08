const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    const content = getCommentContent(comment);
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

const getCommentContent = (comment) => {
  let content;
  switch (comment.status) {
    case "APPROVED":
      content = comment.content;
      break;
    case "REJECTED":
      content = "This comment has been rejected";
      break;
    case "PENDING":
      content = "This comment is awaiting modereation";
      break;
    default:
      content = "";
  }
  return content;
};

export default CommentList;
