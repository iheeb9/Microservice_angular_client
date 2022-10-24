import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from 'app/service/location/location.service';
import { ToastrService } from 'ngx-toastr';
import { LocationDTO } from '../model/LocationDTO';
import { TrottinetteLocation } from '../model/TrottinetteLocation';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  LocationForm = new FormGroup({
    dateStart: new FormControl(null, Validators.required),
    dateEnd: new FormControl(null, Validators.required),
    user: new FormControl(null, Validators.required),
    trottinette: new FormControl(null, Validators.required),
  });
  listTrottinette: TrottinetteLocation[] = [];

  location: LocationDTO = {
    dateEnd: new Date(),
    dateStart: new Date(),
    trottinetteId: 0,
    userId: 0,
  };

  get f() { return this.LocationForm.controls; }

  constructor(private locationservice: LocationService, private router: Router, private toastr: ToastrService) {
    locationservice.getListTrottinette().subscribe(value => {
      this.listTrottinette = value;
    });
  }

  ngOnInit(): void {
  }

  getTrottinette(obj: any) {
    console.log(obj);
  }

  showNotification() {
    if (this.LocationForm.value.dateEnd < this.LocationForm.value.dateStart) {
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> The end date<b> cannot be before</b> the start date!', '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-bottom-center'
      });
    }
    else if (!this.LocationForm.value.dateStart) {
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> The satrt date<b> is required !</b>', '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-bottom-center'
      });
    }
    else if (!this.LocationForm.value.dateEnd) {
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> The end date<b> is required !</b>', '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-bottom-center'
      });
    }
    else if (!this.LocationForm.value.trottinette) {
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span>  Trottinette <b> is required !</b>', '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-bottom-center'
      });
    }
    else if (!this.LocationForm.value.user) {
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> User<b> is required !</b>', '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-bottom-center'
      });
    }
    else {
      this.location.userId = this.LocationForm.value.user;
      this.location.trottinetteId = this.LocationForm.value.trottinette;
      this.location.dateStart = this.LocationForm.value.dateStart;
      this.location.dateEnd = this.LocationForm.value.dateEnd;
      console.log(this.location);
      this.locationservice.addLocation(this.location).subscribe(res => {
        this.router.navigate(['admin/location']);
      });
    }
  }

}
