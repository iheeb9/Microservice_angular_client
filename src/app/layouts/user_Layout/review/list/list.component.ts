import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from 'app/models/Review';
import { ReviewService } from 'app/service/reviewService/review.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  review!: any;
  key = ''
  constructor(public router: Router, private revser: ReviewService) { }

  ngOnInit(): void {
    this.revser.fetchReviews().subscribe(res => {this.review = res;
      console.log(res)
    })
  }
 

  goToEdit(id) {
    this.router.navigate(['admin/UpdateReview', id])
  }
  show(id) {
    this.router.navigate(['user/showReview', id])
  }
  deleteReview(rev: Review) {
    // @ts-ignore
    console.log(rev.id)
    this.revser.delete_Review(rev.id).subscribe(res => {console.log(res);
      this.router.navigate(['/admin/ListReview']);
      this.ngOnInit(); })
  }


}
