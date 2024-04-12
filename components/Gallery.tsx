import { UserType } from "../types.ts";
import UserCard from "./UserCard.tsx";
import { FunctionComponent } from "preact";

type GalleryProps = {
  users: UserType[];
};

const Gallery: FunctionComponent<GalleryProps> = ({ users }) => {
  return (
    <div class="galleryContainer">
      {users.map((user) => <UserCard key={user._id} user={user} />)}
    </div>
  );
};

export default Gallery;
