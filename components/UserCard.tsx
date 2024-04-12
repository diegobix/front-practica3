import { FunctionComponent } from "preact";
import { PerfilType } from "../types.ts";

type UserProps = {
  user: PerfilType;
};

const UserCard: FunctionComponent<UserProps> = ({ user }) => {
  return (
    <div class="userCard">
      <img src={user.photo} alt={user.name} />
      <div class="userCardInfo">
        <h2>{user.name}</h2>
        <div class="moreInfo">
          <h3>{user.age}</h3>
          <h4>{user.sex}</h4>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
