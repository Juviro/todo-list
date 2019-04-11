import gql from "graphql-tag";

export const GET_CURRENT_MODAL = gql`
  query getCurrentModal {
    modal @client {
      currentModal
      modalPayload {
        _id
      }
    }
  }
`;

export const CLOSE_MODAL = gql`
  mutation closeModal {
    currentModal(name: null) @client
  }
`;

export const OPEN_MODAL = gql`
  mutation openModal($name: String!, $payload: Object) {
    currentModal(name: $name, payload: $payload) @client
  }
`;
