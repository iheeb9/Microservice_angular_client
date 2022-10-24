import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from 'app/service/location/location.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '../model/Location';
import { LocationDTO } from '../model/LocationDTO';
import { TrottinetteLocation } from '../model/TrottinetteLocation';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent implements OnInit {

  listTrottinette: TrottinetteLocation[] = [];
  locationLast: Location;
  UpdateLocationForm = new FormGroup({
    id: new FormControl(null, Validators.required),
    dateStart: new FormControl(null, Validators.required),
    dateEnd: new FormControl(null, Validators.required),
    user: new FormControl(null, Validators.required),
    trottinette: new FormControl(null, Validators.required),
  });
  location: LocationDTO = {
    dateEnd: new Date(),
    dateStart: new Date(),
    trottinetteId: 0,
    userId: 0,
  };
  constructor(private locationservice: LocationService ,private route: ActivatedRoute , private toastr: ToastrService ,private router: Router ) {
    const locationId = this.route.snapshot.paramMap.get('id');
locationservice.getLocation(locationId).subscribe(res=>{
    this.locationLast=res;
    this.UpdateLocationForm.controls.dateStart.patchValue(res.dateStart);
    this.UpdateLocationForm.controls.dateEnd.patchValue(res.dateEnd);
    this.UpdateLocationForm.controls.user.patchValue(res.trottinette.name);
});
locationservice.getListTrottinette().subscribe(value => {
  this.listTrottinette = value;
  value.forEach(value2 => {
    if (value2.name === this.locationLast.trottinette.name) {
      this.UpdateLocationForm.controls.trottinette.patchValue(value2.name);
    }
  });
});
   }

  ngOnInit(): void {
    


  }
  getTrottinette(obj: any) {
    console.log(obj);
  }
  showNotification() {
    if (this.UpdateLocationForm.value.dateEnd < this.UpdateLocationForm.value.dateStart) {
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> The end date<b> cannot be before</b> the start date!', '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-bottom-center'
      });
    }
    else if (!this.UpdateLocationForm.value.dateStart) {
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> The satrt date<b> is required !</b>', '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-bottom-center'
      });
    }
    else if (!this.UpdateLocationForm.value.dateEnd) {
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> The end date<b> is required !</b>', '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-bottom-center'
      });
    }
    else if (!this.UpdateLocationForm.value.trottinette) {
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span>  Trottinette <b> is required !</b>', '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-bottom-center'
      });
    }
    else if (!this.UpdateLocationForm.value.user) {
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> User<b> is required !</b>', '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-bottom-center'
      });
    }
    else {
      this.location.userId = this.UpdateLocationForm.value.user;
      this.location.trottinetteId = this.UpdateLocationForm.value.trottinette;
      this.location.dateStart = this.UpdateLocationForm.value.dateStart;
      this.location.dateEnd = this.UpdateLocationForm.value.dateEnd;
      console.log(this.location);
      this.locationservice.updateLocation(this.route.snapshot.paramMap.get('id'),this.location).subscribe(res => {
        this.router.navigate(['admin/location']);
      });
    }
  }
}
