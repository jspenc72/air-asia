import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private ENDPOINT = "/user";
  private OAUTH_TOKEN_ENDPOINT = "/login";
  private REST_API_SERVER = "http://localhost:8000";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){
    return this.httpClient.get(this.ENDPOINT).pipe(retry(3), catchError(this.handleError));
  }
  public sendLoginRequest(form: any){

    // form.grant_type = "password";
    // form.client_id = "2";
    // form.client_secret = "3mESlSWt5dBjxQta7G5LMi5NcOvadZOsgN3IiLaS";
    // form.scope = "*";
    console.log(form)
    return this.httpClient.post<any>(this.REST_API_SERVER+this.OAUTH_TOKEN_ENDPOINT, form, httpOptions).pipe(
      tap((c: any) => console.log(`/oauth/token ${c}`)),
      catchError(this.handleError)
    );    
  }
}
