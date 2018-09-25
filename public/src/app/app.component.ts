import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  showForm: boolean;
  navbarOpen = false;

  


  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {


  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


  showWeightForm(){
    if (this.showForm == false){
      this.showForm = true;
    }
    else{
      this.showForm = false;
    }
  }
 

  goBackToRecipes(){
    console.log("HIIII")
    this._router.navigateByUrl('/home', {skipLocationChange: true}).then(()=>
    this._router.navigate(["/recipes"]));
  }



  
}
