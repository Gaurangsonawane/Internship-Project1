"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        username,
        email,
        password,
      });
      router.push("/login"); // Redirect to login after successful registration
    } catch (error: any) {
      setError(error.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/background.jpg')" }}>
      {/* Floating Animations */}
      <div className="absolute inset-0 bg-black/0 backdrop-blur-sm"></div>

      {/* Glassmorphic Registration Box with Animation */}
      <div className="relative w-full max-w-md p-8 rounded-2xl border border-white/40 bg-white/10 backdrop-blur-lg shadow-[0px_0px_30px_rgba(255,255,255,0.9)] 
          transition-transform transform hover:scale-105 animate-fade-in">
        <h1 className="text-4xl font-extrabold text-center text-white mb-6 animate-slide-down">Create Account</h1>
        <p className="text-gray-200 text-center mb-6 animate-slide-up">Join us and explore amazing recipes!</p>

        {error && <p className="text-white text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="animate-fade-in">
            <label htmlFor="username" className="block text-white font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 border border-white/30 rounded-lg shadow-sm bg-transparent text-white placeholder-gray-300 
              focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 hover:shadow-lg"
              placeholder="Enter your username"
            />
          </div>

          <div className="animate-fade-in">
            <label htmlFor="email" className="block text-white font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-white/30 rounded-lg shadow-sm bg-transparent text-white placeholder-gray-300 
              focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 hover:shadow-lg"
              placeholder="Enter your email"
            />
          </div>

          <div className="animate-fade-in">
            <label htmlFor="password" className="block text-white font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-white/30 rounded-lg shadow-sm bg-transparent text-white placeholder-gray-300 
              focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 hover:shadow-lg"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
           className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-md transition duration-300 hover:opacity-80 transform hover:scale-105"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-200">
          Already have an account?{" "}
          <button onClick={() => router.push("/login")} className="text-blue-300 font-bold hover:underline transition-all duration-300 hover:scale-105">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
