import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  POST: async (req) => {
    const url = "https://lovers.deno.dev/";
    const body = await req.json();
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 400) {
        return new Response("Bad request", { status: 400 });
      }
      const data = await res.json();
      return new Response(data, { status: 201 });
    } catch (e) {
      return new Response(e.message, { status: 500 });
    }
  },
};
