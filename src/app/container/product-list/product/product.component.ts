import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  prod:Product;
  // prod:{
  //   id:number,
  //   name:string,
  //   price:number,
  //   description:string,
  //   brand:string,
  //   category:string,
  //   size:number[],
  //   color:string[],
  //   gender:string,
  //   discountPrice?:number,
  //   is_in_inventory:boolean,
  //   items_left:number,
  //   imageURL:string,
  //   slug:string
  // }
}
