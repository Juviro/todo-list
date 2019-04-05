import Task from "../../models/Task";

export default {
  Query: {
    task: async (parent, { _id }, context, info) => {
      return await Task.findOne({ _id }).exec();
    },
    tasks: async (parent, args, context, info) => {
      return await Task.find({})
        .populate()
        .exec();
    },
  },
  Mutation: {
    createTask: async (parent, { task }, context, info) => {
      const newTask = await new Task(task);

      return new Promise((resolve, reject) => {
        newTask.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateTask: async (parent, { _id, task }, context, info) => {
      return new Promise((resolve, reject) => {
        Task.findByIdAndUpdate(_id, { $set: { ...task } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteTask: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        Task.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
  },
  // Task: {
  //   posts: async ({ _id }, args, context, info) => {
  //     return await Post.find({ author: _id });
  //   },
  //   comments: async ({ _id }, args, context, info) => {
  //     return await Comment.find({ author: _id });
  //   },
  // },
};
