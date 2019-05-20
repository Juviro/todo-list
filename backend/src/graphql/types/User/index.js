export default `
  type User {
    _id: String!
    name: String!
  }

  type Query {
    user(_id: ID!): User!
    users: [User!]!
  }

  type Mutation {
    createUser(user: CreateUserInput): User!
  }

  input CreateUserInput {
    name: String!
  }
`;
