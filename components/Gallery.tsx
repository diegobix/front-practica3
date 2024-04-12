import { PerfilType } from "../types.ts";
import UserCard from "./UserCard.tsx";
import { FunctionComponent } from "preact";

type GalleryProps = {
  users: PerfilType[];
};

const Gallery: FunctionComponent<GalleryProps> = ({ users }) => {
  return (
    <div class="galleryContainer">
      {users.map((user) => <UserCard user={user} />)}
    </div>
  );
};

export default Gallery;
