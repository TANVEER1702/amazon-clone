import Image from "next/image";
import React from "react";
import mobile from "@/public/Mobile-login-Cristina.jpg"
import Link from "next/link";

export default function login() {
  return (
    <div className="p-10 bg-green-200">
      <div className="flex justify-around p-10 bg-white">
        <div className="p-10 shadow-2xl rounded-lg  h-fit gap-3">
          <h1 className="text-2xl font-bold ">Login</h1>
            <div className="flex gap-1">
          <p>Doesn't have an account yet ? </p>
          <Link href={"/"} className="text-green-400 underline">Sign Up</Link>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <a href="#" className="text-sm text-green-400 hover:underline ">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-green-400 text-white font-bold font-serif p-2 rounded hover:bg-green-600 " 
            >
              Login
            </button>
          </form>
        </div>
        <div className="hidden md:block">
            <Image src={mobile} alt="login-image" width={400} height={400} className="mix-blend-multiply" />
        </div>
      </div>
    </div>
  );
}
