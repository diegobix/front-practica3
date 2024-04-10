import { useState } from "preact/hooks";
import { JSX } from "preact";
import { FunctionComponent } from "preact";



const RegisterForm: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [sex, setSex] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [hobbies, setHobbies] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");

  const handleSubmit = async (e: JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div class="registerFormContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          autoComplete="off"
          value={age}
          onChange={(e) => setAge(Number(e.currentTarget.value))}
        />

        <label htmlFor="sex">Sex</label>
        <input
          type="text"
          name="sex"
          id="sex"
          autoComplete="off"
          value={sex}
          onChange={(e) => setSex(e.currentTarget.value)}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          autoComplete="off"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />

        <label htmlFor="hobbies">Hobbies</label>
        <input
          type="text"
          name="hobbies"
          id="hobbies"
          autoComplete="off"
          value={hobbies}
          onChange={(e) => setHobbies(e.currentTarget.value)}
        />

        <label htmlFor="photo">Photo url</label>
        <input
          type="text"
          name="photo"
          id="photo"
          accept="image/*"
          value={photo}
          onChange={(e) => setPhoto(e.currentTarget.value)}
        />

        <button type="submit">Registrate</button>
      </form>
    </div>
  );
};

export default RegisterForm;
