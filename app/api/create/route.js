import connectDB from "@/lib/db";
import note from "@/models/note";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB;
    const notes = await note.find({}).sort((createdAt = -1));

    return NextResponse.json({ success: true, data: notes });
  } catch (error) {
    return NextResponse.json(
      {
        success: true,
        message: "Couldn't create a note",
      },
      { status: 402 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const note = await note.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "your note id created Nicely",
        data: note,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: true,
        message: "Couldn't create a note",
      },
      { status: 402 }
    );
  }
}
