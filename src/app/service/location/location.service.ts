import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocationDTO } from 'app/layouts/admin-layout/location/model/LocationDTO';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

import { LoginService } from '../loginService/login.service';

@Injectable({
  providedIn: 'root'
})

export class LocationService {
  private serverURL=environment.serveur;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
    constructor( private LoginService:LoginService, private router :Router,private http: HttpClient) 
  {
    console.log(this.serverURL);
    const token=localStorage.getItem('token')
    this._isLoggedIn$.next(!!token)
  }
 
  getListLocation(o:any): Observable<any> {
    const params = new HttpParams()
    .set('page', o.page)
    .set('limit', o.size)
    return this.http.get<any>(this.serverURL + '/listLocation',{params});
  }

  getListTrottinette():Observable<any> {
    return this.http.get<any>(this.serverURL + '/location_listTrottinettes');
  }
  
  addLocation(location:LocationDTO):Observable<any> {
    return this.http.post<any>(this.serverURL,location);

  }
  updateLocation(id:string,location:LocationDTO):Observable<any> {
    return this.http.put<any>(this.serverURL+'/'+ id,location);

  }
  getLocation(id:string):Observable<any> {
    return this.http.get<any>(this.serverURL +'/'+ id);
  }

  deleteLocation(id:string):Observable<any> {
    return this.http.delete<any>(this.serverURL +'/'+ id);
  }

}
