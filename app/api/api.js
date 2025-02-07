import axios from "axios";
import mysql from  'mysql2/promise';


let connectionParams = {
  host: process.env.SERVER_HOST,
  port: 3306,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
}

const connection = await mysql.createConnection(connectionParams);

const query = "SELECT * FROM products WHERE title = test";

const results = await connection.execute(query);

console.log(results);

const api = "https://fakestoreapi.com/products";


export const getproducts = async () => {
  const res = await axios.get(api);
  return res.data;
};
export const deleteProduct = async (id) => {
  const response = await axios.delete(`${api}/${id}`);
  return response.data;
};

export const editproduct =async (id, data) =>{
  const res = await axios.put(`${api}/${id}`,data);
  return res.data;
}
export const createProduct = async (data) =>{
  const res =  await axios.post(api,data);
  return res.data;
}
