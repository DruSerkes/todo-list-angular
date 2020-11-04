import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  // This is used to import services
  constructor(private todoService: TodoService) { }

  // similar to onMount - you want to use this
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos
    });
  }

  deleteTodo(todo: Todo) {
    // Delete on UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Delete on server
    this.todoService.deleteTodo(todo).subscribe();
  }
}
