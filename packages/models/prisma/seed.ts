import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { default as users } from "./users.json";
import { default as books } from "./books.json";

// (1-based) array index becomes list id
const listData = [
  {
    name: "Speculative fiction",
    userId: 1,
    books: {
      connect: [{ id: 5129 }, { id: 4381 }, { id: 11 }],
    },
  },
  {
    name: "Classics",
    userId: 1,
    books: {
      connect: [{ id: 391729 }, { id: 10799 }, { id: 46170 }],
    },
  },
];

const create = async (type: any, items: any) => {
  for (const item of items) {
    try {
      await type.create({ data: item });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          // already exists - ignore
          continue;
        }
      }
      throw e;
    }
  }
};

const createLists = async () => {
  listData.forEach(async (data, index) => {
    const listId = {
        name: data.name,
        userId: data.userId,
    };

    await prisma.list.upsert({
      where: {
        name_userId: listId,
      },
      create: {
        ...data
      },
      update: {
        ...data,
      },
    });
  });
};

const main = async () => {
  await create(prisma.user, users);
  await create(prisma.book, books);
  await createLists();
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
