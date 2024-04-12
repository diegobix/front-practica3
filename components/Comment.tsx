import { FunctionComponent } from "preact";
import { CommentType } from "../types.ts";

const Comment: FunctionComponent<{ comment: CommentType }> = ({ comment }) => {
  const { user, message } = comment;
  return (
    <div class="comment">
      <h4>{user}</h4>
      <p>{message}</p>
    </div>
  );
};

export default Comment;
