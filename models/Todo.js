import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  //   owner: { type: Schema.Types.ObjectId, ref: "User" },
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
