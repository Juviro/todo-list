import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const TaskSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  lastDone: {
    type: String,
  },
  interval: {
    type: String,
  },
  completed: [
    {
      timestamp: String,
      user: {
        type: ObjectID,
        ref: "User",
      },
    },
  ],
});

export default mongoose.model("Task", TaskSchema);
