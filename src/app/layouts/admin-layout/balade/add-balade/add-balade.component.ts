import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BaladeserviceService } from 'app/service/baladeservice/baladeservice.service';
import { myoastrService } from 'app/service/toastr/mytoastr.service';

@Component({
  selector: 'app-add-balade',
  templateUrl: './add-balade.component.html',
  styleUrls: ['./add-balade.component.css']
})
export class AddBaladeComponent implements OnInit {
  baladeForm=new FormGroup({
    titre: new FormControl(null, Validators.required ),
    description: new FormControl(null, Validators.required ),
    nombre: new FormControl(null, Validators.required ),
    prix: new FormControl(null, Validators.required ),
    distance: new FormControl(null, Validators.required ),
    guide_accompagnateur: new FormControl(null, Validators.required ),
    disponible: new FormControl(null, Validators.required ),
  })
  constructor(private baladeservice:BaladeserviceService,private router:Router,private toastr:myoastrService) { }

  ngOnInit(): void {
  }


  send(){
    if (this.baladeForm.invalid)
    return
    else{
  this.baladeservice.add_balade_or_update(this.baladeForm.value).subscribe(
    x=>console.log(x),
    e=>console.log(e),
    ()=>{this.router.navigate(['admin/list_balade'])
    this.toastr.showNotification("top","right",2,"ajouter","avec succès",".......")
   this.baladeForm.reset()
  })
  }}

}
