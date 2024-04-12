import { FunctionComponent } from "preact";
import { UserType } from "../types.ts";
import { useState } from "preact/hooks";

type Props = {
  hobbies: string[];
  users: UserType[];
};

type Category = "name" | "age" | "sex" | "hobbies";

const GalleryFilter: FunctionComponent<Props> = ({ hobbies, users }) => {
  const [category, setCategory] = useState<Category>("name");

  return <></>;
};

export default GalleryFilter;
