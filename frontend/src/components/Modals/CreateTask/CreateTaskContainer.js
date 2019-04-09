import { graphql, compose } from "react-apollo";

import CreateTask from "./CreateTask";
import { CREATE_TASK, GET_TASKS } from "../../../queries/task";

export default compose(
  graphql(CREATE_TASK, {
    name: "onCreateTask",
    options: {
      update: (proxy, { data: { createTask } }) => {
        const data = proxy.readQuery({ query: GET_TASKS });
        data.tasks.push(createTask);
        proxy.writeQuery({ query: GET_TASKS, data });
      },
    },
  })
)(CreateTask);
