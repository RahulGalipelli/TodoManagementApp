import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';
import { API_URL, TODO_JPA_API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient,) { 

  }

  getAllTodosService(username: String){
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
  }

  deleteTodosService(username: String, id:number){
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodosService(username: String, id:number, todo:Todo){
    return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`,todo);
  }

  createTodosService(username: String, todo:Todo){
    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`,todo);
  }

  retrieveTodosService(username: String, id:number){
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }
}
