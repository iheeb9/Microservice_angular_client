import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { balade } from 'app/models/balade';
import { BaladeserviceService } from 'app/service/baladeservice/baladeservice.service';
import { myoastrService } from 'app/service/toastr/mytoastr.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-balade',
  templateUrl: './detail-balade.component.html',
  styleUrls: ['./detail-balade.component.css']
})
export class DetailBaladeComponent implements OnInit {
  balade:balade
  bike
  baladeid
  constructor(private baladeservice:BaladeserviceService,private router:Router,private ac:ActivatedRoute,private toastr :myoastrService) { }

  ngOnInit(): void {
    this.baladeid =this.ac.snapshot.params['idbalade'];
    this.baladeservice.get_balade_byid(this.baladeid).subscribe(
      (data)=>{
        this.balade=data;
        console.log(data)
      })
  }


reserver(){
  console.log(this.bike,this.baladeid)
  this.baladeservice.add_participations(this.bike,this.baladeid).subscribe(x=>{
    console.log(x)
    this.toastr.showNotification("top","right",2,"reservé","avec succès",".......")
    this.router.navigate(['user/listbalade'])
  }
    )

}}

