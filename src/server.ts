import express, { Express } from "express";
import { rootRoute } from "./routes";
import { createConnection } from "./configs/mysql.config";
import bodyParser from "body-parser";
import cors from "cors";

const app: Express = express();
/** Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/** Router của express */
rootRoute(app);

/** Test connect mysql */
createConnection();

app.listen(8080, () => {
  console.log("Server start on http://localhost:8080");
});
