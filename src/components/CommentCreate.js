import { useState } from "react";
import moment from "moment/moment";
import SharedTextarea from "./SharedTextarea";
import Button from "./Button";
function CommentCreate({ onCreate }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const oldDate = new Date();
    const oldMoment = moment(oldDate).fromNow();
    console.log(oldMoment);
    onCreate(text, oldMoment);
    setText("");
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="comment comment-create flex w-full mt-5">
      <form
        className="bg-white p-6 flex items-start rounded-lg w-full"
        onSubmit={handleSubmit}
      >
        <div className="profile-img rounded-full w-12 h-12 bg-comment-img bg-cover"></div>

        <SharedTextarea
          text={text}
          handleChange={handleChange}
          placeholder={"Add a comment..."}
        />

        <Button primary rounded>
          Send
        </Button>
      </form>
    </div>
  );
}

export default CommentCreate;
