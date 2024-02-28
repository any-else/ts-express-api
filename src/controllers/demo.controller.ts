import { Request, Response } from "express";

class DemoController {
  getDemo(req: Request, res: Response) {
    res.status(200).json({
      message: "successfully",
      data: [
        {
          text: "demo",
        },
      ],
    });
  }
}

export const demoController = new DemoController();
