package com.todosapp.rest.webservices.restful_web_services.Todo;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoJpaResource {
	
	@Autowired
	private TodoJpaRepository todoJpaRepos;
	
	@GetMapping("/jpa/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoJpaRepos.findByUsername(username);
	}
	
	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodos(@PathVariable String username, @PathVariable long id) {
		Optional<Todo> todo = todoJpaRepos.findById(id);
		if (todo.isPresent()) {
			todoJpaRepos.deleteById(id);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Todo> retrieveTodos(@PathVariable String username, @PathVariable long id) {
		Optional<Todo> todo = todoJpaRepos.findById(id);
		if (todo.isPresent()) {
			return ResponseEntity.ok(todo.get());
		}
		return ResponseEntity.notFound().build();
	}
	 
	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
		todo.setUsername(username);
		Todo updatedTodo = todoJpaRepos.save(todo);
		return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
	}
	
	@PostMapping("/jpa/users/{username}/todos")
	public ResponseEntity<Todo> createTodo(@PathVariable String username, @RequestBody Todo todo) {
		todo.setUsername(username);
		Todo savedTodo = todoJpaRepos.save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedTodo.getId()).toUri();
		return ResponseEntity.created(uri).body(savedTodo);
	}
}
