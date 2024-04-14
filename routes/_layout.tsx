import { PageProps } from "$fresh/server.ts";
import Navbar from "../islands/Navbar.tsx";

export default ({ Component }: PageProps) => {
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
};
