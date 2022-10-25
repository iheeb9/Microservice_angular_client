import { Association } from './../../models/association.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/associations';
//TODO

@Injectable({
  providedIn: 'root'
})
export class AssociationsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Association[]> {
    return this.http.get<Association[]>(`${baseUrl}/retrieve-all-association/`);
  }

  get(id: any): Observable<Association> {
    return this.http.get(`${baseUrl}/${id}`);
  }

 

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add-association/`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Association[]> {
    return this.http.get<Association[]>(`${baseUrl}?title=${title}`);
  }
}
