import { connect } from "react-redux";
import Overview from "./Overview";

import { openModal } from "../../actions.js";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onFinishTask: () => dispatch(openModal("FINISH_TASK")),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);
