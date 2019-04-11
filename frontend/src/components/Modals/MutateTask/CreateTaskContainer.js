import { graphql, compose } from "react-apollo";

import CreateTask from "./MutateTask";
import { CREATE_TASK, GET_TASKS } from "../../../queries/task";
import { withStaticProps } from "../../../utils/apollo";

export default compose(
  graphql(CREATE_TASK, {
    name: "onSubmit",
    options: {
      update: (proxy, { data: { createTask } }) => {
        const data = proxy.readQuery({ query: GET_TASKS });
        data.tasks.push(createTask);
        proxy.writeQuery({ query: GET_TASKS, data });
      },
    },
  }),
  withStaticProps({
    buttonTitle: "Erstellen",
    modalTitle: "Neue Aufgabe erstellen",
  })
)(CreateTask);
