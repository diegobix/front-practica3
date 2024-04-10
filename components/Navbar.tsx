import { FunctionComponent } from "preact";

const Navbar: FunctionComponent = () => {
  return (
    <nav>
      <a href="/">
        <span>Home</span>
      </a>
      <a href="#">
        <span>Nose</span>
      </a>
    </nav>
  );
};

export default Navbar;
