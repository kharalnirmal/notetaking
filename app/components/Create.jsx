"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const Create = ({ initial }) => {
  const [notes, setnotes] = useState(initial);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const createNote = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setLoading(true);
    try {
      const result = await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, //Hey, I'm sending you JSON, not plain text or a form.
        body: JSON.stringify({ title, content }), //converts your JavaScript object into a JSON string so it can be transmitted over HTTP.
      });

      const data = await result.json(); // Parse the JSON from the response
      console.log("Actual data:", data); // Now you'll see the object with success, message, and your note!

      if (data.success) {
        setnotes([data.data, ...notes]); // Add new note to the beginning of the list
        setTitle(""); // Clear title input
        setContent(""); // Clear content input
        toast.success("Note created successfully!");
      } else {
        toast.error("Failed to create note");
      }
      setLoading(false);
    } catch (error) {
      console.log("there is error ", error);
      toast.error("Failed to create note");
      setLoading(false);
    }
  };

  const deleteNote = async (id) => {
    try {
      const resultNote = await fetch(`/api/create/${id}`, {
        method: "DELETE",
      });

      const result = await resultNote.json();
      console.log("Delete response:", result); // Check the response

      if (result.success) {
        setnotes((notes) => notes.filter((note) => note._id !== id));
        toast.success("Note Deleted Successfully");
      } else {
        toast.error(result.error || "Failed to delete note");
      }
    } catch (error) {
      console.log("there is error ", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <>
      {/* Create Form Section */}
      <div className="bg-white/95 shadow-xl backdrop-blur-sm p-6 border border-indigo-200/40 rounded-xl text-black container">
        <form className="space-y-4">
          <h1 className="text-gray-700 text-2xl">Create Notes</h1>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Title"
            className="p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600 w-full text-gray-800 text-lg"
          />

          <textarea
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder="Write a Content"
            className="p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600 w-full text-gray-800 text-lg"
          />
          <button
            type="submit"
            className="bg-indigo-600 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:scale-105 active:scale-95"
            onClick={createNote}
          >
            {loading ? "Creating....." : "Create"}
          </button>
        </form>
      </div>

      {/* Notes Display Section */}
      <div className="bg-white/95 shadow-xl backdrop-blur-sm mt-6 p-6 border border-indigo-200/40 rounded-xl text-black container">
        <div className="space-y-4">
          <h1 className="mb-4 font-bold text-indigo-700 text-2xl">
            Your Notes ({notes.length})
          </h1>

          {notes.length === 0 ? (
            <div className="flex flex-col justify-center items-center py-12">
              <p className="text-gray-400 text-lg">
                📝 No notes yet. Create your first note above!
              </p>
            </div>
          ) : (
            <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-3">
              {notes.map((note) => (
                <div
                  key={note._id}
                  className="bg-gradient-to-br from-indigo-50 to-white shadow-md hover:shadow-xl p-4 border border-indigo-200 rounded-xl hover:scale-105 transition-all duration-200"
                >
                  <h2 className="mb-2 font-bold text-gray-800 text-base line-clamp-2">
                    {note.title}
                  </h2>
                  <p className="mb-3 text-gray-600 text-sm line-clamp-3">
                    {note.content}
                  </p>
                  <div className="space-y-1 mb-3 text-gray-500 text-xs">
                    <p>
                      📅 Created:{" "}
                      {new Date(note.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <p>
                      ✏️ Updated:{" "}
                      {new Date(note.updatedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-500 hover:bg-blue-600 px-3 py-1.5 rounded-md text-white text-sm transition-colors">
                      Edit
                    </button>
                    <button
                      onClick={() => deleteNote(note._id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-md text-white text-sm transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Create;
