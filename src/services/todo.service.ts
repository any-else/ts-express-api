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
  /** get all */
  find() {
    return new Promise((resolve, reject) => {
      this.connection.query("SELECT * FROM todo", (error: Error, data: any) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      });
    });
  }

  findById(id: string) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "SELECT * FROM todo WHERE _id = ?",
        Number(id),
        (error: Error, data: any) => {
          if (error) {
            reject(error);
          }
          resolve(data);
        }
      );
    });
  }

  async search(q: string) {
    /** handle logic => 2 cách */
    /** cách dùng js  */
    // const listTodo: any = await this.find();
    // const listSearch = listTodo.filter((item: any) => {
    //   return (
    //     item.title.trim().toLowerCase().includes(q.trim().toLowerCase()) ||
    //     item.content.trim().toLowerCase().includes(q.trim().toLowerCase())
    //   );
    // });
    // return listSearch;
    /** dùng truy vấn trong database mysql */
    return new Promise((resolve, reject) => {
      this.connection.query(
        "SELECT * FROM todo WHERE title LIKE ? OR content LIKE ?",
        [`%${q}%`, `%${q}%`],
        (error: Error, data: any) => {
          if (error) {
            reject(error);
          }
          resolve(data);
        }
      );
    });
  }

  delete(id: string) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "DELETE FROM todo WHERE _id = ?",
        Number(id),
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
