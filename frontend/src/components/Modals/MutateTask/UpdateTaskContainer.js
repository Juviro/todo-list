import { graphql, compose } from "react-apollo";

import MutateTask from "./MutateTask";
import {
  UPDATE_TASK,
  GET_TASK,
  DELETE_TASK,
  GET_TASKS,
} from "../../../queries/task";
import { withStaticProps } from "../../../utils/apollo";

export default compose(
  graphql(UPDATE_TASK, {
    name: "onSubmit",
  }),
  graphql(DELETE_TASK, {
    name: "onDelete",
    options: {
      update: (proxy, { data: { deleteTask } }) => {
        const data = proxy.readQuery({ query: GET_TASKS });
        const tasks = data.tasks.filter(({ _id }) => _id !== deleteTask._id);
        proxy.writeQuery({ query: GET_TASKS, data: { tasks } });
      },
    },
  }),
  graphql(GET_TASK, {
    props: ({ data: { task } }) => ({ task }),
  }),
  withStaticProps({
    buttonTitle: "Übernehmen",
    modalTitle: "Aufgabe bearbeiten",
  })
)(MutateTask);
