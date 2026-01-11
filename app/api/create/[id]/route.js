import connectDB from "@/lib/db";

import Note from "@/models/note";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

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

    // Revalidate the home page to clear cache
    revalidatePath("/");

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

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const body = await request.json();

    const note = await Note.findByIdAndUpdate(
      id,
      { ...body, updatedAt: new Date() },
      //flag
      { new: true, runValidators: true }
    );
    if (!note) {
      return NextResponse.json(
        {
          success: false,
          error: "Note not found",
        },
        { status: 404 }
      );
    }

    // Revalidate the home page to clear cache
    revalidatePath("/");

    return NextResponse.json(
      {
        success: true,
        message: "Note updated Successfully",
        data: note,
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
