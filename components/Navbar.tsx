import { FunctionComponent } from "preact";

type NavbarProps = {
  logged: boolean;
};

const Navbar: FunctionComponent<NavbarProps> = ({ logged }) => {
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
