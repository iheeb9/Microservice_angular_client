import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Review } from 'app/models/Review';
import { ReviewService } from 'app/service/reviewService/review.service';

@Component({
  selector: 'app-update-review',
  templateUrl: './update-review.component.html',
  styleUrls: ['./update-review.component.css']
})
export class UpdateReviewComponent implements OnInit {
  prodFile
  message
  imagePath
  imgURL

  id: any;
  review: Review ;


 
  constructor(private trotServ: ReviewService,
              private router: Router,
              private router1: ActivatedRoute) { }

      
editform = new FormGroup({
  titre: new FormControl(''),
  description: new FormControl('')

});
  ngOnInit(): void {
  

    this.router1.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.trotServ.get_Review_byid(this.id).subscribe(cat => {this.review = cat;
        console.log(this.review)
        })
    })
  }

  update( ) {
    const formData = new FormData() ;
      formData.append('Review', JSON.stringify(this.editform.value));
    formData.append('file', this.prodFile);
    // @ts-ignore
    
    this.trotServ.update_Review(formData, this.id)
        .subscribe(data => {
          window.location.href = '/admin/ListReview';
             })
  }



  onSelectFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.prodFile = file;
      // this.f['profile'].setValue(file);

      const mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }

      const reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
  }

  gotoList() {
   
  }

}
