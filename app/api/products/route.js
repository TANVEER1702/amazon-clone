import mysql from "mysql2/promise";


export async function GET(req){

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nextjs",
    });

  const [rows] = await connection.execute("SELECT * FROM products");

  return new Response(JSON.stringify(rows));

}