import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/people" routerLinkActive="active">People</a>
      <a routerLink="/placeinput" routerLinkActive="active">Places</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  {
  title = 'Project 1 Demo';
}
