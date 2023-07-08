// import SharedTextarea from "./SharedTextarea";
import { useState, Fragment } from "react";
import CommentEdit from "./CommentEdit";
import ReplyCreate from "./ReplyCreate";
import CrudButtons from "../hooks/crud-buttons";
import editIcon from "../img/icon-edit.svg";
import deleteIcon from "../img/icon-delete.svg";
import replyIcon from "../img/icon-reply.svg";
import amyrobsonImg from "../img/avatars/image-amyrobson.png";
import maxblagunImg from "../img/avatars/image-maxblagun.png";
import ramsayImg from "../img/avatars/image-ramsesmiron.png";
import julioImg from "../img/avatars/image-juliusomo.png";
import myImg from "../img/mypic.jpg";

function ReplyEdit({ comment, onDelete, onEdit, onReply }) {
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

  function handleSubmitEdit(id, newText) {
    setShowEdit(false);
    onEdit(id, newText);
  }

  function handleSubmitReply(id, newText) {
    setShowReply(false);
    onReply(id, newText);
  }

  // function handleSubmit(id, newText) {
  //   setShowEdit(false);
  //   onEdit(id, newText);
  //   setShowReply(false);
  //   onReply(id, newText);
  // }

  //Setting text based on Edit or Reply functionalites
  let contentEdit = <div>{comment.text}</div>;
  if (showEdit) {
    contentEdit = <CommentEdit onSubmit={handleSubmitEdit} comment={comment} />;
  }

  let contentReply = "";
  if (showReply) {
    contentReply = (
      <ReplyCreate onSubmit={handleSubmitReply} comment={comment} />
    );
  }

  //Profile Image Set
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

  //CRUD Buttons
  function btnDisplay(id) {
    // console.log(comment.id, id, showEdit, showReply);

    if (id !== 1 && id !== 2) {
      return (
        <Fragment>
          <CrudButtons
            handler={handleEditClick}
            className={
              !showReply
                ? "edit opacity-100 cursor-pointer"
                : "edit opacity-30 pointer-events-none"
            }
            src={editIcon}
            textName={!showEdit ? "Edit" : "Cancel"}
          />
          <CrudButtons
            handler={handleDeleteClick}
            className={"delete"}
            src={deleteIcon}
            textName={"Delete"}
          />
          <CrudButtons
            handler={handleReplyClick}
            className={
              !showEdit
                ? "reply opacity-100 cursor-pointer"
                : "reply opacity-30  pointer-events-none"
            }
            src={replyIcon}
            textName={!showReply ? "Reply" : "Cancel"}
          />
        </Fragment>
      );
    }

    if (id === 1 || id === 2) {
      return (
        <CrudButtons
          handler={handleReplyClick}
          className={"reply"}
          src={replyIcon}
          textName={!showReply ? "Reply" : "Cancel"}
        />
      );
    }
  }

  //"you" text highlighter
  const youSpan = (
    <span className="you-span -ml-2 mr-4  bg-modBlue text-white ">you</span>
  );

  return (
    <div className="comment-wrapper">
      <div
        className="comment comment-show bg-white p-6 flex items-start rounded-lg w-full"
        tabIndex={comment.id}
        data-usercode={comment.userCode}
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
              <div className="user-name font-bold ml-4 mr-4">
                {comment.username}
              </div>
              {comment.userCode === "my-profile" ? youSpan : ""}
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

export default ReplyEdit;
