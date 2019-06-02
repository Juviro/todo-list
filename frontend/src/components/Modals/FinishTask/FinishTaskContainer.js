import { graphql, compose } from "react-apollo";

import FinishTask from "./FinishTask";
import { COMPLETE_TASK, GET_TASKS, GET_TASK } from "../../../queries/task";
import { GET_USERS } from "../../../queries/user";

export default compose(
  graphql(COMPLETE_TASK, {
    name: "onFinish",
    options: {
      // TODO solve more elegant or move to resolver
      update: (proxy, { data: { completeTask } }) => {
        const data = proxy.readQuery({ query: GET_TASKS });
        const newCompleted = {
          timestamp: Date.now(),
          user: completeTask.user,
          __typename: "Completed",
        };

        data.tasks = data.tasks.map(task => {
          if (task._id === completeTask._id) {
            return {
              ...task,
              lastDone: Date.now().toString(),
              completed: [...task.completed, newCompleted],
            };
          }
          return task;
        });

        proxy.writeQuery({ query: GET_TASKS, data });
      },
    },
  }),
  graphql(GET_USERS, {
    props: ({ data: { users, loading } }) => ({
      users: { data: users, loading },
    }),
  }),
  graphql(GET_TASK, {
    props: ({ data: { task } }) => ({ task }),
  })
)(FinishTask);
