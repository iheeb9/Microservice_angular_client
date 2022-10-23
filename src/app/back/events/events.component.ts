import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  events : any[]
  constructor(private service : EventsService) { }

  ngOnInit(): void {

   this.findAll();
  }

  findAll()
  {
    this.service.findAll()
    .subscribe(
      data =>{
        this.events = data;
        console.log(data)
      },
      (error: any) => {
        console.log(error);
      });
  }
  onDelete(id : number)
  {
    this.service.delete(id)
    .subscribe(
      response => {
        this.findAll();
      },
      error => {
        console.log(error);
      });
  }

}
