import { Express } from "express";
import { todoController } from "../controllers/todo.controller";
export const todoRoute = (app: Express) => {
  /** tạo mới */
  app.post("/api/v1/todo/create", todoController.create) 
  /** api get tất cả */
  /** api get một */
  /** api search  */
  /** update */
  /** delete */
  /** bai tap ve nha pagination */
};
