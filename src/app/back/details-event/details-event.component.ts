import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';
@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.css']
})
export class DetailsEventComponent implements OnInit {

  currentEvent: any;
  message = '';
  constructor(private service : EventsService,  private route: ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {
   
      this.message = '';
      this.getEvent(this.route.snapshot.paramMap.get('id'));
    
  }

  
  getEvent(id: string | null): void {
    this.service.getItem(id)
      .subscribe(
        (event: null) => {
          this.currentEvent = event;
          console.log(event);
        },
        (error: any) => {
          console.log(error);
        });
  }
  updateEvent(): void {
    this.service.update(this.currentEvent.id, this.currentEvent)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Event was updated!';
        },
        error => {
          console.log(error);
        });

        this.router.navigate(['events']);

  }

}
