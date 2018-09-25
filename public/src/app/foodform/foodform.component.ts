import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { FunctionCall } from '@angular/compiler';


@Component({
  selector: 'app-foodform',
  templateUrl: './foodform.component.html',
  styleUrls: ['./foodform.component.css']
})
export class FoodformComponent implements OnInit {
  @Input() foodIntake: number;
  @Input() newDog: any;
  foodArray:any[];
  @Input() calorieIntake: number;
  newFood: any [];
  weight: any;
  count: number = 0;
  completedFoodForm: boolean;

  recipeounce: number = 0;
  recipecalories: number = 0;
  recipeprotein: number = 0;
  recipecarbs: number = 0;
  recipefats: number = 0;
  recipevitaminE: number = 0;
  recipevitaminD: number = 0;
  recipezinc: number = 0;
  recipecopper: number = 0;
  recipecalcium: number = 0;






  constructor(private _httpService: HttpService, private _router: Router) { }
  // newRecipe: {};
  currentFood: any;
  allSources: any;
  currentRecipe: any;
  selectedFood:any;
  

  

  ngOnInit() {
    this.newFood = [];
    this.weight = {};
    this.completedFoodForm = false;





    // this.hello();

    this._httpService.getFoods().subscribe(data => {
      console.log(data);
      console.log(data['foods']);
      var allFoods = data['foods'];


      console.log(allFoods);
      this.foodArray = allFoods;
      console.log(allFoods[0]['food']['desc']['name']);
      if(allFoods[0]['food']['desc']['name'] == "LEAN GROUND BEEF, UPC: 078742123257"){
        allFoods[0]['food']['desc']['name'] = "Ground beef";
      }
      if(allFoods[1]['food']['desc']['name'] == "Pork, fresh, loin, center rib (chops or roasts), boneless, separable lean only, raw"){
        allFoods[1]['food']['desc']['name'] = "Pork loin";
      }
      if(allFoods[2]['food']['desc']['name'] == "Chicken, ground, raw"){
        allFoods[2]['food']['desc']['name'] = "Ground chicken";
      }
      if(allFoods[3]['food']['desc']['name'] == "Turkey, ground, 93% lean, 7% fat, raw"){
        allFoods[3]['food']['desc']['name'] = "Ground turkey";
      }
      if(allFoods[4]['food']['desc']['name'] == "Chicken, gizzard, all classes, raw"){
        allFoods[4]['food']['desc']['name'] = "Chicken gizzard";
      }
      if(allFoods[5]['food']['desc']['name'] == "Chicken, heart, all classes, raw"){
        allFoods[5]['food']['desc']['name'] = "Chicken heart";
      }
      if(allFoods[6]['food']['desc']['name'] == "Beef, variety meats and by-products, liver, raw"){
        allFoods[6]['food']['desc']['name'] = "Beef liver";
      }
      if(allFoods[7]['food']['desc']['name'] == "Fish, whitefish, mixed species, raw"){
        allFoods[7]['food']['desc']['name'] = "Whitefish";
      }
      if(allFoods[8]['food']['desc']['name'] == "Fish, salmon, Atlantic, farmed, raw"){
        allFoods[8]['food']['desc']['name'] = "Salmon";
      }
      if(allFoods[9]['food']['desc']['name'] == "Egg, quail, whole, fresh, raw"){
        allFoods[9]['food']['desc']['name'] = "Quail egg";
      }
      if(allFoods[10]['food']['desc']['name'] == "Egg, whole, raw, fresh"){
        allFoods[10]['food']['desc']['name'] = "Chicken egg";
      }
      if(allFoods[11]['food']['desc']['name'] == "Yogurt, plain, skim milk"){
        allFoods[11]['food']['desc']['name'] = "Plain Nonfat Yogurt";
      }
      if(allFoods[12]['food']['desc']['name'] == "Sweet potato, cooked, baked in skin, flesh, without salt"){
        allFoods[12]['food']['desc']['name'] = "Sweet potato";
      }
      if(allFoods[13]['food']['desc']['name'] == "Oil, coconut"){
        allFoods[13]['food']['desc']['name'] = "Coconut oil";
      }
      if(allFoods[14]['food']['desc']['name'] == "Broccoli, cooked, boiled, drained, without salt"){
        allFoods[14]['food']['desc']['name'] = "Broccoli";
      }
      if(allFoods[15]['food']['desc']['name'] == "Carrots, cooked, boiled, drained, without salt"){
        allFoods[15]['food']['desc']['name'] = "Carrot";
      }
      if(allFoods[16]['food']['desc']['name'] == "Kale, cooked, boiled, drained, without salt"){
        allFoods[16]['food']['desc']['name'] = "Kale";
      }
      if(allFoods[17]['food']['desc']['name'] == "Spinach, cooked, boiled, drained, without salt"){
        allFoods[17]['food']['desc']['name'] = "Spinach";
      }
      if(allFoods[18]['food']['desc']['name'] == "Peas, green, cooked, boiled, drained, without salt"){
        allFoods[18]['food']['desc']['name'] = "Peas";
      }
      if(allFoods[19]['food']['desc']['name'] == "Apples, raw, without skin"){
        allFoods[19]['food']['desc']['name'] = "Apple";
      }
      if(allFoods[20]['food']['desc']['name'] == "Blueberries, raw"){
        allFoods[20]['food']['desc']['name'] = "Blueberries";
      }
      if(allFoods[21]['food']['desc']['name'] == "Beets, cooked, boiled, drained"){
        allFoods[21]['food']['desc']['name'] = "Beets";
      }
      if(allFoods[22]['food']['desc']['name'] == "Seeds, flaxseed"){
        allFoods[22]['food']['desc']['name'] = "Flaxseed";
      }
      if(allFoods[23]['food']['desc']['name'] == "Seeds, chia seeds, dried"){
        allFoods[23]['food']['desc']['name'] = "Chia seeds";
      }
      if(allFoods[24]['food']['desc']['name'] == "Seeds, hemp seed, hulled"){
        allFoods[24]['food']['desc']['name'] = "Hemp seeds";
      }
    })
    
  }


