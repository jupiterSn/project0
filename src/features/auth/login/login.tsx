import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-100 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[350px] text-center">
        <h2 className="mb-6 text-purple-700 font-semibold text-2xl">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-300"
          />
          <button
            type="submit"
            className="w-full p-3 bg-purple-700 text-white rounded-lg text-base font-medium cursor-pointer hover:bg-purple-900 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-sm">
          <a href="#" className="text-purple-700 hover:text-purple-900">Forgot Password?</a> |{" "}
          <a href="#" className="text-purple-700 hover:text-purple-900">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;