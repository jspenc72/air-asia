import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { GiftCard } from '../models/gift-card.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GiftCardService {
  private ENDPOINT = "/gift-cards";
  private REST_API_SERVER = "http://localhost:8000/api";

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
}
