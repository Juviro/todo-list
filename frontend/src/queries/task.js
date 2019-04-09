import gql from "graphql-tag";

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
  mutation createTask($description: String!, $interval: Int!) {
    createTask(task: { description: $description, interval: $interval }) {
      description
      interval
      lastDone
      _id
    }
  }
`;
