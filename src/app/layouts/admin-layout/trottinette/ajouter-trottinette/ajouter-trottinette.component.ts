import { TrottinetteService } from './../../../../service/trottinetteService/trottinette.service';
import { Trottinette } from './../../../../models/trottinette';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Categorie } from 'app/models/categorie';
import { Router } from '@angular/router';
import { CategorieService } from 'app/service/categorieService/categorie.service';
import {IDropdownSettings} from 'ng-multiselect-dropdown/multiselect.model';


@Component({
  selector: 'app-ajouter-trottinette',
  templateUrl: './ajouter-trottinette.component.html',
  styleUrls: ['./ajouter-trottinette.component.css']
})
export class AjouterTrottinetteComponent implements OnInit {
  dropdownSettings: IDropdownSettings = {};
  cat: any;
  prodFile
  message
  imagePath
  imgURL

  trottinette: Trottinette ;

    ProduitForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      categorie: new FormControl('')

  });
  constructor(private trotSer: TrottinetteService,
     private router: Router,
    private CategoriesService: CategorieService
    ) { }

  ngOnInit(): void {
    this.dropdownSettings = {
      idField: 'idCategorie',
      textField: 'nomCategorie',
    };
    this.CategoriesService.GetAllCat().subscribe(
        x => this.cat = x,
        e => console.log(e),
     )
  }

  submit() {
    if (this.ProduitForm.valid) {
      const formData = new FormData() ;
      this.ProduitForm.value.categorie = this.ProduitForm.value.categorie[0]
      formData.append('trottinette', JSON.stringify(this.ProduitForm.value));
      formData.append('file', this.prodFile);
      this.trotSer.addProduit(formData).subscribe((res => this.router.navigateByUrl('/admin/ltrot')));
      console.log(this.ProduitForm.value);

  }

}

onSelectFile(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.prodFile = file;
    // this.f['profile'].setValue(file);

    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();

    this.imagePath = file;
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
}

}
