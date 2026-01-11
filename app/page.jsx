import connectDB from "@/lib/db";
import Create from "./components/Create.jsx";
import Note from "@/models/note.js";

async function getNote() {
  await connectDB();

  const notes = await Note.find({}).sort({ createdAt: -1 }).lean();
  return notes.map((note) => ({
    ...note, // spread all fields (title, content, _id)
    _id: note._id.toString(), // overwrite _id}
  }));
}

export default async function Home() {
  const notes = await getNote();

  return (
    <div className="space-y-5 mx-auto p-2 container">
      <h1 className="font-black text-white text-3xl text-center">
        Note App{" "}
        <hr className="bg-gradient-to-r from-blue-500 via-white to-blue-500 my-6 border-0 rounded-full h-[2px]" />
      </h1>

      <Create initial={notes} />
    </div>
  );
}
