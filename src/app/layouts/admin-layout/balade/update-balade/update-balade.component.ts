import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { balade } from 'app/models/balade';
import { BaladeserviceService } from 'app/service/baladeservice/baladeservice.service';
import { myoastrService } from 'app/service/toastr/mytoastr.service';

@Component({
  selector: 'app-update-balade',
  templateUrl: './update-balade.component.html',
  styleUrls: ['./update-balade.component.css']
})
export class UpdateBaladeComponent implements OnInit {
  balade:balade
  baladeForm=new FormGroup({
    id: new FormControl(null, Validators.required ),
    titre: new FormControl(null, Validators.required ),
    description: new FormControl(null, Validators.required ),
    nombre: new FormControl(null, Validators.required ),
    prix: new FormControl(null, Validators.required ),
    distance: new FormControl(null, Validators.required ),
    guide_accompagnateur: new FormControl(null, Validators.required ),
    disponible: new FormControl(null, Validators.required ),
  })
  constructor(private baladeservice:BaladeserviceService,private router:Router,private toastr:myoastrService, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    let baladeid =this.ac.snapshot.params['idbalade'];
    console.log(baladeid)
    this.baladeservice.get_balade_byid(baladeid).subscribe(
      (data)=>{
        this.balade=data;
        this.baladeForm.patchValue(data);
        console.log(data)
      })
  }

  
  send(){
    if (this.baladeForm.invalid)
    return
    else{
  this.baladeservice.add_balade_or_update(this.baladeForm.value).subscribe(
    x=>console.log(x),
    e=>console.log(e),
    ()=>{this.router.navigate(['admin/list_balade'])
    this.toastr.showNotification("top","right",2,"modifier","avec succès",".......")
   this.baladeForm.reset()
  })
  console.log(this.baladeForm.value)
}}
}
