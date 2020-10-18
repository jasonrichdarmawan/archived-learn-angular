import {Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable()

  constructor() {
    console.log('AuthService Initialized...')
  }

  logIn(): Observable<boolean> {
    this.isLoggedIn.next(true)
    return this.isLoggedIn$
  }

  logOut(): Observable<boolean> {
    this.isLoggedIn.next(false);
    return this.isLoggedIn$
  }
}