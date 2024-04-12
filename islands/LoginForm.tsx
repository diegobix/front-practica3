import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const LoginForm: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    if (!name || !password) {
      setError("Some field is missing");
      return;
    }

    const user = { name, password };
    const url = "https://lovers.deno.dev/login";
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (res.status === 404) {
      setError(data.error);
    } else if (res.status === 401) {
      setError("Invalid password");
    } else {
      window.localStorage.setItem("name", user.name);
      window.localStorage.setItem("password", user.password);
      window.location.href = "/";
    }
  };

  return (
    <div class="loginContainer">
      <div class="login">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          value={name}
          onInput={(e) => {
            setError("");
            setName(e.currentTarget.value);
          }}
        />
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          value={password}
          onInput={(e) => {
            setError("");
            setPassword(e.currentTarget.value);
          }}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
