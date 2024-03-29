import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(localStorage.getItem('isLoggedIn') === 'true')
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable()

  constructor() {
    console.log('AuthService Initialized...')
  }

  logIn(): Observable<boolean> {
    localStorage.setItem('isLoggedIn', 'true')
    this.isLoggedIn.next(true)
    return this.isLoggedIn$
  }

  logOut(): Observable<boolean> {
    localStorage.setItem('isLoggedIn', 'false')
    this.isLoggedIn.next(false);
    return this.isLoggedIn$
  }
}