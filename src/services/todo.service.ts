import { createConnection } from "../configs/mysql.config";
class TodoService {
  private connection: any;
  constructor() {
    this.connection = createConnection();
  }
  /** create */
  create(title: string, content: string) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "INSERT INTO todo SET ?",
        {
          title,
          content,
        },
        (error: Error, data: any) => {
          if (error) {
            reject(error);
          }
          resolve(data);
        }
      );
    });
  }
}

export const todoService = new TodoService();
