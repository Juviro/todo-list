import gql from "graphql-tag";

export const GET_COMPLETED_ANIMATION = gql`
  query getCompletedAnimation {
    gimmicks @client {
      isCompletedAnimationActive
    }
  }
`;

export const CHANGE_IS_COMPLETED_ANIMATION_ACTIVE = gql`
  mutation changeIsCompletedAnimationActive($isActive: Boolean!) {
    isCompletedAnimationActive(isActive: $isActive) @client
  }
`;
