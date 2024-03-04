import { Express } from "express";
import { todoController } from "../controllers/todo.controller";
export const todoRoute = (app: Express) => {
  /** tạo mới */
  app.post("/api/v1/todo/create", todoController.create);
  /** api get tất cả */
  app.get("/api/v1/todo/list", todoController.getAll);
  /** api get một */
  app.get("/api/v1/todo/list/:id", todoController.getById);
  /** api search  */
  app.get("/api/v1/todo/search", todoController.search);
  /** update */
  /** delete */
  app.delete("/api/v1/todo/delete/:id", todoController.delete);
  /** bai tap ve nha pagination */
};
