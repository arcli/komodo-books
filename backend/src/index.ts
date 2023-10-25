import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import morgan from "morgan";

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
app.use(express.static("static"));
app.use(morgan("dev"));

// NOTE: in reality we'd use sessions and pull this from the session
const HARDCODED_SESSION_USER_ID = 1;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/books/all", async (req, res) => {
  const books = await prisma.book.findMany({
    orderBy: {
      title: "asc",
    },
  });
  res.json(books);
});

app.get("/lists/all", async (req, res) => {
  const books = await prisma.list.findMany({
    where: { userId: HARDCODED_SESSION_USER_ID },
    include: { books: true },
    orderBy: {
      name: "asc",
    },
  });
  res.json(books);
});

app.listen(port, () => {
  console.log(`server running at http://0.0.0.0:${port}`);
});
