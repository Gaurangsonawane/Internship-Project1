"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { io, Socket } from "socket.io-client";

interface Recipe {
  _id: string;
  title: string;
  image?: string;
  author?: { username: string };
}

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes`);
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();

    const socket: Socket = io(process.env.NEXT_PUBLIC_API_URL!);

    socket.on("newRecipe", (newRecipe: Recipe) => {
      setRecipes((prevRecipes) => [newRecipe, ...prevRecipes]);
    });

    socket.on("updateRecipe", (updatedRecipe: Recipe) => {
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) => (recipe._id === updatedRecipe._id ? updatedRecipe : recipe))
      );
    });

    socket.on("deleteRecipe", (deletedRecipeId: string) => {
      setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe._id !== deletedRecipeId));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Latest Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link key={recipe._id} href={`/recipe/${recipe._id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {recipe.image && (
                <img src={recipe.image || "/placeholder.svg"} alt={recipe.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600">By {recipe.author?.username || "Unknown"}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
