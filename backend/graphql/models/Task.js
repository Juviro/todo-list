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
    type: Schema.Types.Date,
  },
  interval: {
    type: Schema.Types.Number,
  },
});

export default mongoose.model("Task", TaskSchema);
