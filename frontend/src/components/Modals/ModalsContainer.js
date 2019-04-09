import { graphql, compose } from "react-apollo";

import Modals from "./Modals";
import { CLOSE_MODAL, GET_CURRENT_MODAL } from "../../queries/modal";

export default compose(
  graphql(CLOSE_MODAL, { name: "onCloseModal" }),
  graphql(GET_CURRENT_MODAL, {
    props: ({ data: { modal } }) => ({
      currentModal: modal.currentModal,
    }),
  })
)(Modals);
