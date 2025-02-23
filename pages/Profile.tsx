"use client";

import { useState } from "react";

interface User {
  username: string;
  email: string;
}

interface ProfileProps {
  user: User | null;
  onLogout: () => void;
}

const Profile = ({ user, onLogout }: ProfileProps) => {
  if (!user) {
    return (
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <p>Please login to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 rounded mt-4">Logout</button>
    </div>
  );
};

export default Profile;
