import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'app/models/Review';
import { ReviewService } from 'app/service/reviewService/review.service';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.css']
})
export class ShowReviewComponent implements OnInit {
  review: Review ;
  id:any
  post!: any ;
  constructor(private revser: ReviewService,    private router1: Router,
    private router: ActivatedRoute) { }

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
