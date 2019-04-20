import { graphql, compose } from "react-apollo";

import FinishTask from "./FinishTask";
import { UPDATE_TASK, GET_TASK } from "../../../queries/task";
import { GET_USERS } from "../../../queries/user";

export default compose(
  graphql(UPDATE_TASK, {
    name: "onFinish",
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
