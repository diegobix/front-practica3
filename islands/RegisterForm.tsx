import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const RegisterForm: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [sex, setSex] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [hobbiesString, setHobbiesString] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
    if (
      !name || !password || !age || !sex || !description || !hobbiesString ||
      !photo
    ) {
      setError("Every field is required");
      return;
    }
    const hobbies = hobbiesString.split(",").map((h) => h.trim());
    const data = {
      name,
      password,
      age,
      sex,
      description,
      hobbies,
      photo,
      comments: [] as string[],
    };
    const url = "https://lovers.deno.dev/";
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.status !== 201) {
      setError("Lover couldn't be created");
      return;
    }
    setError("Lover added");
  };

  return (
    <div class="registerFormContainer">
      <div class="form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          value={name}
          onInput={(e) => {
            setName(e.currentTarget.value);
            setError("");
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          value={password}
          onInput={(e) => {
            setPassword(e.currentTarget.value);
            setError("");
          }}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          autoComplete="off"
          value={age}
          min={0}
          max={130}
          onInput={(e) => {
            setAge(Number(e.currentTarget.value));
            setError("");
          }}
        />

        <label htmlFor="sex">Sex</label>
        <input
          type="text"
          name="sex"
          id="sex"
          autoComplete="off"
          value={sex}
          onInput={(e) => {
            setSex(e.currentTarget.value);
            setError("");
          }}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          autoComplete="off"
          value={description}
          onInput={(e) => {
            setDescription(e.currentTarget.value);
            setError("");
          }}
        />

        <label htmlFor="hobbies">Hobbies</label>
        <input
          type="text"
          name="hobbies"
          id="hobbies"
          autoComplete="off"
          value={hobbiesString}
          onInput={(e) => {
            setHobbiesString(e.currentTarget.value);
            setError("");
          }}
        />

        <label htmlFor="photo">Photo url</label>
        <input
          type="text"
          name="photo"
          id="photo"
          accept="image/*"
          value={photo}
          onInput={(e) => {
            setPhoto(e.currentTarget.value);
            setError("");
          }}
        />

        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default RegisterForm;
