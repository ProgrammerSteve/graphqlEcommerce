import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";

export const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
