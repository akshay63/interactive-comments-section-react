import { useState } from "react";
import CommentCreate from "./components/CommentCreate";
import CommentList from "./components/CommentList";

import moment from "moment/moment";
import CommentEdit from "./components/CommentEdit";

function App() {
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      username: "amyrobson",
      createdAt: "1 month ago",
      image: "/src/img/avatars/image-amyrobson.png",
      userCode: "others",
    },
    {
      id: 2,
      text: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      username: "maxblagun",
      createdAt: "2 weeks ago",
      image: "/src/img/avatars/image-maxblagun.webp",
      userCode: "others",
    },
  ]);

  console.log(moment().format());

  let [date, setDate] = useState("");

  function createComment(text, oldMoment) {
    setDate(oldMoment);
    const updatedComments = [
      ...comments,
      {
        id: Math.round(Math.random() * 9999),
        text,
        username: "akshaymeshram",
        createdAt: date,
        image: "./img/mypic.jpg",
        userCode: "my-profile",
      },
    ];
    setComments(updatedComments);
  }

  function deleteCommentById(id) {
    console.log(id, id === 1);
    const updatedComments = comments.filter((comment) => {
      return comment.id !== id || comment.id === 1 || comment.id === 2;
    });

    setComments(updatedComments);
  }

  function editCommentById(id, newText) {
    const updatedText = comments.map((comment) => {
      if (id === comment.id) {
        return { ...comment, text: newText };
      }

      return comment;
    });

    setComments(updatedText);
  }

  function replyCommentById(id, newText) {
    const updatedText = comments.map((comment) => {
      if (id === comment.id) {
        return { ...comment, text: newText };
      }

      return comment;
    });

    setComments(updatedText);
  }

  return (
    <div className="main-app font-display flex flex-col items-center">
      <CommentList
        comments={comments}
        onDelete={deleteCommentById}
        onEdit={editCommentById}
        onReply={replyCommentById}
      />
      <CommentCreate onCreate={createComment} />
    </div>
  );
}

export default App;
