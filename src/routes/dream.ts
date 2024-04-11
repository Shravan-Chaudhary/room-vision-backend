import { Hono } from "hono";

const dream = new Hono();

dream.post("/", (c) => {
  return c.json({ message: "redesigned image enjoy!!" });
});

export default dream;
