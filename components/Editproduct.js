"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Editproduct() {
    const router = useRouter();
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center py-5 bg-gray-100">
      <div className="w-[40%] bg-white shadow-lg px-5 py-5 rounded-lg">
        <h1 className="font-bold text-2xl text-center mb-4">Edit Product</h1>

        <div className="grid gap-6 mb-6 md:grid-cols-1">
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-white border border-gray-300 text-sm rounded-lg w-full p-2.5 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Title"
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block mb-2 text-sm font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="bg-white border border-gray-300 text-sm rounded-lg w-full p-2.5 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Price"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block mb-2 text-sm font-medium">
              Category
            </label>
            <input
              type="text"
              id="category"
              className="bg-white border border-gray-300 text-sm rounded-lg w-full p-2.5 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Category"
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="block mb-2 text-sm font-medium">
              Image
            </label>
            <input
              type="file"
              id="image"
              className="bg-white border border-gray-300 text-sm rounded-lg w-full p-2.5 cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="disc" className="block mb-2 text-sm font-medium">
              Description
            </label>
            <textarea
              id="disc"
              className="bg-white border border-gray-300 text-sm rounded-lg w-full p-2.5 resize-none outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              placeholder="Enter product description..."
              required
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
            onClick={() => router.back()}
            className="px-5 bg-gray-600 text-white p-2 rounded-lg font-semibold hover:bg-gray-700 transition duration-200">
              Back
            </button>

            <button className="px-5 bg-blue-600 text-white p-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
