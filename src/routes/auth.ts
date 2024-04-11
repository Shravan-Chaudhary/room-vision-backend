import { Hono } from "hono";

const auth = new Hono();

auth.get("/register", (c) => {
  return c.json({ messgae: "user registered" });
});

export default auth;
