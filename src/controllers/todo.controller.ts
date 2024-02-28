import { Request, Response } from "express";
import { todoService } from "../services/todo.service";

class TodoController {
  /** create */
  async create(req: Request, res: Response) {
    try {
      /** handle logic */
      const { title, content } = req.body;
      console.log("title", title, "content", content);

      const result = await todoService.create(title, content);
      if (result) {
        res.status(201).json({
          message: "tạo mới thành công",
        });
      }
    } catch (error) {
      console.log("error", error);
      res.status(500).json({
        message: "LỖI SERVER",
      });
    }
  }
}

export const todoController = new TodoController();
