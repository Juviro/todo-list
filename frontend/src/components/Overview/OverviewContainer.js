import { graphql, compose } from "react-apollo";

import Overview from "./Overview";
import { GET_TASKS } from "../../queries/task";

export default compose(
  graphql(GET_TASKS, {
    props: ({ data: { tasks } }) => ({
      tasks,
    }),
  })
)(Overview);
