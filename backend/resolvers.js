const tasks = [
    { id: '1', title: 'Task 1', completed: false },
    { id: '2', title: 'Task 2', completed: true },
  ];
  
  const resolvers = {
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
  
  module.exports = resolvers;
  