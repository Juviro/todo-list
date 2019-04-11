import { graphql, compose } from "react-apollo";

import MutateTask from "./MutateTask";
import { UPDATE_TASK, GET_TASK } from "../../../queries/task";
import { withStaticProps } from "../../../utils/apollo";

export default compose(
  graphql(UPDATE_TASK, {
    name: "onSubmit",
  }),
  graphql(GET_TASK, {
    props: ({ data: { task } }) => ({ task }),
  }),
  withStaticProps({
    buttonTitle: "Übernehmen",
    modalTitle: "Aufgabe bearbeiten",
  })
)(MutateTask);
