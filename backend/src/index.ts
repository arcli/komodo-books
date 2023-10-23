import { PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from "express";

const prisma = new PrismaClient();
const app: Express = express();
const port = 8000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("foo");
});

app.get("/test", async (req, res) => {
  const users = await prisma.user.findMany({
    // where: { published: true },
    // include: { author: true },
  });
  res.json(users);
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
