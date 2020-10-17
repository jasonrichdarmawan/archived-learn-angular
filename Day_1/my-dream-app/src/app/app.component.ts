import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li>
        <a [routerLink]="['/about', 1]" [queryParams]="{foo: 'foo'}">About</a>
        <ul>
          <li><a routerLink="/about/1/child">Child</a></li>
        </ul>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my-dream-app';
}