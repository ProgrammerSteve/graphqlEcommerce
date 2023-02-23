const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
import { itemsNoId } from "./data";

export async function prismaSeedItems() {
  return await prisma.item.createMany({
    data: itemsNoId
  })
}
export async function prismaGetItems() {
  return await prisma.item.findMany({})
}