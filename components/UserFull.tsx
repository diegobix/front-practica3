import { FunctionComponent } from "preact";
import { UserType } from "../types.ts";
import CommentSection from "./CommentSection.tsx";

const UserFull: FunctionComponent<{ user: UserType }> = ({ user }) => {
  return (
    <>
      <div class="userFull">
        <img src={user.photo} alt={user.name} />
        <div class="info">
          <h1>{user.name}</h1>
          <h3>{user.sex} {user.age}</h3>
          <p>
            <strong>Hobbies:{" "}</strong>
            {user.hobbies.join(", ")}
          </p>
          <p>{user.description}</p>
        </div>
      </div>
      <CommentSection comments={user.comments} userId={user._id} />
    </>
  );
};

export default UserFull;
