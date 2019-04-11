export default `
  type Task {
    _id: String!
    description: String!
    interval: String!
    lastDone: String
  }

  type Query {
    task(_id: ID!): Task!
    tasks: [Task!]!
  }

  type Mutation {
    createTask(task: CreateTaskInput): Task!
    updateTask(_id: ID!, task: UpdateTaskInput!): Task!
    deleteTask(_id: ID!): Task!
  }

  input CreateTaskInput {
    description: String!
    interval: String!
    lastDone: Int
  }
  
  input UpdateTaskInput {
    description: String
    interval: String
    lastDone: Int
  } 
`;
