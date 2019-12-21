import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    user = new User();

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(url: string, userName: string, password: string) {
        let userRequest = new User();
        userRequest.username = userName;
        userRequest.password = password;

        return this.http.post<any>(url, userRequest)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response

                if (user && user.accessToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                this.user = user;
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    setActiveLocation(user: User) {
        this.user = user;
        this.currentUserSubject.next(this.user);
    }
}

