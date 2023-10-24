import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();
const port = 8000;

var corsOptions = {
  origin: true, // allow all for dev/demo purpose
  // for prod, could do something like:
  // origin: [process.env.CORS_ALLOWED_URL, "http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/books/all", async (req, res) => {
  const books = await prisma.book.findMany({
    // where: { published: true },
    // include: { author: true },
  });
  res.json(books);
});

app.listen(port, () => {
  console.log(`server running at http://0.0.0.0:${port}`);
});
