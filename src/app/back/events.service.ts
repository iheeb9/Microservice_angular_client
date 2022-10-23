import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//header

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  private eventUrl: string;

  constructor(private http: HttpClient) {
    this.eventUrl = 'http://localhost:9090/api';

  }

  /********************************* get all events  /*********************************/
  public findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.eventUrl + '/events');
  }

  /********************************* get event by id  /*********************************/
  getItem(id: any): Observable<any> {
    return this.http.get(this.eventUrl+'/event/'+id).pipe(
      catchError(this.handleError)
    );
  }
  /********************************* add event   /*********************************/
  create(data: any): Observable<any> {
    return this.http.post(this.eventUrl + '/event', data).pipe(
      catchError(this.handleError)
    );
  }

  /********************************* edit event   /*********************************/
  update(id: any, data: any): Observable<any> {
    return this.http.put(this.eventUrl + '/event/' + id, data).pipe(
      catchError(this.handleError)
    );
  }

  /********************************* delete event   /*********************************/
  delete(id: any): Observable<any> {
    return this.http.delete(this.eventUrl+'/event/'+id).pipe(
      catchError(this.handleError)
    );
  }


  public save(event: any) {
    return this.http.post<any>(this.eventUrl, event);
  }


  //handle error function 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
