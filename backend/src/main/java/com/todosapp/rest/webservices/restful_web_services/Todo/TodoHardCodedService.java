package com.todosapp.rest.webservices.restful_web_services.Todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {
	private static List<Todo> todos = new ArrayList<>();
	private static Long idCounter = 0L;
	static {
	    todos.add(new Todo(++idCounter,"RahulGalipelli","Attend the meeting at 12pm",new Date(),false));
		todos.add(new Todo(++idCounter,"RahulGalipelli","Learn to Dance",new Date(),false));
		todos.add(new Todo(++idCounter,"RahulGalipelli","Practice DSA Advanced",new Date(),false));
	}
	
	public List<Todo> findAll(){ 
		return todos;
	}
	
	public Todo saveTodo(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteTodo(todo.getId());
			todos.add(todo);
		}
		
		return todo;
	}
	
	public Todo deleteTodo(long id) {
		Todo myTodo = findById(id);
		if(myTodo==null) {  
			return null;
		}
		 
		todos.remove(myTodo);
		return myTodo;
	}

	public Todo findById(long id) { 
		for(Todo todo: todos) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;
	}	
	
}
