import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string='';

  //1. create an event
  @Output()
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>();
  //2. emit the searchText
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText);
  }

  @ViewChild('searchInput') searchInputEl:ElementRef

  // setSearchText(inputEl:HTMLInputElement){
  setSearchText(){
    // console.log(inputEl.value);
    // this.searchText=inputEl.value;
    this.searchText=this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);

    
  }

}
