"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const VALID_USERNAME = "cabido";
const VALID_PASSWORD = "password123";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (username !== VALID_USERNAME) {
      setError("Invalid username.");
      return;
    }
    if (password !== VALID_PASSWORD) {
      setError("Invalid password.");
      return;
    }
    setError("");
    router.push("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-rose-200 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-pink-200 p-8">
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-2">
          Welcome Back 💖
        </h1>
        <p className="text-center text-pink-400 mb-6 text-sm">
          Please sign in to continue
        </p>

        <div className="mb-4">
          <label className="block text-pink-700 font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full px-4 py-2 rounded-lg border border-pink-300 bg-pink-50 text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-pink-700 font-medium mb-1">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-lg border border-pink-300 bg-pink-50 text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
            className="accent-pink-500 w-4 h-4 mr-2"
          />
          <label htmlFor="showPassword" className="text-pink-700 text-sm cursor-pointer">
            Show Password
          </label>
        </div>

        {error && (
          <p className="text-rose-600 bg-rose-100 border border-rose-300 rounded-lg px-3 py-2 text-sm mb-4">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-colors shadow-md"
        >
          Login
        </button>

        <p className="text-center text-pink-400 text-xs mt-6">
          Hint: username <b>cabido</b> · password <b>password123</b>
        </p>
      </div>
    </div>
  );
}