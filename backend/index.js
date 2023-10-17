const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Define your GraphQL schema
const schema = buildSchema(`type Task {
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

const tasks = [
    { id: '1', title: 'Task 1', completed: false },
    { id: '2', title: 'Task 2', completed: true },
  ];
  
  const root = {
    tasks: () => tasks,
    task: ({ id }) => tasks.find(task => task.id === id),
    addTask: ({ title }) => {
      const newTask = { id: String(tasks.length + 1), title, completed: false };
      tasks.push(newTask);
      return newTask;
    },
    editTask: ({ id, title, completed }) => {
      const task = tasks.find(task => task.id === id);
      if (!task) return null;
      if (title) task.title = title;
      if (completed !== undefined) task.completed = completed;
      return task;
    },
    deleteTask: ({ id }) => {
      const index = tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        const [deletedTask] = tasks.splice(index, 1);
        return deletedTask;
      }
      return null;
    },
  };
  
  module.exports = { root };
  

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // This enables the GraphQL IDE for testing
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});


module.exports = schema;
