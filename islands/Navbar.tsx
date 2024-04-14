import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const Navbar: FunctionComponent = () => {
  const [logged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    setLogged(localStorage.getItem("name") !== null);
  }, []);

  return (
    <nav>
      <a href="/">
        <span>Home</span>
      </a>
      {logged || (
        <>
          <a href="/register">
            <span>Register</span>
          </a>
          <a href="/login">
            <span>Login</span>
          </a>
        </>
      )}
    </nav>
  );
};

export default Navbar;
