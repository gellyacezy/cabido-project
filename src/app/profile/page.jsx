"use client";

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-rose-200 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-pink-200 p-8 text-center">
        
        <div className="flex justify-center mb-4">
          <img
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=200&auto=format&fit=crop"
            alt="Cute Shih Tzu"
            className="w-32 h-32 rounded-full border-4 border-pink-400 shadow-lg object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold text-pink-600 mb-1">
          Angel Mae C. Cabido
        </h1>
        <p className="text-pink-400 text-sm mb-6">
          Welcome to your profile page
        </p>

        <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 mb-6 text-left">
          <p className="text-pink-700 text-sm">
            <span className="font-semibold">Username:</span> Gellyace
          </p>
          <p className="text-pink-700 text-sm mt-1">
            <span className="font-semibold">Status:</span> Logged In ✅
          </p>
        </div>

        <button
          onClick={() => router.back()}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-colors shadow-md"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}