  showFood(currentFood){
    if(currentFood === -100){
      currentFood = this.selectedFood;
    }
    this._httpService.getFoodById(currentFood).subscribe(data => {
      // console.log(data);
      // console.log(data['foods'][0]['food']['nutrients']);
      
      var foodInfo = {};
      foodInfo['foodname'] = data['foods'][0]['food']['desc']['name'];
      this.selectedFood = data['foods'][0]['food']['desc']['ndbno'];
      if(this.weight.foodweight){
        foodInfo['foodweight'] = Number(this.weight.foodweight);
      } else{
        foodInfo['foodweight']=0;
      }
      var allNutrients = data['foods'][0]['food']['nutrients'];
      var findNutrients = new Promise((res,rej)=>{

        for(var i =0; i< allNutrients.length;i++){
        //  console.log(allNutrients[i]);
          if (allNutrients[i]['nutrient_id'] === 208){
            // foodInfo['calories'] = allNutrients[i]['value'];
            foodInfo['calories'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
          }
          if (allNutrients[i]['nutrient_id'] === 203){
            foodInfo['protein'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
          }
          if (allNutrients[i]['nutrient_id'] === 205){
            foodInfo['carbs'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
          }
          if (allNutrients[i]['nutrient_id'] === 204){
            foodInfo['fats'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
          }
          if (allNutrients[i]['nutrient_id'] === 323){
            foodInfo['vitaminE'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
          }
          if (allNutrients[i]['nutrient_id'] === 328){
            foodInfo['vitaminD'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
          }
          if (allNutrients[i]['nutrient_id'] === 309){
            foodInfo['zinc'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
          }
          if (allNutrients[i]['nutrient_id'] === 312){
            foodInfo['copper'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
          }
          if (allNutrients[i]['nutrient_id'] === 301){
            foodInfo['calcium'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
          }
          // {{(currentFood.foodweight*.2835)*currentFood.calories}}

        }
        res(foodInfo)
      })
      
      findNutrients.then(myNutrients=>{
        // console.log(myNutrients);
        // myNutrients['foodweight'] = currentFood.foodweight;
        // myNutrients.push(foodInfo['foodweight'])
        this.newFood.push(myNutrients);
        this.completedFoodForm = true;
        // this.newFood.push(foodInfo['foodweight']);
        console.log(this.newFood);
      })
    })
    this.newFood = [];

  }
  
  // updateWeight(){
  //   this.newFood[0]['foodweight'] = Number(this.weight.foodweight);
  // }

  // addFoodSource(){
  //   this.count ++;
  //   console.log(this.count);
  //   var myFood = this.newFood[0];
  //   let observable = this._httpService.makeFood(myFood);
  //   observable.subscribe(data => {
  //     console.log(data);
  //   })
  // }

  addFoodSource(){
    if(this.completedFoodForm == true){
      this.count ++;
      console.log(this.count);
      var myFood = this.newFood[0];
      console.log(this.newFood[0])
      if(this.count == 1){
        let observable = this._httpService.makeFood(myFood);
        observable.subscribe(data => {
          console.log(data);
          console.log(data["_id"]);
          this.currentRecipe = data;
          this.showRecipe();

        })
      }
      else if(this.count >1 ){
        let observable = this._httpService.updateFood(this.currentRecipe ,myFood);
        observable.subscribe(data => {
          if(data['nModified']>0){
            this.showRecipe();
            console.log(this.currentRecipe);
          }
        })
      } 
      

      this.completedFoodForm = false;
    }
  }

  
  showRecipe(){
    let obs = this._httpService.getSelectedFoods(this.currentRecipe._id);
    obs.subscribe(data => {
      console.log(data); 
      let totalounce = 0; 
      let totalcalories = 0; 
      let totalcarbs = 0; 
      let totalprotein = 0; 
      let totalfats = 0; 
      let totalvitaminE = 0; 
      let totalvitaminD = 0; 
      let totalzinc = 0; 
      let totalcopper = 0; 
      let totalcalcium = 0; 

      this.currentRecipe = data;

      for(var i = 0; i< this.currentRecipe.food.length; i++){
        totalounce += this.currentRecipe.food[i].foodweight;
        totalcalories += this.currentRecipe.food[i].calories;
        totalcarbs += this.currentRecipe.food[i].carbs;
        totalprotein += this.currentRecipe.food[i].protein;
        totalfats += this.currentRecipe.food[i].fats;
        totalvitaminE += this.currentRecipe.food[i].vitaminE;
        totalvitaminD += this.currentRecipe.food[i].vitaminD;
        totalzinc += this.currentRecipe.food[i].zinc;
        totalcopper += this.currentRecipe.food[i].copper;
        totalcalcium += this.currentRecipe.food[i].calcium;
          console.log("current weight",totalounce)
      } 
      this.recipeounce = totalounce;
      this.recipecalories = totalcalories;
      this.recipeprotein = totalprotein;
      this.recipecarbs = totalcarbs;
      this.recipefats = totalfats;
      this.recipevitaminE = totalvitaminE;
      this.recipevitaminD = totalvitaminD;
      this.recipezinc = totalzinc;
      this.recipecopper = totalcopper;
      this.recipecalcium = totalcalcium;
    })
    
  }

  // shareRecipe(){
  //   console.log("Sharing the recipe!",this.currentRecipe._id);
  //   this._httpService.addFoodToDog(this.currentRecipe._id, this.recipeounce, this.recipecalories).subscribe(data => {
  //     this.addRecipeToDog()
      
  //     this._router.navigate(['/recipes']);
  //   })
  // }
  addRecipeToDog(){
    this.currentRecipe.recipetotalcalories = this.recipecalories
    this.currentRecipe.recipetotalweight = this.recipeounce
    this._httpService.addRecipeToDog(this.currentRecipe).subscribe(second =>{
      console.log(second,"testing if its added")
      this._router.navigate(['/recipes']);
    })
  }

  deleteFoodFromRecipe(recipe: any, fid: string){
    this._httpService.removeFood(recipe, fid).subscribe(data => {
      this.showRecipe();
    })
  }
  
 
  





  // hello(){
  //   console.log("Hello");
  // }

  


}
