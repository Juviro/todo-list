import { graphql, compose } from "react-apollo";

import Overview from "./Overview";
import { GET_TASKS } from "../../queries/task";

const setLastDone = (task = []) => {
  const lastDone = task.completed.length
    ? Math.max(...task.completed.map(({ timestamp }) => Number(timestamp)))
    : Number(task.lastDone);

  return {
    ...task,
    lastDone,
  };
};

export default compose(
  graphql(GET_TASKS, {
    props: ({ data: { tasks = [] } }) => ({
      tasks: tasks.map(setLastDone),
    }),
  })
)(Overview);
