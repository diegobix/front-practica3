import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  PUT: async (req, ctx) => {
    const name = ctx.params.name;
    const url = `https://lovers.deno.dev/${name}`;
    try {
      const body = await req.json();
      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      return res;
    } catch (e) {
      return new Response(e.message, { status: 500 });
    }
  },

  DELETE: async (req, ctx) => {
    const name = ctx.params.name;
    const url = `https://lovers.deno.dev/${name}`;
    try {
      const body = await req.json();
      const res = await fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      return res;
    } catch (e) {
      return new Response(e.message, { status: 500 });
    }
  },
};
