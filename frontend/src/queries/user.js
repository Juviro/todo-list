import gql from "graphql-tag";

export const GET_USERS = gql`
  query getUsers {
    users {
      _id
      name
      primaryColor
    }
  }
`;
