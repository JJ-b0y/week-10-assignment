import { Injectable } from '@angular/core';
import { ILogin } from '../../Interface/loginInterface';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // Using PROMISE with resolve & reject
  loginPromise(credentials: ILogin): Promise<ILogin> {

    return new Promise((resolve, reject) => {
      if (credentials) {
        console.log(`Email: ${credentials.email}\nPassword: ${credentials.password}`);
        resolve(credentials);
      } else {
        reject('Login failed');
      }
    });
  }

  // Using Observable with of, pipe & map operators
  loginObservable(credentials: ILogin): Observable<ILogin> {
    return of(credentials).pipe(
      map((value) => {
        const uppercaseCredentials = {
          email: value.email.toUpperCase(),
          password: value.password.toUpperCase(),
        };
        console.log(`Email: ${uppercaseCredentials.email}\nPassword: ${uppercaseCredentials.password}`);
      
        return uppercaseCredentials;
      })
    );
  }
}
