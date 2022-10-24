import { Component, OnInit } from '@angular/core';
import {TrottinetteService} from '../../../../service/trottinetteService/trottinette.service';
import {Router} from '@angular/router';
import {Trottinette} from '../../../../models/trottinette';

@Component({
  selector: 'app-list-trottinette',
  templateUrl: './list-trottinette.component.html',
  styleUrls: ['./list-trottinette.component.css']
})
export class ListTrottinetteComponent implements OnInit {
  trottinette!: any;
  key = ''
  constructor(public router: Router, private trotSer: TrottinetteService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  goTaAddproduct() {
    this.router.navigate(['admin/atrot']);
  }

  getAllProducts() {
    this.trotSer.GetAllProduits().subscribe(res => {this.trottinette = res;
      console.log(res)
    })
  }

  goToEdit(id) {
    this.router.navigate(['admin/utrot', id])
  }
  deleteProduct(trot: Trottinette) {
    // @ts-ignore
    this.trotSer.deleteProduit(trot.id).subscribe(res => {console.log(res);
      this.router.navigate(['/admin/ltrot']);
      this.getAllProducts(); })
  }
  goToProductItem(id) {
    this.router.navigate(['admin/Products/detailsProduct', id])
  }
}
