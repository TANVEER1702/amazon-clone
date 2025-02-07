"use client";
import React, { useState } from "react";
import logo from "@/public/e-commerce logo.webp";
import flag from "@/public/indian-flag.png";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const items = [
  "All",
  "Fresh",
  "Sell",
  "Furniture",
  "Grocery",
  "Best Sellers",
  "Today's Deals",
  "Mobiles",
  "Electronics",
  "Customer Service",
  "Home & Kitchen",
  "New Releases",
  "Fashion",
];

export default function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const search = () => {
    router.push(`/search/${query}`);
  };

  return (
    <header>
      <div className="bg-gray-300">
        <div className="flex justify-between px-5 text-black">
          <div className="cursor-pointer  ">
            <Link href="/">
              <Image
                src={logo}
                alt="Ecommerce-logo"
                width={80}
                className="mix-blend-multiply"
              />
            </Link>
          </div>
          <div className=" justify-center items-center hidden md:flex">
            <div className="text-center items-center ms-7">
              <IoLocationOutline size={25} />
            </div>
            <div>
              <p>Delivering address</p>
              <h1>Your location</h1>
            </div>
          </div>

          <div className="flex h-10 items-center justify-center border border-gray-700 rounded-lg my-5 p-2 bg-transparent cursor-pointer w-[50%]">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for product"
              className="flex-grow outline-none text-gray-900 placeholder-gray-700 p-2 bg-transparent text-ellipsis w-20 md:w-[70%] sm:w-50"
            />
            <FaSearch onClick={search} className="text-gray-700" size={20} />
          </div>
          <div className="md:flex items-center space-x-2 cursor-pointer hidden ">
            <Image src={flag} alt="indian flag" width={20} />
            <h1 className="font-bold">EN</h1>
          </div>
          <div className="items-center justify-center flex cursor-pointer">
           <div>
            <p className="text-xs">Hello,sign in</p>
            <h3 className="font-bold">Account & lists</h3>

           </div>
          </div>
          <div className=" justify-center items-center cursor-pointer hidden md:flex">
            <div className="">
              <p className="text-sm">Returns</p>
              <h1 className="font-medium">& Order</h1>
            </div>
          </div>
          <div className="cursor-pointer mt-1">
            <p className="relative ms-4 top-2 ">0</p>
            <div className="flex">
              <MdOutlineShoppingCart size={25} />
              <h5>Cart</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-600 p-2 overflow-x-auto whitespace-nowrap">
        {items.map((item, index) => {
          return (
            <Link
              href={`/${item}`}
              className="mx-1 text-white  hover:border-white  border border-transparent p-1"
              key={index}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
