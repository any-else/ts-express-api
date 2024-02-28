import { Express } from "express";
import { demoController } from "../controllers/demo.controller";
export const demoRoute = (app: Express) => {
  app.get("/api/v1/demo", demoController.getDemo);
};
