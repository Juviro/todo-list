import gql from "graphql-tag";

export const GET_CURRENT_MODAL = gql`
  query getCurrentModal {
    modal @client {
      currentModal
    }
  }
`;

export const CLOSE_MODAL = gql`
  mutation openModal {
    currentModal(name: null) @client
  }
`;

export const OPEN_MODAL = gql`
  mutation openModal($name: String!) {
    currentModal(name: $name) @client
  }
`;
