import connection from "./connection";



const fetchProductData = async (req,res)  => {
  const querybind = "SELECT * FROM products";

  if(req.method == "GET"){``
       const result = await connection.query(querybind);
       console.log(result);
       return result;
  }

}