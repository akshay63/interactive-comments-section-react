// import SharedTextarea from "./SharedTextarea";
import { useState } from "react";
import CommentEdit from "./CommentEdit";
import CommentReply from "./CommentReply";
import CrudButtons from "../hooks/crud-buttons";
import editIcon from "../img/icon-edit.svg";
import deleteIcon from "../img/icon-delete.svg";
import replyIcon from "../img/icon-reply.svg";
import amyrobsonImg from "../img/avatars/image-amyrobson.png";
import maxblagunImg from "../img/avatars/image-maxblagun.png";
import ramsayImg from "../img/avatars/image-ramsesmiron.png";
import julioImg from "../img/avatars/image-juliusomo.png";
import myImg from "../img/mypic.jpg";

function CommentShow({ comment, onDelete, onEdit, onReply }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showReply, setShowReply] = useState(false);

  function handleDeleteClick() {
    onDelete(comment.id);
  }

  function handleEditClick() {
    setShowEdit(!showEdit);
  }

  function handleReplyClick() {
    setShowReply(!showReply);
  }

  function handleSubmit(id, newText) {
    setShowEdit(false);
    setShowReply(false);
    onEdit(id, newText);
    onReply(id, newText);
  }

  let contentEdit = <div>{comment.text}</div>;
  if (showEdit) {
    contentEdit = <CommentEdit onSubmit={handleSubmit} comment={comment} />;
  }

  let contentReply = "";
  if (showReply) {
    contentReply = <CommentReply comment={comment} />;
  }

  function imageSet(id) {
    switch (id) {
      case 1:
        return amyrobsonImg;

      case 2:
        return maxblagunImg;

      case 3:
        return ramsayImg;

      case 4:
        return julioImg;

      default:
        break;
    }

    if (comment.userCode === "my-profile") {
      return myImg;
    }
  }

  // const others = document.querySelectorAll(".comment-show");
  // others.forEach((other, i) => {
  //   const index = other.getAttribute("tabIndex");
  //   const editBtn = other.querySelector(".edit");
  //   const deleteBtn = other.querySelector(".delete");
  //   const replyBtn = other.querySelector(".reply");
  //   console.log(editBtn, typeof index);
  //   if (+index === key || +index !== 10) {
  //     editBtn.style.display = "none";
  //     deleteBtn.style.display = "none";
  //   }

  //   if (+index === 10) {
  //     editBtn.style.display = "flex";
  //     deleteBtn.style.display = "flex";
  //     replyBtn.style.display = "none";
  //   }
  // });

  function btnDisplay(id) {
    console.log(comment.id, id);
    if (id !== 1 && id !== 2) {
      return (
        <>
          <CrudButtons
            handler={handleEditClick}
            className={"edit"}
            src={editIcon}
            textName={"Edit"}
          />
          <CrudButtons
            handler={handleDeleteClick}
            className={"delete"}
            src={deleteIcon}
            textName={"Delete"}
          />
        </>
      );
    }

    if (id === 1 || id === 2) {
      return (
        <CrudButtons
          handler={handleReplyClick}
          className={"reply"}
          src={replyIcon}
          textName={"Reply"}
        />
      );
    }
  }

  return (
    <div className="comment-wrapper">
      <div
        className="comment comment-show bg-white p-6 flex items-start rounded-lg w-full"
        tabIndex={comment.id}
      >
        <div className="w-full">
          <div className="user-details flex justify-between mb-5">
            <div className="flex items-center">
              <div
                className="user-img rounded-full w-8 h-8  bg-cover"
                style={{
                  backgroundImage: `url('${imageSet(comment.id)}')`,
                }}
              ></div>
              <div className="user-name font-bold ml-4 mr-5">
                {comment.username}
              </div>
              <div className="create-date">{comment.createdAt}</div>
            </div>
            <div className="actions flex font-medium">
              {comment.id !== 1 || comment.id !== 2
                ? btnDisplay(comment.id)
                : ""}
            </div>
          </div>
          {contentEdit}
        </div>
      </div>
      {contentReply}
    </div>
  );
}

export default CommentShow;
