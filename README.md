# Key Features:
React Frontend: Utilizing the power of React, this project provides a seamless user experience with a well-designed login and registration interface.

Spring Boot Backend: The backend is powered by Spring Boot, ensuring a scalable and efficient server-side architecture. User data is stored securely in a MySQL database.

Axios for API Calls: The communication between the React frontend and Spring Boot backend is facilitated by Axios, making asynchronous HTTP requests to handle user authentication seamlessly.

Routing Library: Navigation within the application is managed using a routing library, ensuring a smooth flow between the login, registration, and home pages.

# Working :
   # User Registration:
Users can register by providing their details such as username, password and address through the registration form.
The registration data is sent to the Spring Boot backend using Axios, which then validates and stores the user information in the MySQL database.
   # User Login:
Registered users can log in by entering their credentials through the login form.
The login details are sent to the Spring Boot backend, which checks the database to verify the user's existence and the correctness of the provided password.
   # Error Handling:
The system is equipped with error handling mechanisms to deal with scenarios such as incorrect login credentials, duplicate username during registration, or server-related issues.
Users receive informative messages about the nature of errors, enhancing the overall user experience.
Axios for API Communication:
Axios is employed to make asynchronous HTTP requests between the React frontend and the Spring Boot backend.
This ensures efficient communication and data exchange, contributing to the responsiveness of the application.
   # Routing:
The project uses a routing library to manage navigation between different pages of the application.
After successful login, users are redirected to the home page, while unauthorized users are directed to the login page.
   # Database Interaction:
The Spring Boot backend interacts with a MySQL database to store and retrieve user information.
User passwords are securely hashed and stored to enhance data security.
   # Contributions and Extensibility:
The project is designed to be extensible, allowing developers to easily add new features or enhance existing ones.
Contributions from the open-source community are encouraged, fostering collaboration and improvement.
