import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        let currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.accessToken}`
                }
            });

            return next.handle(request).pipe(catchError((error, caught) => {
                if (error.status === 401) {
                    this.authService.logout();
                    // this.notification.loadMessage('error', "Authentication expired", "Due to authentication expiry, you are redirected to login again. Sorry for the inconvenience caused.");
                    this.router.navigate(['/login']);
                    // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
                    return of(error.message);
                }
                return of(error);
            }),
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        const elapsed = Date.now() - started;
                        console.log(`Request for ${request.urlWithParams} took ${elapsed} ms.`);
                    }
                    return event;
                }));
        } else {
            return next.handle(request);
        }
    }
}