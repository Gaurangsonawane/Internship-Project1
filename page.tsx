"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";

export default function Home() {
  const router = useRouter(); // For navigation

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-50 p-10">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center opacity-30"></div> 

      {/* Logo Section */}
      <div className="absolute top-5 flex items-center gap-4">
        <Image src="/yfl-logo_e0unuq.png" alt="YFL Recipes Logo" width={80} height={80} className="drop-shadow-lg" />
        <h1 className="text-5xl font-extrabold text-orange-600 drop-shadow-lg">YFL Recipes</h1>
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-6xl font-extrabold text-orange-600 mb-6 drop-shadow-lg">
          🍽️ Discover & Share Delicious Recipes 🍜
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Join our vibrant food-loving community, explore amazing recipes,  
          and unleash your inner chef with YFL Recipes!  
        </p>

        {/* Action Buttons (Removed "Explore Recipes") */}
        <div className="flex flex-wrap justify-center gap-6">
          <button 
            onClick={() => router.push("/register")}
            className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 transform hover:scale-105 transition duration-300"
          >
            <FaUserPlus className="text-xl" />
            Join Now
          </button>

          <button 
            onClick={() => router.push("/login")}
            className="flex items-center gap-2 px-6 py-3 text-lg font-semibold border-2 border-orange-500 text-orange-600 rounded-full shadow-md hover:bg-orange-500 hover:text-white transform hover:scale-105 transition duration-300"
          >
            <FaSignInAlt className="text-xl" />
            Login
          </button>
        </div>
      </div>

      {/* Floating Food Icons */}
      <div className="absolute top-1/3 right-1/4 text-red-400 text-6xl animate-pulse">🍣</div>
      
    </main>
  );
}
