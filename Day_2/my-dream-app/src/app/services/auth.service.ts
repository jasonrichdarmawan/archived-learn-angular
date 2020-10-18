import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BooleanUtil } from '../util/Boolean.util';

@Injectable()
export class AuthService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    BooleanUtil.parseBoolean(localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : false)
  )
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