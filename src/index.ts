import { Hono } from "hono";
import authRouter from "./routes/auth";
import dreamRouter from "./routes/dream";

const app = new Hono();

app.post("/", async (c) => {
  const body = await c.req.json();
  console.log(body);
  return c.text("Hello Hono!");
});

app.route("/auth", authRouter);
app.route("/dream", dreamRouter);

export default app;
