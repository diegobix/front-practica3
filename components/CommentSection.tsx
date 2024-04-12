import { FunctionComponent } from "preact";
import { CommentType } from "../types.ts";
import Comment from "./Comment.tsx";

type Props = {
  comments: CommentType[];
  userId: string;
};

const CommentSection: FunctionComponent<Props> = ({ comments, userId }) => {
  return (
    <div class="commentSection">
      {comments.map((comment, i) => (
        <Comment key={userId + i} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
