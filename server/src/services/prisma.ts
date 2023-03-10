const { PrismaClient } = require("@prisma/client");
export const prisma = new PrismaClient();
import { itemsNoId } from "./data";

export async function prismaSeedItems() {
  await prisma.item.deleteMany({})
  return await prisma.item.createMany({
    data: itemsNoId
  })
}
export async function prismaGetItems() {
  return await prisma.item.findMany({})
}