import { useState } from "react";
import SharedTextarea from "./SharedTextarea";
import Button from "./Button";

function CommentEdit({ comment, onSubmit }) {
  //   const updatedUsername = (
  //     <span className="modBlue font-bold">@ {comment.username}</span>
  //   );
  //   const textAreaFormEdit = document.querySelector(".comment-edit .textarea");
  //   console.log(textAreaFormEdit);
  //   if (!updatedUsername) {
  //     textAreaFormEdit.insertAdjacentHTML("afterend", updatedUsername);
  //   }

  const textAreaFormEdit = document.querySelector(".comment-edit .textarea");
  // console.log(textAreaFormEdit);

  const [text, setText] = useState(comment.text + " ");

  function handleChange(e) {
    return setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(text);
    onSubmit(comment.id, text);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="comment-edit bg-white rounded-lg w-full flex flex-col items-end"
    >
      <SharedTextarea
        text={text}
        handleChange={handleChange}
        placeholder={""}
      />

      <Button primary rounded>
        Update
      </Button>
    </form>
  );
}

export default CommentEdit;
