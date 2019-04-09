export default `
  type Task {
    _id: String!
    description: String!
    lastDone: String
    interval: Int!
  }

  type Query {
    task(_id: ID!): Task!
    tasks: [Task!]!
  }

  type Mutation {
    createTask(task: CreateTaskInput): Task!
    updateTask(_id: String!, task: UpdateTaskInput!): Task!
    deleteTask(_id: String!): Task!
  }

  input CreateTaskInput {
    description: String!
    lastDone: Int
    interval: Int!
  }
  
  input UpdateTaskInput {
    description: String
    lastDone: Int
    interval: Int
  } 
`;
