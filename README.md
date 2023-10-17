# Task Management Application

This is a task management application built using Node.js, GraphQL, and React.

## Features

- View a list of tasks with their titles and completion status.
- Add new tasks.
- Edit existing tasks (title and completion status).
- Delete tasks.

## Project Structure

graphql-project/
|-- backend/
|   |-- index.js
|   |-- schema.js
|   |-- resolvers.js
|   |-- database.js
|-- frontend/
|   |-- node_modules/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |   |-- TaskList.js
|   |   |   |-- AddTaskForm.js
|   |   |   |-- EditTaskForm.js
|   |   |   |-- Task.js
|   |   |-- App.js
|   |   |-- index.js
|   |-- package.json
|-- README.md
This structure separates the backend and frontend code into their respective directories. The backend contains the GraphQL server files (index.js, schema.js, resolvers.js, and database.js). The frontend includes the necessary folders (node_modules, public, src) along with the components and main application files (App.js and index.js).



## Getting Started

### Backend

1. Navigate to the `backend/` directory.
2. Install dependencies using `npm install`.
3. Start the server using `node index.js`.

The GraphQL server will start at `http://localhost:4000/graphql`.

### Frontend

1. Navigate to the `frontend/` directory.
2. Install dependencies using `npm install`.
3. Start the React application using `npm start`.

The React application will start at `http://localhost:3000`.

## Technologies Used

- Node.js
- Express.js
- GraphQL
- React
- Apollo Client

## Contributing

If you'd like to contribute, please fork the repository and create a pull request. You can also open issues for any bugs or feature requests.

## License

This project is licensed under the [MIT License](LICENSE).

