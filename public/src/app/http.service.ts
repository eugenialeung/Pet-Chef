import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // saved_search: any;

  constructor(private _http: HttpClient) { }

  // retrieveSearch(){
  //   return this.saved_search;
  // }
  allRecipes(){
    return this._http.get('api/recipe/show');
  }
  searchRecipes(search: any){
    // this.saved_search = search;
    return this._http.post('api/recipe/search', search);
  }
  addDog(dog: any){
    return this._http.post('api/dog', dog);
  }
  singleDog(id: string){
    return this._http.get(`api/dog/${id}`)
  }
  updateDog(dog: any){
    return this._http.put(`api/dog/${dog._id}`, dog);
  }
  makeFood(food: any){
    return this._http.post('api/recipe', food);
  }
  updateFood(recipe: any, food:any){
    return this._http.post(`api/recipe/${recipe._id}`, food)
  }
  getSelectedFoods(fid: string){
    return this._http.get(`api/recipe/${fid}`);
  }
  removeFood(recipe: any, fid: string){
    return this._http.put(`api/recipe/${fid}`, recipe);
  }
  // addFoodToDog(recipe, ounces, calories){
  //   return this._http.post(`api/dog/addRecipe/${ounces}/${calories}`, {recipe:recipe});
  // }
  getBreeds(){
    return this._http.get('https://dog.ceo/api/breeds/list/all');
  }
  getFoods(){
    return this._http.get('https://api.nal.usda.gov/ndb/V2/reports?ndbno=45183902&ndbno=10199&ndbno=05332&ndbno=05665&ndbno=05023&ndbno=05025&ndbno=13325&ndbno=15130&ndbno=15236&ndbno=01140&ndbno=01123&ndbno=01118&ndbno=11508&ndbno=04047&ndbno=11091&ndbno=11125&ndbno=11234&ndbno=11458&ndbno=11305&ndbno=09004&ndbno=09050&ndbno=11081&ndbno=12220&ndbno=12006&ndbno=12012&type=f&format=json&api_key=s69vNdSmputLCwlVwDthJGuKamb9g8BrvNsrHtCM&location=Denver+CO');
  }
  getFoodById(id: string){
    return this._http.get(`https://api.nal.usda.gov/ndb/V2/reports?ndbno=${id}&type=f&format=json&api_key=s69vNdSmputLCwlVwDthJGuKamb9g8BrvNsrHtCM&location=Denver+CO`);
  }
  addRecipeToDog(recipe){
    return this._http.post('api/dog/addRecipeToDog/',{recipe:recipe})
  }
  


}
