import { FunctionComponent } from "preact";
import { UserType } from "../types.ts";

type UserProps = {
  user: UserType;
};

const UserCard: FunctionComponent<UserProps> = ({ user }) => {
  return (
    <div class="userCard">
      <a href={`/${user.name}`}>
        <img src={user.photo} alt={user.name} />
        <div class="userCardInfo">
          <h2>{user.name}</h2>
          <div class="moreInfo">
            <h3>{user.age}</h3>
            <h4>{user.sex}</h4>
          </div>
        </div>
      </a>
    </div>
  );
};

export default UserCard;
