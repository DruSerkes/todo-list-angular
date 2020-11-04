import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name: string = 'Dru Serkes';
  githubUrl: string = 'https://github.com/druserkes'

  constructor() { }

  ngOnInit(): void {
  }

}
