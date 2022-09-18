import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
  },
  status: {
    type: "String",
  },
});

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
