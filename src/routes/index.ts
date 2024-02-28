import { Express } from "express";
import { demoRoute } from "./demo.route";
import { todoRoute } from "./todo.route";
export const rootRoute = (app: Express) => {
  demoRoute(app);
  todoRoute(app);
};
