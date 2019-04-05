import { connect } from "react-redux";
import { openModal } from "../../actions.js/index.js";

import AddTaskButton from "./AddTaskButton";

const mapDispatchToProps = dispatch => ({
  onCreateTask: () => dispatch(openModal("CREATE_TASK")),
});

export default connect(
  null,
  mapDispatchToProps
)(AddTaskButton);
