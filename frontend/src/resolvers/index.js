import { GET_CURRENT_MODAL } from "../queries/modal";

export const defaults = {
  __typename: "Query",
  modal: {
    __typename: "Modal",
    currentModal: null,
    modalPayload: {
      __typename: "ModalPayload",
      _id: null,
    },
  },
};

export const resolvers = {
  Mutation: {
    currentModal: (_, { name, payload }, { cache }) => {
      const query = GET_CURRENT_MODAL;
      const data = {
        modal: {
          ...defaults.modal,
          currentModal: name,
          modalPayload: { ...defaults.modal.modalPayload, ...payload },
        },
      };
      console.log("data", data);
      cache.writeData({ query, data });
      return null;
    },
  },
};
