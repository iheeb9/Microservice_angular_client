import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  event = {
    title: '',
    description: ''
  };
  isEventAdded = false;

  constructor(private service :EventsService) { }

  ngOnInit(): void {
  }

  addEvent(): void {
    const data = {
      title: this.event.title,
      description: this.event.description,
      image : ''
    };
    if (!data.title) {
      alert('Please add title!');
      return;
    }
    this.service.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.isEventAdded = true;
      },
      error => {
        console.log(error);
      });
}

// Reset on adding new
newBook(): void {
  this.isEventAdded = false;
  this.event = {
    title: '',
    description: ''
  };
}

}
