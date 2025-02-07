"use client";
import React, { useEffect, useState } from "react";

import { getproducts, deleteProduct } from "../app/api/api";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function productlist() {
  const [products, setproduct] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchproduct();
  }, []);

  const fetchproduct = async () => {
    const data = await getproducts();
    setproduct(data);
  };
  const handleDelete = async (id) => {
    await deleteProduct(id);
    setproduct(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container p-32">
      <h1 className="text-2xl font-bold mb-4 text-center">Product List</h1>
      <div className="flex justify-end mb-4">
        <button onClick={() => router.push('./createproduct')} className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 transition">
          Add
        </button>
      </div>

      <div>
        <table className="w-full  border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Image</th>
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Category</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="text-center">
                <td className="border border-gray-300 p-2">{product.id}</td>
                <td className="border border-gray-300 p-2">
                  <Image
                    src={product.image}
                    alt={product.title}
                    height={64}
                    width={64}
                    className="object-cover mx-auto"
                  />
                </td>
                <td className="border border-gray-300 p-2">{product.title}</td>
                <td className="border border-gray-300 p-2">
                  {product.category}
                </td>
                <td className="border border-gray-300 p-2 font-bold">
                  ${product.price}
                </td>
                <td className="border border-gray-300 flex gap-4  p-2">
                  <button onClick={() =>router.push('./editproduct')} className="bg-green-400 text-white px-4 py-1 rounded my-7 hover:bg-green-500">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-3 py-1 my-7 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
