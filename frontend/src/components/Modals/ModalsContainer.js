import { connect } from "react-redux";
import { closeModal } from "../../actions.js";

import Modals from "./Modals";

const mapStateToProps = state => ({
  currentModal: state.navigation.modal.currentModal,
});

const mapDispatchToProps = dispatch => ({
  onCloseModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modals);
