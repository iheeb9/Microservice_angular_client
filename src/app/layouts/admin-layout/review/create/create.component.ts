import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Review } from 'app/models/Review';
import { ReviewService } from 'app/service/reviewService/review.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  cat: any;
  revFile
  message
  imagePath
  imgURL

  review: Review ;

  constructor(private revser: ReviewService,
    private router: Router) { }
  get f(){return this.editForm.controls} 
  
  submit() {
    if (this.editForm.valid) {
      const formData = new FormData() ;
      console.log(this.userFile)
      formData.append('file', this.userFile);
      formData.append('Review', JSON.stringify(this.editForm.value)); 
      this.revser.add_Review(formData).subscribe((
        res => this.router.navigateByUrl('/admin/ListReview')
      ));


  }

}
userFile=null;
onSelectFile(event) {
  if (event.target.files.length > 0)
  {
    const file = event.target.files[0];
    this.userFile = file;
   // this.f['profile'].setValue(file);

  var mimeType = event.target.files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  
  this.imagePath = file;
  reader.readAsDataURL(file); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}
}
  editForm:any
  ngOnInit(): void {
    this.editForm=new FormGroup({
      titre:new FormControl("",[Validators.required]),
      description:new FormControl("",[Validators.required]),
       image:new FormControl("")
     });
  }

}