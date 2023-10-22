import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("foo");
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
