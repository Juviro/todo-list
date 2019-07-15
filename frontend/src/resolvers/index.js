import { GET_CURRENT_MODAL } from "../queries/modal";
import { GET_COMPLETED_ANIMATION } from "../queries/gimmicks";

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
  gimmicks: {
    __typename: "Gimmicks",
    isCompletedAnimationActive: false,
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
      cache.writeData({ query, data });
      return null;
    },
    isCompletedAnimationActive: (_, { isActive }, { cache }) => {
      const query = GET_COMPLETED_ANIMATION;
      const data = {
        gimmicks: {
          ...defaults.gimmicks,
          isCompletedAnimationActive: isActive,
        },
      };
      cache.writeData({ query, data });
      return null;
    },
  },
};
