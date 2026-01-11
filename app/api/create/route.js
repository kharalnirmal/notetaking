import connectDB from "@/lib/db";
import Note from "@/models/note";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET() {
  try {
    await connectDB();
    const notes = await Note.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: notes });
  } catch (error) {
    console.error("Error fetching notes:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Couldn't fetch notes",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newNote = await Note.create(body);

    // Revalidate the home page to clear cache
    revalidatePath("/");

    return NextResponse.json(
      {
        success: true,
        message: "your note is created Nicely",
        data: newNote,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating note:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Couldn't create a note",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
