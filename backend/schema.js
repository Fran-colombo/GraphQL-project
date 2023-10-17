const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Task {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Query {
    tasks: [Task]
    task(id: ID!): Task
  }

  type Mutation {
    addTask(title: String!): Task
    editTask(id: ID!, title: String, completed: Boolean): Task
    deleteTask(id: ID!): Task
  }
`);

module.exports = schema;
