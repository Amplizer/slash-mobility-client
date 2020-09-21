import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-buy',
  templateUrl: './product-buy.component.html',
  styleUrls: ['./product-buy.component.sass'],
  encapsulation: ViewEncapsulation.None
})

export class ProductBuyComponent implements OnInit {

  constructor( ) { }

    // Accept buying a product
    buyProduct(){
      document.querySelector("app-product-buy").classList.remove("app-product-buy");
      document.querySelector("app-product-buy").classList.add("product-buy-modal-dialog-hidden");
    }
  
    // Cancel buying a product
    cancelBuyProduct(){
      document.querySelector("app-product-buy").classList.remove("app-product-buy");
      document.querySelector("app-product-buy").classList.add("product-buy-modal-dialog-hidden");
    }

  ngOnInit() {
    
   }

}
