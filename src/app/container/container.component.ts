import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  // listOfString:string[]=['MArk','Merry','Shani','Manish'];
  searchText:string='';
  setSearchText(value:string){
    this.searchText = value;
  }

  @ViewChild(ProductListComponent) productListComponent:ProductListComponent
}
