import { RowDataPacket } from "mysql2";
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

  async getAll(req: Request, res: Response) {
    try {
      const result = await todoService.find();
      res.status(200).json({
        message: "successfully",
        data: result,
      });
    } catch (error: any) {
      res.status(500).json({
        message: "lỗi server",
        error: error.message,
      });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result: any = await todoService.findById(id);
      res.status(200).json({
        message: "successfully",
        data: result[0],
      });
    } catch (error: any) {
      res.status(500).json({
        message: "lỗi server",
        error: error.message,
      });
    }
  }

  async search(req: Request, res: Response) {
    try {
      const { q } = req.query;
      const result = await todoService.search(q as string);
      res.status(200).json({
        message: "successfully",
        data: result,
      });
    } catch (error: any) {
      res.status(500).json({
        message: "lỗi server",
        error: error.message,
      });
    }
  }
}

export const todoController = new TodoController();
