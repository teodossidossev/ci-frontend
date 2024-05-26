import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:8080/message';

  constructor(private http: HttpClient) { }

  getMessage(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(error => {
            console.log(error)
          throw 'error in getting message: ' + error.message;
        })
      );
  }

  createMessage(message: { id: string; content: string }): Observable<any> {
    return this.http.post(this.baseUrl, message)
      .pipe(
        catchError(error => {
          console.log(error)
          throw 'error in creating message: ' + error;
        })
      );
  }

  updateMessage(message: { id: string; content: string }): Observable<any> {
    return this.http.put(this.baseUrl, message)
      .pipe(
        catchError(error => {
          throw 'error in updating message: ' + error;
        })
      );
  }
}
