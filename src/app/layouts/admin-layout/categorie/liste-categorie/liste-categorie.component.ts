import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'app/models/categorie';
import { CategorieService } from 'app/service/categorieService/categorie.service';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.css']
})
export class ListeCategorieComponent implements OnInit {

  cats !: Categorie;

  constructor(private catSer: CategorieService,
     private router: Router) { }

  ngOnInit(): void {
    this.getAllcategories();
  }
  
  getAllcategories() {
    this.catSer.GetAllCat().subscribe((res) => {this.cats = res;
      console.log(res)
    })
  }

  goToAdd() {
    this.router.navigate(['admin/Categories/AddCategorie'])
  }

  goToEdit(id: any) {
    this.router.navigate(['/admin/ucat/', id])
  }

  deleteCategorie(cat: Categorie) {
    this.catSer.deleteCategorie(cat.idCategorie).subscribe(res => {console.log(res);
      this.router.navigate(['/admin/lcat']);
      this.getAllcategories(); })
  }

}
