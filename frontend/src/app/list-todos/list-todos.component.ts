import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
export class Todo{
  constructor(
    public id:number,
    public description:string,
    public isCompleted:boolean,
    public targetDate:Date,
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
}) 

export class ListTodosComponent implements OnInit {

  todos : Todo[] = [];
  constructor(public todoService: TodoDataService, public router:Router, public route: ActivatedRoute){

  }
  name:string = ""
  ngOnInit(): void {
    this.name = this.route.snapshot.params["name"];
    this.refreshTodo();
    
  }

  message:String = "";
  
  refreshTodo(){
    this.todoService.getAllTodosService(this.name).subscribe(
      response =>{
        this.todos = response;
      }
    );
  }

  deleteTodo(id:number) {
    this.todoService.deleteTodosService(this.name,id).subscribe(
      response=>{
        this.refreshTodo();
        this.message = `Delete Todo ${id} Successful`;
        setTimeout(() => {
          this.message = "";
        }, 2000);
      },
    );
  }

  updateTodo(id:number){
    this.router.navigate([`${this.name}/todos`,id]);
  }
  addTodo(id:number){
    this.router.navigate([`${this.name}/todos`,id]);
  }
}
