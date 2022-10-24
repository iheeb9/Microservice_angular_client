import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'app/models/Review';
import { ReviewService } from 'app/service/reviewService/review.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  cat: any;
  revFile
  message
  imagePath
  imgURL
id
  review: Review ;

  constructor(private revser: ReviewService,
    private router: ActivatedRoute, private r:Router) { }
  get f(){return this.editForm.controls} 
  
  submit() {
    if (this.editForm.valid) {
       this.router.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      const article= this.editForm.value
      console.log(article)
      this.revser.add_Post(article,this.id).subscribe((
        res => this.r.navigateByUrl('/user/showReview/'+this.id)
      ));
    })
  
     


  }

}

  editForm:any
  ngOnInit(): void {
    this.editForm=new FormGroup({
      commentaire:new FormControl("",[Validators.required]),
      subject:new FormControl("",[Validators.required]) 
     });
  }

}