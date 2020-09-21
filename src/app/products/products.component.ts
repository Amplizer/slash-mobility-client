import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  
  products = []

  // HTMLElement of modal to manipulate
  productBuyModal = window.document.querySelector("app-product-buy");

  constructor( private renderer: Renderer2 ) { }

  // Show modal to buy a product
  buyProductShowModal(){
    this.productBuyModal.classList.add("app-product-buy")
    this.productBuyModal.classList.remove("product-buy-modal-dialog-hidden")
  }

  // -------- Utils functions --------

  // Close modal if is showing
  utilCloseModal(){
    document.querySelector(".product-buy-modal-backdrop").remove();
    document.querySelector(".product-buy-modal").remove();
  }

  // Used to instanciate an image on view
  utilGetSrc( product ){
      return "url('" + product.productView.httpProtocol + "://" + product.productView.host + ":" + product.productView.port + "/" +  product.productView.imgSrcFolder + "/" + product.productView.img + "')";
  }

    // ------------------------------

  ngOnInit() {

    // products contains metadata used to personalize views and get performance
    this.products = [
      {
        name : "Nutela",
        price : 10,
        countryCurrency : { code : "EUR", alias : "€" },
        productView : {
          httpProtocol : "http",
          host : "localhost",
          port : 4200,
          imgSrcFolder : "assets/imgs",
          img : "chocolate.jpg"
        }
      },
      {
        name : "Nutela",
        price : 10,
        countryCurrency : { code : "EUR", alias : "€" },
        productView : {
          httpProtocol : "http",
          host : "localhost",
          port : 4200,
          imgSrcFolder : "assets/imgs",
          img : "chocolate.jpg"
        }
      },
      {
        name : "Nutela",
        price : 10,
        countryCurrency : { code : "EUR", alias : "€" },
        productView : {
          httpProtocol : "http",
          host : "localhost",
          port : 4200,
          imgSrcFolder : "assets/imgs",
          img : "chocolate.jpg"
        }
      },
      {
        name : "Nutela",
        price : 10,
        countryCurrency : { code : "EUR", alias : "€" },
        productView : {
          httpProtocol : "http",
          host : "localhost",
          port : 4200,
          imgSrcFolder : "assets/imgs",
          img : "chocolate.jpg"
        }
      },
      {
        name : "Nutela",
        price : 10,
        countryCurrency : { code : "EUR", alias : "€" },
        productView : {
          httpProtocol : "http",
          host : "localhost",
          port : 4200,
          imgSrcFolder : "assets/imgs",
          img : "chocolate.jpg"
        }
      },
      {
        name : "Nutela",
        price : 10,
        countryCurrency : { code : "EUR", alias : "€" },
        productView : {
          httpProtocol : "http",
          host : "localhost",
          port : 4200,
          imgSrcFolder : "assets/imgs",
          img : "chocolate.jpg"
        }
      },
      {
        name : "Nutela",
        price : 10,
        countryCurrency : { code : "EUR", alias : "€" },
        productView : {
          httpProtocol : "http",
          host : "localhost",
          port : 4200,
          imgSrcFolder : "assets/imgs",
          img : "chocolate.jpg"
        }
      },
      {
        name : "Nutela",
        price : 10,
        countryCurrency : { code : "EUR", alias : "€" },
        productView : {
          httpProtocol : "http",
          host : "localhost",
          port : 4200,
          imgSrcFolder : "assets/imgs",
          img : "chocolate.jpg"
        }
      }
    ];
  }

}
