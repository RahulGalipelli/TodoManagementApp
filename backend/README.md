# Todo Management Application (Spring Boot)

## Setup Instructions

Step 1: Clone the Repository

Step 2: Configure the Application

		Open \src\main\java\com\todosapp\rest\webservices\restful_web_services\jwt\JwtSecurityConfig.java

		Update the "XYZ" with your username and password as your wish:
		    
			@Bean
			public UserDetailsService userDetailsService() {
				UserDetails user = User.withUsername("XYZ")
										.password("{noop}dummy")
										.authorities("read")
										.roles("USER")
										.build();

				return new InMemoryUserDetailsManager(user);
			}
		
Step 3: Build the Application

		Run the following command to build the project:

		mvn clean install
		
Step 4: Run the Application

		Start the Spring Boot application with:

		mvn spring-boot:run
		
Step 5: Test the API

		The application will run at http://localhost:8080.
		Use tools like Postman or cURL to test the endpoints.
		API Endpoints
		Method	Endpoint	Description
		GET	/api/todos	Fetch all todos
		POST	/api/todos	Create a new todo
		PUT	/api/todos/{id}	Update a todo
		DELETE	/api/todos/{id}	Delete a todo
		
## Technologies Used
		
Backend: Java, Spring Boot
Database: MySQL, Spring JPA
Security: Spring Security
Build Tool: Maven

## Contributing

Feel free to fork the repository and contribute. Raise a pull request for review.

## License

This project is licensed under the MIT License.
