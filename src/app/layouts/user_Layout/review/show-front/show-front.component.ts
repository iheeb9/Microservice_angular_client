import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Review } from 'app/models/Review';
import { ReviewService } from 'app/service/reviewService/review.service';

@Component({
  selector: 'app-show-front',
  templateUrl: './show-front.component.html',
  styleUrls: ['./show-front.component.css']
})
export class ShowFrontComponent implements OnInit {
  review: Review ;
  id:any
  post!: any ;
  constructor(private revser: ReviewService,    private router1: Router,
    private router: ActivatedRoute) { }
    
    add(id) {
      this.router1.navigate(['user/AddPost', id])
    }
  ngOnInit(): void {
    this.router.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.revser.get_Review_byid(this.id).subscribe(cat => {this.review = cat;
        console.log(this.review)
        })
    })
    this.router.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.revser.get_review_post(this.id).subscribe(res => {this.post = res;
        console.log(this.post)
        })
    })
  }
  
  deleteReview(rev: Review) {
    // @ts-ignore
    console.log(rev.id)
    this.revser.delete_post(rev.id).subscribe(res => {console.log(res);
      this.router1.navigate(['/admin/ListReview']);
      this.ngOnInit(); })
  }


}