import { AssociationsService } from '../../../../service/associations/associations.service';
import { Association } from '../../../../models/association.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associations-list',
  templateUrl: './associations-list.component.html',
  styleUrls: ['./associations-list.component.css']
})
export class AssociationsListComponent implements OnInit {
  associations?: Association[];
  currentAssociation?: Association;
  currentIndex = -1;
  nom = '';

  constructor(private AssociationsService: AssociationsService) { }

  ngOnInit(): void {
    this.retrieveAssociations();
  }

  retrieveAssociations(): void {
    this.AssociationsService.getAll()
      .subscribe(
        data => {
          this.associations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveAssociations();
    this.currentAssociation = undefined;
    this.currentIndex = -1;
  }

  setActiveAssociation(association: Association, index: number): void {
    this.currentAssociation = association;
    this.currentIndex = index;
  }

  removeAllAssociations(): void {
    this.AssociationsService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentAssociation = undefined;
    this.currentIndex = -1;

    this.AssociationsService.findByTitle(this.nom)
      .subscribe(
        data => {
          this.associations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
