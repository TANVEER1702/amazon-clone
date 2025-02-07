"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function RegisterPage() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  

  const handleRegister = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password) {
      setError("All fields are required");
      return;
    }

    // Save user data to localStorage (acting as fake backend)
    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("Registration successful! Please log in.");
    router.push("/login");
  };

  return (
    <div className="flex h-32 justify-center items-center bg-gray-100 my-32">
      <div className="w-96 bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Enter email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block font-semibold">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Enter password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-400 text-black  py-2 rounded hover:bg-green-600 "
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
