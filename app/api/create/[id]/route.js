import connectDB from "@/lib/db";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = await params; // Need to await params in Next.js 15+
  await connectDB();

  try {
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return NextResponse.json(
        {
          success: false,
          error: "Note not found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "NOte deleted Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 404 }
    );
  }
}
