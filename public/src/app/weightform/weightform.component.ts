import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';



// import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
// import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';


@Component({
  selector: 'app-weightform',
  templateUrl: './weightform.component.html',
  styleUrls: ['./weightform.component.css']
})
export class WeightformComponent implements OnInit {
  @Input() secondForm: boolean;

  constructor(private _httpService: HttpService) { }
  allBreeds: any;
  newDog: any;
  errors = [];


  ngOnInit() {
    this.secondForm = false;
    this.errors = [];
    this.newDog = {name: "", petname: "", creator: "", weight: "", activity: "average", breed: "", targetweight: "", foodintake: "", calorieintake: ""};

    this._httpService.getBreeds().subscribe(data => {
      console.log(data['message'])
      var allDogs = data["message"];
      var dogArray = Object.keys(allDogs).map(function(key) {
        if(allDogs[key].length > 0){
          var arr=[]
          for(var i=0; i<allDogs[key].length; i++){
            arr.push(allDogs[key][i] + " " + key);
          }
          return arr
        }else{
          return [key];
        }
      });
      console.log(dogArray);
      this.allBreeds = [].concat.apply([], dogArray);
      console.log(this.allBreeds);
    })
  }


  showFoodForm(){
    this.errors = [];
    this.findFoodIntake(this.newDog);
    this.findCaloricIntake(this.newDog);
    if(this.secondForm == false) {
      this.errors = [];
      let obs = this._httpService.addDog(this.newDog);
      obs.subscribe(data => {
        if(data['errors']){
          console.log(data);
          for(var key in data['errors']){
            this.errors.push(data['errors'][key]['message']);
          }
        }
        else{
        console.log(data);
        // this.newDog = {name: "", petname: "", creator: "", weight: "", activity: "average", breed: "", targetweight: "", foodintake: "", calorieintake: ""};
        this.newDog = data;
        this.secondForm = true;
        console.log(this.newDog);
        }  
      })
    }
    else{
      console.log(this.newDog);
      this._httpService.updateDog(this.newDog).subscribe(data => {
        data = this.newDog;
        console.log(data);
        this.secondForm = true;
      });
    }
    


    // else{
    //   console.log(this.newDog);
    //   if (this.newDog.name.length < 3){
    //     this.errors.push('Please enter the name of this recipe');
    //   }
    //   if (this.newDog.petName.length < 2) {
    //     this.errors.push("Please enter your pet's name");
    //   }
    //   if (this.newDog.creator.length < 3) {
    //     this.errors.push("Please enter your your name");
    //   }
    //   if (this.newDog.weight < 0.5) {
    //     this.errors.push('Please enter a valid weight for your dog');
    //   }
    //   if (this.newDog.weight < 0.5) {
    //     this.errors.push('Please enter a valid target weight for your dog');
    //   }
    //   if (this.newDog.breed.length < 3) {
    //     this.errors.push("Please enter your dog's breed");
    //   }
    //   if (this.errors.length < 1) {
    //     this._httpService.updateDog(this.newDog).subscribe(data => {
    //         this.newDog = data;
    //     })
    //   } 

    // }

  }

  onClick(){
    let x = document.querySelector("#showFormTwo");
    if(x){
      x.scrollIntoView();
    }
  }




  getDogData(id){
    let obs = this._httpService.singleDog(id);
    obs.subscribe(data => {
      this.newDog = data;
      console.log(this.newDog);
    })
}


  findFoodIntake(dog){
    if(dog.activity == "average"){
      this.newDog.foodintake = dog.weight*2.5/100;
    }
    else if(dog.activity == "active"){
      this.newDog.foodintake = dog.weight*3/100;
    }
    else if(dog.activity == "inactive"){
      this.newDog.foodintake = dog.weight*2.2/100;
    }
  }

  findCaloricIntake(dog){
    if(dog.targetweight > 0 && dog.targetweight < 8){
      this.newDog.calorieintake = 250;
    }
    else if(dog.targetweight >= 8 && dog.targetweight < 11){
      this.newDog.calorieintake = 350;
    }
    else if(dog.targetweight >= 11 && dog.targetweight < 17){
      this.newDog.calorieintake = 450;
    }
    else if(dog.targetweight >= 17 && dog.targetweight < 22){
      this.newDog.calorieintake = 600;
    }
    else if(dog.targetweight >= 22 && dog.targetweight < 27){
      this.newDog.calorieintake = 750;
    }
    else if(dog.targetweight >= 27 && dog.targetweight < 33){
      this.newDog.calorieintake = 875;
    }
    else if(dog.targetweight >= 33 && dog.targetweight < 38){
      this.newDog.calorieintake = 1000;
    }
    else if(dog.targetweight >= 38 && dog.targetweight < 44){
      this.newDog.calorieintake = 1125;
    }
    else if(dog.targetweight >= 44 && dog.targetweight < 49){
      this.newDog.calorieintake = 1250;
    }
    else if(dog.targetweight >= 49 && dog.targetweight < 55){
      this.newDog.calorieintake = 1375;
    }
    else if(dog.targetweight >= 55 && dog.targetweight < 60){
      this.newDog.calorieintake = 1500;
    }
    else if(dog.targetweight >= 60 && dog.targetweight < 66){
      this.newDog.calorieintake = 1600;
    }
    else if(dog.targetweight >= 66 && dog.targetweight < 71){
      this.newDog.calorieintake = 1700;
    }
    else if(dog.targetweight >= 71 && dog.targetweight < 77){
      this.newDog.calorieintake = 1790;
    }
    else if(dog.targetweight >= 77 && dog.targetweight < 82){
      this.newDog.calorieintake = 1880;
    }
    else if(dog.targetweight >= 82 && dog.targetweight < 87){
      this.newDog.calorieintake = 1950;
    }
    else if(dog.targetweight >= 87 && dog.targetweight < 92){
      this.newDog.calorieintake = 2100;
    }
    else if(dog.targetweight >= 92 && dog.targetweight < 99){
      this.newDog.calorieintake = 2200;
    }
    else if(dog.targetweight >= 99 && dog.targetweight < 105){
      this.newDog.calorieintake = 2300;
    }
    else if(dog.targetweight >= 105){
      this.newDog.calorieintake = 2500;
    }

  }



}
