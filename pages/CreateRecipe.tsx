"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const CreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes`, { title, ingredients, instructions, image });
      router.push("/");
    } catch (error: any) {
      setError(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Create Recipe</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Ingredients</label>
          {ingredients.map((ingredient, index) => (
            <input key={index} type="text" value={ingredient} onChange={(e) => handleIngredientChange(index, e.target.value)} className="w-full px-3 py-2 border rounded mb-2" />
          ))}
          <button type="button" onClick={handleAddIngredient} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Add Ingredient</button>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
