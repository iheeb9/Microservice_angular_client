import { Component, OnInit } from '@angular/core';
import {IDropdownSettings} from 'ng-multiselect-dropdown/multiselect.model';
import {Categorie} from '../../../../models/categorie';
import {FormControl, FormGroup} from '@angular/forms';
import {Trottinette} from '../../../../models/trottinette';
import {TrottinetteService} from '../../../../service/trottinetteService/trottinette.service';
import {CategorieService} from '../../../../service/categorieService/categorie.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-modifier-trottinette',
  templateUrl: './modifier-trottinette.component.html',
  styleUrls: ['./modifier-trottinette.component.css']
})
export class ModifierTrottinetteComponent implements OnInit {
  dropdownSettings: IDropdownSettings = {};
  cat!: Categorie;
  prodFile
  message
  imagePath
  imgURL

  id: any;
  trottinette: Trottinette ;


  ProduitForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    categorie: new FormControl('')

  });

  constructor(private trotServ: TrottinetteService,
              private router: Router,
              private router1: ActivatedRoute,
              private CategoriesService: CategorieService) { }

  ngOnInit(): void {
    this.dropdownSettings = {
      idField: 'idCategorie',
      textField: 'nomCategorie',
    };
    this.CategoriesService.GetAllCat().subscribe(
        x => this.cat = x,
        e => console.log(e),
    )

    this.router1.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.trotServ.getProduit(this.id).subscribe(cat => {this.trottinette = cat; })
    })
  }

  updateProduit( ) {
    const formData = new FormData() ;
    this.ProduitForm.value.categorie = this.ProduitForm.value.categorie[0]
    formData.append('trottinette', JSON.stringify(this.ProduitForm.value));
    formData.append('file', this.prodFile);
    // @ts-ignore
    
    this.trotServ.EditProduit(formData, this.id)
        .subscribe(data => {
          console.log('hhhhhhhhhh' , data);
          this.gotoList();
        })
  }


  submit1(f) {
    this.updateProduit();
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

  gotoList() {
    this.router.navigate(['/admin/ltrot']);
  }

}
