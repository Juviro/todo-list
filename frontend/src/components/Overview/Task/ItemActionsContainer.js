import { graphql, compose } from "react-apollo";

import ItemActions from "./ItemActions";
import { OPEN_MODAL } from "../../../queries/modal";

export default compose(
  graphql(OPEN_MODAL, {
    name: "openModal",
  })
)(ItemActions);
