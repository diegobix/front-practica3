import { FunctionComponent } from "preact";
import { UserType } from "../types.ts";
import Gallery from "../components/Gallery.tsx";
import { JSX } from "preact";
import { useState } from "preact/hooks";

type Props = {
  users: UserType[];
};

type Category = "name" | "age" | "sex" | "hobbies";

const GalleryFilter: FunctionComponent<Props> = ({ users }) => {
  const [category, setCategory] = useState<Category>("name");
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>(users);
  const [filter, setFilter] = useState<string>("");

  const handleFilter = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setFilter(e.currentTarget.value);

    if (filter.length === 0) {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(
        users.filter((user) =>
          user[category].toString().toLowerCase().includes(filter.toLowerCase())
        ),
      );
    }
  };

  return (
    <>
      <div class="filter">
        <select
          name="filter"
          id="filter"
          onChange={(e) => setCategory(e.currentTarget.value as Category)}
        >
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="sex">Sex</option>
          <option value="hobbies">Hobbies</option>
        </select>

        <input
          type="text"
          name="filter-input"
          id="filter-input"
          onInput={handleFilter}
          value={filter}
        />
      </div>
      <Gallery users={filteredUsers} />
    </>
  );
};

export default GalleryFilter;
