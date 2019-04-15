import gql from "graphql-tag";

export const GET_TASK = gql`
  query getTask($_id: ID!) {
    task(_id: $_id) {
      lastDone
      interval
      description
    }
  }
`;
export const GET_TASKS = gql`
  query getTasks {
    tasks {
      _id
      lastDone
      interval
      description
    }
  }
`;

export const CREATE_TASK = gql`
  mutation createTask($description: String!, $interval: String!) {
    createTask(task: { description: $description, interval: $interval }) {
      description
      interval
      lastDone
      _id
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($_id: ID!, $interval: String!, $description: String!) {
    updateTask(
      _id: $_id
      task: { description: $description, interval: $interval }
    ) {
      description
      interval
      lastDone
      _id
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($_id: ID!) {
    deleteTask(_id: $_id) {
      _id
    }
  }
`;
