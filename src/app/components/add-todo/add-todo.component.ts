import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  // Form inputs should be assigned as properties of component
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
