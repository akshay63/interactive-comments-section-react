import { useState } from "react";
import SharedTextarea from "./SharedTextarea";
import Button from "./Button";

function CommentReply({ comment, onSubmit }) {
  //   const updatedUsername = (
  //     <span className="modBlue font-bold">@ {comment.username}</span>
  //   );
  //   const textAreaFormEdit = document.querySelector(".comment-edit .textarea");
  //   console.log(textAreaFormEdit);
  //   if (!updatedUsername) {
  //     textAreaFormEdit.insertAdjacentHTML("afterend", updatedUsername);
  //   }

  const textAreaFormReply = document.querySelector(".comment-reply .textarea");

  const [text, setText] = useState(`@${comment.username}`);

  function handleChange(e) {
    return setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(comment.id, text);
    console.log(text);
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

export default CommentReply;
