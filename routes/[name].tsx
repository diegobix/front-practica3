import { Handlers, PageProps } from "$fresh/server.ts";
import MainContainer from "../components/MainContainer.tsx";
import UserFull from "../components/UserFull.tsx";
import { UserType } from "../types.ts";

export const handler: Handlers<UserType> = {
  GET: async (req, ctx) => {
    const name = ctx.params.name;
    const url = `https://lovers.deno.dev/${name}`;
    try {
      const res = await fetch(url);
      if (res.status === 200) {
        const data: UserType = await res.json();
        return ctx.render(data);
      }
      return res;
    } catch (e) {
      return new Response(e.message, { status: 500 });
    }
  },
};

export default (props: PageProps<UserType>) => {
  const user = props.data;

  return (
    <MainContainer>
      <UserFull user={user} />
    </MainContainer>
  );
};
