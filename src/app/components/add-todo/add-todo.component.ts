import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  // Form inputs should be assigned as properties of component
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  newTodoForm = new FormGroup({
    titleReactive: new FormControl(''),
    completedReactive: new FormControl(false)
  });

  onSubmitTemplate() {
    const todo = {
      title: this.title,
      completed: false
    };

    this.addTodo.emit(todo);
    this.title = '';
  }
}
