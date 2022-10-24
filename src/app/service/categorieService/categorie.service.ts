import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from 'app/models/categorie';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  url = environment.url

  constructor(private  httpclient: HttpClient) { }


  GetAllCat(): Observable<Categorie> {
    return this.httpclient.get<Categorie>(this.url+"/AllCat");
  }

  // tslint:disable-next-line:no-shadowed-variable
  addcat(Categorie) {
    return this.httpclient.post(this.url+"/AddCat", Categorie); 
  }

  // tslint:disable-next-line:no-shadowed-variable
  Editcat(Categorie, id) {
    return this.httpclient.put(this.url+"/modify-Categorie/"+id, Categorie);
  }

  getcategorie(id): Observable<Categorie> {
    // @ts-ignore
    return this.httpclient.get(this.url+"/GetCat/"+id);
  }

  deleteCategorie(id): Observable<any> {
    return this.httpclient.delete(this.url+"/delete-Categorie/"+id);
  }
}
