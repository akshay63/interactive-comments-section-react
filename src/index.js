import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App />);

/**
 * PURPOSE OF APP: To make an interactive component that can edit, delete, add texts.
 * 
 *
 * WHAT IT CAN DO:
 *  - User can add a comment using a form which is going to be displayed at the top of the screen
 *  - A comment has three components:
 *     => reply button- user can reply to comments(generally add a comment),
 *     => edit button- user can edit a comment,
 *     => delete button- user can delete a comment
 *  - Data can be persisted using an external server/localstorage
 * 
 *
 * INITIAL SETUP:
 *  - Set up the react project for interactive-comment app using create-react-app.
 *  - List of all components that will make up our app:
 *     => CommentCreate- A Form that will create comments
 *     => CommentList- List of comments that will be shrink or expand as user add/reply/delete comments.
 *     => CommentShow- Above list will be rendered by the CommentShow Component
 *     => CommentReplyShow- Each individual comment reply can be shown/rendered using this component.
 *     => CommentReply- When user click on reply button a form component will be shown.
 *     => CommentEditShow- Each individual comment can be  shown/rendered using this component.
 *     => CommentEdit- When user click on edit button a form component will be shown.
 *
 * STATE DESIGN:
 *  - State-
 *     ○ How many pieces of state we need to make?
	   ○ What this piece of state is going to do?
	   ○ What event handlers do we need?
    - Event Handlers-
       ○ createComment
       ○ editComment
       ○ replyComment
       ○ deleteComment

 *
 */
