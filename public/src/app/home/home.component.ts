import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() showForm: boolean;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.showForm = false;
  }

  showWeightForm(){
    if (this.showForm == false){
      this.showForm = true;
    }
    else{
      this.showForm = false;
    }
    // this.smooth.smoothScrollToAnchor([{duration: 1000});
  }



}
