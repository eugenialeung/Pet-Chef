import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { WeightformComponent } from './weightform/weightform.component';
import { FoodformComponent } from './foodform/foodform.component';

import { NutrientValuesPipe} from './nutrientValues.pipe';

import {ScrollToModule} from 'ng2-scroll-to'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesComponent,
    WeightformComponent,
    FoodformComponent,
    NutrientValuesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ScrollToModule.forRoot()

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
