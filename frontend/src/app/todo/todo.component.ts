import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
  constructor(public todoService: TodoDataService, public route : ActivatedRoute, public router: Router){

  }

  name: string = ""
  id:number = 0
  todo!: Todo;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.todo = new Todo(this.id,"",false,new Date());
    if(this.id!=-1){
      this.todoService.retrieveTodosService(this.name,this.id).subscribe(
        response=>{
          this.todo = response;
        }
  
      );
    }
    
  }
 
 
 saveTodo(){
  if(this.id ==-1){
    this.todoService.createTodosService(this.name,this.todo)
      .subscribe(
        data=>{console.log(data)
        this.router.navigate([`${this.name}/list-todos`]);}
      )
  }else{
    this.todoService.updateTodosService(this.name,this.id,this.todo)
      .subscribe(
        data=>{console.log(data)
        this.router.navigate([`${this.name}/list-todos`]);}
      )
  }
    
 }
}
