import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trottinette } from 'app/models/trottinette';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrottinetteService {
  url = environment.url

  constructor(private  httpclient: HttpClient) { }
  addProduit(formData: FormData) {
    return this.httpclient.post<Trottinette>(this.url + '/Addprod', formData);
  }

  GetAllProduits() {
  //  const params = new HttpParams()
        // .set('page', p.page)
        // .set('size', p.size)
      //  .set('recherche', p.recherche)
    return this.httpclient.get<Trottinette>(this.url + '/AllProd');
  }

  EditProduit(formData: FormData, id) {
    return this.httpclient.put<Trottinette>(this.url + '/modify-Produit/' + id, formData);
  }

  getProduit(id): Observable<Trottinette> {
    // @ts-ignore
    return this.httpclient.get<Trottinette>(this.url + '/retrieve-Produit/' + id);
  }

  deleteProduit(id): Observable<any> {
    return this.httpclient.delete(this.url + '/remove-Produit/' + id);
  }
}
