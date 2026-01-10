import connectDB from "@/lib/db";

import Create from "./components/Create.jsx";

export default async function Home() {
  await connectDB();
  return (
    <div className="space-y-5 mx-auto p-2 container">
      <h1 className="font-black text-3xl text-center">
        Note App{" "}
        <hr class="bg-gradient-to-r from-blue-500 via-white to-blue-500 my-6 border-0 rounded-full h-[2px]" />
      </h1>

      <Create />
    </div>
  );
}
