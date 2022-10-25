import { Association } from './../../../../models/association.model';
import { AssociationsService } from './../../../../service/associations/associations.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-association-details',
  templateUrl: './association-details.component.html',
  styleUrls: ['./association-details.component.css']
})
export class AssociationDetailsComponent implements OnInit {
  currentAssociation: Association = {
    nom: '',
  };
  message = '';

  constructor(
    private associationsService: AssociationsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getAssociation(this.route.snapshot.params.id);
  }

  getAssociation(id: string): void {
    this.associationsService.get(id)
      .subscribe(
        data => {
          this.currentAssociation = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentAssociation.nom
    };

    this.message = '';

    this.associationsService.update(this.currentAssociation.id, data)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This association was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateAssociation(): void {
    this.message = '';

    this.associationsService.update(this.currentAssociation.id, this.currentAssociation)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This association was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteAssociation(): void {
    this.associationsService.delete(this.currentAssociation.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/associations']);
        },
        error => {
          console.log(error);
        });
  }
}
