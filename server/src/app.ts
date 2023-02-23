import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import { prismaSeedItems, prismaGetItems } from "./services/prisma";

export const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/seedItems", async (req, res) => {
  res.send(await prismaSeedItems())
})
app.get("/getItems", async (req, res) => {
  res.send(await prismaGetItems())
})



