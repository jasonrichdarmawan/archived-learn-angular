import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><button (click)="this.isLoggedIn ? logOut() : logIn()">{{this.isLoggedIn ? "Authenticated" : "Not Authenticated" }}</button></li>
      <li><a routerLink="/">Home</a></li>
      <li>
        <a [routerLink]="['/about', 1]" [queryParams]="{foo: 'foo'}">About</a>
        <ul>
          <li><a routerLink="/about/1/child">Child</a></li>
        </ul>
      </li>
      <li><a routerLink="/hammerjs">HammerJS</a></li>
      <li><a routerLink="/uploadfile">Upload File</a></li>
      <li><a routerLink="/search">Search</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  isLoggedIn: boolean;

  constructor(public authService: AuthService, public router: Router) {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn
    })
  }

  logIn(): void {
    this.authService.logIn().subscribe(isLoggednIn => {
      this.isLoggedIn = isLoggednIn
      this.router.navigate(['about/1?foo=foo'])
    })
  }

  logOut(): void {
    this.authService.logOut().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    })
    this.router.navigate(['/'])
  }
}