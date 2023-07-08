import { useState } from "react";
import SharedTextarea from "./SharedTextarea";
import Button from "./Button";
import ReplyShow from "./ReplyShow";

function ReplyCreate({ comment, onSubmit, closeFun }) {
  const [reply, setReply] = useState(false);

  const [text, setText] = useState(`@${comment.username} `);

  function handleChange(e) {
    return setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // setReply(true);
    // closeFun();
    setReply(true);
    console.log(text, reply);
    <ReplyShow text={text} id={comment.id} onSubmit={onSubmit} />;

    // onSubmit(comment.id, text);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="comment-reply bg-white p-6 flex items-start rounded-lg w-full"
    >
      <div className="profile-img rounded-full w-12 h-12 bg-comment-img bg-cover"></div>
      <SharedTextarea
        text={text}
        handleChange={handleChange}
        placeholder={""}
      />

      <Button primary rounded>
        Reply
      </Button>
    </form>
  );
}

export default ReplyCreate;
