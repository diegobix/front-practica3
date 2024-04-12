import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import Gallery from "../components/Gallery.tsx";
import MainContainer from "../components/MainContainer.tsx";
import UserCard from "../components/UserCard.tsx";
import { UserType } from "../types.ts";

export const handler: Handlers<UserType[]> = {
  GET: async (_req, ctx) => {
    const url = "https://lovers.deno.dev/";
    try {
      const res = await fetch(url);
      const perfiles: UserType[] = await res.json();
      return ctx.render(perfiles);
    } catch (e) {
      console.error(e);
      return new Response(e.message, { status: 500 });
    }
  },
};

export default (props: PageProps<UserType[]>) => {
  const users = props.data;

  return (
    <>
      <MainContainer>
        <Gallery users={users} />
      </MainContainer>
    </>
  );
};
