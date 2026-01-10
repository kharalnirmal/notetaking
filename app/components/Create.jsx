"use client";

import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="bg-white/95 shadow-xl backdrop-blur-sm p-6 border border-indigo-200/40 rounded-xl text-black container">
      <form className="space-y-4">
        <h1 className="text-gray-700 text-2xl">Create Notes</h1>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600 w-full text-gray-800 text-lg"
        />

        <textarea
          rows={5}
          onChange={(e) => setContent(e.current.target)}
          type="text"
          placeholder="Write a Content"
          className="p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600 w-full text-gray-800 text-lg"
        />
        <button
          type="submit"
          className="bg-indigo-600 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:scale-105 active:scale-95"
        >
          {loading ? "Creating....." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default Create;
