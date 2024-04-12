import { FunctionComponent } from "preact";
import { PerfilType } from "../types.ts";
import { useState } from "preact/hooks";

type Props = {
  hobbies: string[];
  users: PerfilType[];
};

type Category = "name" | "age" | "sex" | "hobbies";

const GalleryFilter: FunctionComponent<Props> = ({ hobbies, users }) => {
  const [category, setCategory] = useState<Category>("name");

  return <></>;
};

export default GalleryFilter;
