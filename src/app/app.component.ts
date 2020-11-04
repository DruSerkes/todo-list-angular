import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Dru';

  // runs as soon as component loads
  constructor() {
    this.changeName('Bossman');
  }

  // can create custom methods
  changeName(name: string): void {
    this.name = name;
  }
}
