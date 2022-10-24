import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from 'app/models/Review';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
 url=environment.url
  constructor(private http:HttpClient) { }
    
fetchReviews(){
  return this.http.get<Review>('http://localhost:8083/Trotti/AllReview');
}

add_Review(formData: FormData){
  return this.http.post ('http://localhost:8083/Trotti/AddReview',formData);
}

add_Post(post:any,id:number){
  return this.http.post ('http://localhost:8083/Trotti/AddPost/'+id,post);
}
update_Review(Review:Review,id:number){
  return this.http.put ('http://localhost:8083/Trotti/modify-Review/'+id,Review);
}

 get_Review_byid(id:number){
return this.http.get<Review> ('http://localhost:8083/Trotti/retrieve-Review/'+id);

}
delete_Review(id:number){
return this.http.delete<Review> ('http://localhost:8083/Trotti/remove-Review/'+id);

}
delete_post(id:number){
  return this.http.delete<Review> ('http://localhost:8083/Trotti/delete-Post/'+id);
  
  }
get_review_post(id:number){
  return this.http.get<Review> ('http://localhost:8083/Trotti/AllPostRev/'+id);
  
  }


}
