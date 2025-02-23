"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

interface Recipe {
  _id: string;
  title: string;
  image?: string;
  ingredients: string[];
  instructions: string;
  author?: { username: string };
}

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [error, setError] = useState("");
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        setError("Failed to fetch recipe");
      }
    };

    fetchRecipe();
  }, [id]);

  if (error) {
    return <div className="container mx-auto mt-8 text-red-500">{error}</div>;
  }

  if (!recipe) {
    return <div className="container mx-auto mt-8">Loading...</div>;
  }

  return <h1 className="text-3xl font-bold">{recipe.title}</h1>;
};

export default RecipeDetail;
