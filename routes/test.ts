import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  POST: async (req, ctx) => {
    console.log(await req.formData());
    return new Response("", { status: 200 });
  },
};
