import { graphql, compose } from "react-apollo";

import AddTaskButton from "./AddTaskButton";
import { OPEN_MODAL } from "../../queries/modal";

export default compose(
  graphql(OPEN_MODAL, {
    name: "openModal",
  })
)(AddTaskButton);
