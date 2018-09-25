import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  

  constructor(private _httpService: HttpService) { }
  allDogsWithRecipes: any;
  search: any;

  ngOnInit() {
    this.search = {searchbar: ""};
    this.showAllRecipes();
  }

  showAllRecipes(){
    this._httpService.allRecipes().subscribe(data => {
      this.allDogsWithRecipes = data;
      console.log("getting all dogs with food", data);
    })
  }

  searchRecipes(){
    this._httpService.searchRecipes(this.search).subscribe(data => {
      console.log(data);
      this.allDogsWithRecipes = data;
    })
  }

  



}
