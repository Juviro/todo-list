import gql from "graphql-tag";

const TASK_FIELDS = `
      _id
      lastDone
      interval
      description
      completed {
        user {
          name
          primaryColor
        }
        timestamp
      }
`;

export const GET_TASK = gql`
  query getTask($_id: ID!) {
    task(_id: $_id) {
      ${TASK_FIELDS}
    }
  }
`;
export const GET_TASKS = gql`
  query getTasks {
    tasks {
      ${TASK_FIELDS}
    }
  }
`;

export const CREATE_TASK = gql`
  mutation createTask($description: String!, $interval: String!) {
    createTask(task: { description: $description, interval: $interval }) {
      ${TASK_FIELDS}
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($_id: ID!, $interval: String!, $description: String!) {
    updateTask(
      _id: $_id
      task: { description: $description, interval: $interval }
    ) {
      ${TASK_FIELDS}
    }
  }
`;

export const COMPLETE_TASK = gql`
  mutation completeTask($_id: ID!, $user: ID!) {
    completeTask(_id: $_id, user: $user) {
      _id
      user {
        name
        primaryColor
      }
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
