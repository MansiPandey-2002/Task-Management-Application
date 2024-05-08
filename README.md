# Task Manager Application

The Task Manager Application is a web-based task management tool designed to help users organize their tasks efficiently. It provides features for adding, updating, deleting, and sorting tasks based on priority and completion status. The application aims to streamline task management processes and improve productivity for individuals and teams.

## Key Features

1. **Task Creation:** Users can add new tasks with a name, deadline, and priority level.
2. **Task Update:** Users can update task details such as name, deadline, and priority.
3. **Task Deletion:** Users can delete tasks that are no longer needed.
4. **Task Sorting:** Tasks can be sorted based on priority levels to prioritize important tasks.
5. **Task Time Tracking:** Tasks display their deadline, and users are notified when the deadline is approaching or has passed.

## Tools Used

- **Frontend:** HTML, CSS, JavaScript, jQuery, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Database Management:** MongoDB Compass
- **Other Libraries/Tools:** Mongoose (for MongoDB object modeling), Flatpickr (for date-time picker), Moment.js (for date-time manipulation), AJAX (for asynchronous communication with the server)

## Project Setup

1. Clone the project repository from GitHub.
2. Install Node.js and MongoDB if not already installed.
3. Install project dependencies using `npm install`.
4. Start the server using `node server.js`.
5. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

## Project Structure

- **server.js:** Main server file responsible for handling HTTP requests and database operations.
- **models/task.js:** MongoDB schema model for tasks.
- **public/:** Directory containing frontend HTML, CSS, and JavaScript files.
- **scripts.js:** Frontend JavaScript file containing client-side logic.
- **views/:** Directory containing HTML templates for rendering server-side views.
- **package.json:** File specifying project dependencies and metadata.

## Contributing

Contributions to the project are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.


