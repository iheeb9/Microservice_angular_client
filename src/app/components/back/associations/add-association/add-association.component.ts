import { AssociationsService } from './../../../../service/associations/associations.service';
import { Association } from './../../../../models/association.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-association',
  templateUrl: './add-association.component.html',
  styleUrls: ['./add-association.component.css']
})
export class AddAssociationComponent implements OnInit {
  association: Association = {
    nom: ''
  };
  submitted = false;

  constructor(private associationService: AssociationsService) { }

  ngOnInit(): void {
  }

  saveAssociation(): void {
    const data = {
      nom: this.association.nom
    };

    this.associationService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newAssociation(): void {
    this.submitted = false;
    this.association = {
      nom: ''
    };
  }

}
