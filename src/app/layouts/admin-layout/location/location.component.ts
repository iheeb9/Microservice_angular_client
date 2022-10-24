import { Component, OnInit } from '@angular/core';
import { LocationService } from 'app/service/location/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  ListLocation: Location[];
  pageSize=5;
  page=1;
  collectionSize:number

  constructor(private locationservice : LocationService ) {
    this.getLocation({ page: 0, size: 5})

   }

  ngOnInit(): void {
}

getLocation(request){
  this.locationservice.getListLocation(request).subscribe(value => {
    this.ListLocation=value;
    this.collectionSize=value[0].totalElement;
});
}
nextPage(event:any){
  const request = {};
  request['page'] = event-1
  request['size'] = this.pageSize
  this.getLocation(request);
}
delete(id:string){
  console.log("hi")
  console.log(id)

  this.locationservice.deleteLocation(id).subscribe(value => {
    this.getLocation({ page: 0, size: 5})
  });

}
}
