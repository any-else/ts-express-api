import mysql2, { PoolOptions } from "mysql2";

export const createConnection = () => {
  try {
    const connection = mysql2.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      database: "learn-express-typescript",
      password: "vuvanbui@18",
    } as PoolOptions);
    if (connection) {
      console.log("connect success");
    }

    return connection;
  } catch (error: unknown) {
    console.log("connect fail");
    throw new Error(error as any);
  }
};
