import { PageProps } from "$fresh/server.ts";
import Navbar from "../islands/Navbar.tsx";
import MainContainer from "../components/MainContainer.tsx";

export default ({ Component }: PageProps) => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Component />
      </MainContainer>
    </>
  );
};
