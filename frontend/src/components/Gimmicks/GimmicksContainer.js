import { graphql, compose } from "react-apollo";

import Gimmicks from "./Gimmicks";
import {
  CHANGE_IS_COMPLETED_ANIMATION_ACTIVE,
  GET_COMPLETED_ANIMATION,
} from "../../queries/gimmicks";

export default compose(
  graphql(GET_COMPLETED_ANIMATION, {
    props: ({ data: { gimmicks } }) => gimmicks,
  }),
  graphql(CHANGE_IS_COMPLETED_ANIMATION_ACTIVE, {
    name: "onFinishCompletedAnimation",
    options: {
      variables: {
        isActive: false,
      },
    },
  })
)(Gimmicks);
