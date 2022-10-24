import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'app/models/categorie';
import { CategorieService } from 'app/service/categorieService/categorie.service';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent implements OnInit {

    categorie !: Categorie ;
  CategorieForm = new FormGroup({
    nomCategorie: new FormControl(''),
  });
  constructor(private catse: CategorieService, private router: Router,) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.CategorieForm.valid) {
      this.catse.addcat(this.CategorieForm.value).subscribe((res => {
       // this.router.navigateByUrl('/admin/Categories')
      }));
    } 

  }

}
