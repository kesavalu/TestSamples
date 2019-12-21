import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BaseHttpService {

  constructor(private http: HttpClient) { }

  /**
    * Common HTTP Post method for all API request
    * @param url 
    * @param object 
    * @returns json response
    */
  post(url: string, object?: any): Observable<any> {
    return this.http.post(url, object).pipe(retry(3), catchError(this.handleError), map((response: Response) => response));
  }

  /**
   * Common HTTP GET method for all API request
   * @param url 
   * @returns json response
   */
  get(url: string, object?: any): Observable<any> {
    return this.http.get(url, { params: object }).pipe(retry(3), catchError(this.handleError), map((response: Response) => response));
  }

  upload(url: string, formData: any): Observable<any> {
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }
  download(url: string, object?: any): Observable<any> {
    return this.http.post(url, object, {
      responseType: "blob",
     // headers: new HttpHeaders().append("Content-Type", "application/octet-stream")
    });
  }

  /**
  * Common HTTP Exception Handler
  * @param error
  * @returns error
  */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened. Please try again later.');
  };
}