import gql from "graphql-tag";

import { GET_TASKS } from "../queries/task";

export const defaults = {
  __typename: "Query",
  modal: {
    __typename: "Modal",
    currentModal: null,
  },
};

export const resolvers = {
  Mutation: {
    currentModal: (_, { name }, { cache }) => {
      const query = gql`
        query GetModal {
          modal @client {
            currentModal
          }
        }
      `;
      const previous = cache.readQuery({ query });
      const data = {
        modal: { ...previous.modal, currentModal: name },
      };

      cache.writeData({ query, data });
      return null;
    },
    // createTask: async (_, { task: { interval, description } }, { cache }) => {
    //   console.log("interval, description", interval, description);
    //   const query = GET_TASKS;

    //   const previous = cache.readQuery({ query });
    //   const newTask = {
    //     interval,
    //     description,
    //     lastDone: null,
    //     _id: "fwefewf",
    //     __typename: "Task",
    //   };
    //   const data = { ...previous, tasks: previous.tasks.concat([newTask]) };
    //   console.log("previous, data", previous, data);

    //   cache.writeData({ query, data });
    //   return newTask;
    // },
  },
};
