import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
    maxLength: 1000,
  },
  content: {
    required: true,
    type: String,
    maxLength: 2000,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

NoteSchema.pre("save", async function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Note || mongoose.model("Note", NoteSchema);
