import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { balade } from 'app/models/balade';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaladeserviceService {
  Login_url=environment.url
  constructor(private http:HttpClient) { }



  get_all_balade(o:any){
    const params = new HttpParams()
    .set('page', o.page)
    .set('size', o.size)
    .set('search', o.search)
    return this.http.get<balade[]>(this.Login_url+'get_balade',{params});
  }
  add_balade(balade:balade){
    return this.http.post (this.Login_url+'add_balade',balade);

  }
}
