import { PageProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";

export default ({ Component }: PageProps) => {
  const logged = localStorage.getItem("name") !== null;
  return (
    <>
      <Navbar logged={logged} />
      <Component />
    </>
  );
};
