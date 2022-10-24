import { Component, OnInit } from '@angular/core';
import { balade } from 'app/models/balade';
import { BaladeserviceService } from 'app/service/baladeservice/baladeservice.service';

@Component({
  selector: 'app-all-balade',
  templateUrl: './all-balade.component.html',
  styleUrls: ['./all-balade.component.css']
})
export class AllBaladeComponent implements OnInit {
  listbalade:balade[]
  key:string=""
  //totalElements: number = 0;
  pageSize=5
  page=1
  collectionSize:number
  constructor(private baladeservice:BaladeserviceService) { }
  
  ngOnInit(): void {

    this.getbalade({ page: 0, size: 5,search:this.key })

}

  getbalade(request){
    this.baladeservice.get_all_balade(request).subscribe(
    
      data=>{this.listbalade=data['content']
      this.collectionSize=data['totalElements'];
      console.log(data)
    },
    e=>console.log(e)
    )
  }
  nextPage(event:any){
    const request = {};
    request['page'] = event-1
    request['size'] = this.pageSize
    request['search']=this.key
    this.getbalade(request);
  }
  search(event){
    this.key=event
    const request = {};
    request['page'] = 0
    request['size'] = this.pageSize
    this.page=0
    request['search']=this.key
    this.getbalade(request);
  
  }
}
