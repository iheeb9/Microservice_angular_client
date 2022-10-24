import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Categorie } from 'app/models/categorie';
import { CategorieService } from 'app/service/categorieService/categorie.service';

@Component({
  selector: 'app-modifier-categorie',
  templateUrl: './modifier-categorie.component.html',
  styleUrls: ['./modifier-categorie.component.css']
})
export class ModifierCategorieComponent implements OnInit {

  id: any;
  cat: any ;
  CategorieForm = new FormGroup({
    nomCategorie: new FormControl(''),
  });
  constructor(private categorieService: CategorieService , private router: Router,
    private router1: ActivatedRoute,) { }

  ngOnInit(): void {
    this.router1.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.categorieService.getcategorie(this.id).subscribe(cat => {this.cat = cat; })
  })
  }
  updateCategorie( ) {
    this.categorieService.Editcat(this.cat, this.id)
        .subscribe(data => {
          console.log(data);
          this.cat = new Categorie();
          this.gotoList();
        })
  }

  submit(f) {
    this.updateCategorie();
  }

  gotoList() {
    this.router.navigate(['/admin/lcat']);
  }
}
