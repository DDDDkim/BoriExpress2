import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { config } from "./config.js";
import boripharmsRouter from "./router/boripharms.js";

const app = express();

app.set("etag", false);
const options = { etag: false };
app.use(express.static("public", options));

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/boripharms", boripharmsRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});
app.listen(config.host.port);
