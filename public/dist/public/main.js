(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'recipes', component: _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__["RecipesComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\n    margin-bottom:0;\n}\n\nhr {\n    color: grey;\n    background-color: grey;\n    height: 1px;    \n}\n\n/* div.collapse.navbar-collapse{\n    display: inline-block!important;\n} */\n\n.responsive {\n    /* width: 100%; */\n    max-width: 70px;\n    height: auto;\n}\n\na.navbar-brand{\n    padding: 0;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"assets/logo.png\" class=\"responsive\">\n      Pet Chef Calculator\n    </a>\n    \n  \n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n  \n    <div class=\" collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\">\n      <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"goBackToRecipes()\" [routerLink]=\"['/recipes']\">Recipe Inspo</a>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\">Nutrients</a>\n          </li>  \n          <li class=\"nav-item\">\n            <a class=\"nav-link\">About</a>\n          </li>   \n      </ul>\n  \n    </div>\n  </nav>\n\n\n  \n\n\n\n<div>\n    <router-outlet></router-outlet>\n</div>\n\n\n\n\n\n<footer>\n    <div class=\"container-fluid padding\">\n      <div class=\"row text-center\">\n        <div class=\"col-md-4\">\n          <hr class=\"light\">\n          <h5>Home</h5>\n          <hr class=\"light\">\n          <p>Proportion Calculator</p>\n          <p>Build Your Meal</p>\n          <p>Recipe Inspo</p>\n          <p></p>\n        </div>\n        <div class=\"col-md-4\">\n          <hr class=\"light\">\n          <h5>Recipe Inspo</h5>\n          <hr class=\"light\">\n          <p>Our Story</p>\n          <p>Our Process</p>\n          <p>Blog</p>\n        </div>\n        <div class=\"col-md-4\">\n          <hr class=\"light\">\n          <h5>Nutrients</h5>\n          <hr class=\"light\">\n          <p>Essentials</p>\n          <p>Vitamins</p>\n          <p>Minerals</p>\n        </div>\n        <div class=\"col-12\">\n          <hr class=\"light\">\n          <h5>&copy; Pup Prep Calculator</h5>\n        </div>\n      </div>\n    </div>\n    </footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.navbarOpen = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    AppComponent.prototype.showWeightForm = function () {
        if (this.showForm == false) {
            this.showForm = true;
        }
        else {
            this.showForm = false;
        }
    };
    AppComponent.prototype.goBackToRecipes = function () {
        var _this = this;
        console.log("HIIII");
        this._router.navigateByUrl('/home', { skipLocationChange: true }).then(function () {
            return _this._router.navigate(["/recipes"]);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _weightform_weightform_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./weightform/weightform.component */ "./src/app/weightform/weightform.component.ts");
/* harmony import */ var _foodform_foodform_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./foodform/foodform.component */ "./src/app/foodform/foodform.component.ts");
/* harmony import */ var _nutrientValues_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nutrientValues.pipe */ "./src/app/nutrientValues.pipe.ts");
/* harmony import */ var ng2_scroll_to__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-scroll-to */ "./node_modules/ng2-scroll-to/index.js");
/* harmony import */ var ng2_scroll_to__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_scroll_to__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__["RecipesComponent"],
                _weightform_weightform_component__WEBPACK_IMPORTED_MODULE_10__["WeightformComponent"],
                _foodform_foodform_component__WEBPACK_IMPORTED_MODULE_11__["FoodformComponent"],
                _nutrientValues_pipe__WEBPACK_IMPORTED_MODULE_12__["NutrientValuesPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ng2_scroll_to__WEBPACK_IMPORTED_MODULE_13__["ScrollToModule"].forRoot()
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/foodform/foodform.component.css":
/*!*************************************************!*\
  !*** ./src/app/foodform/foodform.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".foodForm{\n    border: 1px solid darkgrey;\n    border-radius: 10px;\n    margin: 50px;\n    padding: 30px;\n}\nh4{\n    text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/foodform/foodform.component.html":
/*!**************************************************!*\
  !*** ./src/app/foodform/foodform.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"showFormTwo\"></div>\n\n<div class=\"foodForm\">\n  <h4>{{newDog.petname}} needs a total of {{newDog.foodintake}} pounds ({{16*newDog.foodintake}} ounces) of food per day</h4>\n\n  \n\n  {{newFood | json}}\n  <form (submit)=\"addFoodSource()\" (keydown.enter)=\"$event.preventDefault()\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for = \"foodname\">Food</label>\n        <select id=\"foodname\" class=\"form-control\" name=\"newFood.foodname\"  (change)=\"showFood($event.target.value)\" [(ngModel)]=\"newFood.foodname\">\n          <option selected> </option>\n          <option value=\"{{food.food.desc.ndbno}}\" *ngFor=\"let food of foodArray\">{{food.food.desc.name}}</option>\n          <!-- <option>Crushed egg shells</option>\n          <option>Kefir</option>\n          <option>Oysters</option>\n          <option>Whole sardines</option> -->\n        </select>\n      </div>\n      <div class=\"form-group col-md-6\">\n          <label for = \"foodweight\">Weight of Food</label>\n          <input type=\"text\" class=\"form-control\" id=\"foodweight\" placeholder=\"Quantity in Ounces\" (keypress)=\"showFood(-100)\" name=\"weight.foodweight\"  [(ngModel)]=\"weight.foodweight\" value=0>\n      </div>\n    </div>\n    <input class=\"btn btn-primary\" type=\"submit\" value=\"Add Food Source\">    \n  </form>\n\n\n  \n\n  <div class=\"table-responsive\">\n    <table class=\"table table-striped table-hover\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Food Source</th>\n          <th scope=\"col\">Qty in Ounces</th>\n          <th scope=\"col\">Energy</th>\n          <th scope=\"col\">Protein</th>\n          <th scope=\"col\">Carbs</th>\n          <th scope=\"col\">Fats</th>\n          <th scope=\"col\">Vitamin E</th>\n          <th scope=\"col\">Vitamin D</th>\n          <th scope=\"col\">Zinc</th>\n          <th scope=\"col\">Copper</th>\n          <th scope=\"col\">Calcium</th>\n          <th scope=\"col\">Delete</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"currentRecipe\">\n        <!-- <tr *ngFor=\"let currentFood of currentRecipe.food; let i = index\"> -->\n        <tr *ngFor=\"let currentFood of currentRecipe.food\">\n        <!-- <tr> -->\n          <!-- values based per 100g.  1ounce = 28.35grams-->\n          <td>{{currentFood.foodname}}</td>\n          <td>{{currentFood.foodweight}}</td> <!-- 600oz/x g = 1oz/28.35g becomes 17010g --> \n          <!-- <td>{{(currentFood.foodweight*.2835)*currentFood.calories}}</td>  -->\n          <td>{{currentFood.calories | nutrientValues}}</td> \n          <td>{{currentFood.protein | nutrientValues}}</td> \n          <td>{{currentFood.carbs | nutrientValues}}</td>  \n          <td>{{currentFood.fats | nutrientValues}}</td> \n          <td>{{currentFood.vitaminE | nutrientValues}}</td> \n          <td>{{currentFood.vitaminD | nutrientValues}}</td> \n          <td>{{currentFood.zinc | nutrientValues}}</td>  \n          <td>{{currentFood.copper | nutrientValues}}</td> \n          <td>{{currentFood.calcium | nutrientValues}}</td> \n          <td><button (click)=\"deleteFoodFromRecipe(currentRecipe, currentFood._id)\">X</button></td>\n        </tr>\n      </tbody>\n      <tbody>\n        <tr style=\"font-weight: 500\">\n          <td>Current Total</td>\n          <td>{{(recipeounce).toFixed(1)}} oz</td>\n          <td>{{(recipecalories).toFixed(1)}} cal</td>\n          <td>{{(recipeprotein).toFixed(1)}} g</td>\n          <td>{{(recipecarbs).toFixed(1)}} g</td>\n          <td>{{(recipefats).toFixed(1)}} g</td>\n          <td>{{(recipevitaminE).toFixed(1)}} mg</td>\n          <td>{{(recipevitaminD).toFixed(1)}} IU</td>\n          <td>{{(recipezinc).toFixed(1)}} mg</td>\n          <td>{{(recipecopper).toFixed(1)}} mg</td>\n          <td>{{(recipecalcium).toFixed(1)}} mg</td>\n          <td></td>\n        </tr>\n        <tr style=\"font-weight: 700\">\n          <td>Total Goal</td>\n          <td>-</td>\n          <td>{{newDog.calorieintake}} cal</td>\n          <td>{{newDog.targetweight}} g</td>\n          <td>-</td>\n          <td>{{(newDog.foodintake*453.592*5/100).toFixed(1)}} g</td> <!-- 5% of food weight-->\n          <td>{{(newDog.weight*2*.67).toFixed(1)}} mg</td> <!-- 2 IU per weight in pounds a day. 1IU = 0.67 mg-->\n          <td>{{(newDog.weight*125/33).toFixed(1)}} IU</td> <!-- minimum 125IU per day for every 33 lb of dog (max 750)-->\n          <td>{{(newDog.weight*25/50).toFixed(1)}} mg</td> <!-- 25 mg of zinc per 50 pound of dog-->\n          <td>{{(newDog.foodintake*3.3).toFixed(1)}} mg</td> <!--3.3mg of copper daily for every pound of dog food-->\n          <td>{{(newDog.weight*250/11).toFixed(1)}} mg</td> <!--11 lb dog needs 250mg calcium per day (ratio of 0.044)-->\n          <td></td>\n        </tr>\n        \n        <a class=\"btn btn-primary btn-outline-success\" role=\"button\" style=\"color:green\" (click)=\"addRecipeToDog()\">Share your recipe!</a>\n      </tbody>\n    </table>\n  </div>\n\n\n  \n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/foodform/foodform.component.ts":
/*!************************************************!*\
  !*** ./src/app/foodform/foodform.component.ts ***!
  \************************************************/
/*! exports provided: FoodformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodformComponent", function() { return FoodformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodformComponent = /** @class */ (function () {
    function FoodformComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.count = 0;
        this.recipeounce = 0;
        this.recipecalories = 0;
        this.recipeprotein = 0;
        this.recipecarbs = 0;
        this.recipefats = 0;
        this.recipevitaminE = 0;
        this.recipevitaminD = 0;
        this.recipezinc = 0;
        this.recipecopper = 0;
        this.recipecalcium = 0;
    }
    FoodformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newFood = [];
        this.weight = {};
        this.completedFoodForm = false;
        // this.hello();
        this._httpService.getFoods().subscribe(function (data) {
            console.log(data);
            console.log(data['foods']);
            var allFoods = data['foods'];
            console.log(allFoods);
            _this.foodArray = allFoods;
            console.log(allFoods[0]['food']['desc']['name']);
            if (allFoods[0]['food']['desc']['name'] == "LEAN GROUND BEEF, UPC: 078742123257") {
                allFoods[0]['food']['desc']['name'] = "Ground beef";
            }
            if (allFoods[1]['food']['desc']['name'] == "Pork, fresh, loin, center rib (chops or roasts), boneless, separable lean only, raw") {
                allFoods[1]['food']['desc']['name'] = "Pork loin";
            }
            if (allFoods[2]['food']['desc']['name'] == "Chicken, ground, raw") {
                allFoods[2]['food']['desc']['name'] = "Ground chicken";
            }
            if (allFoods[3]['food']['desc']['name'] == "Turkey, ground, 93% lean, 7% fat, raw") {
                allFoods[3]['food']['desc']['name'] = "Ground turkey";
            }
            if (allFoods[4]['food']['desc']['name'] == "Chicken, gizzard, all classes, raw") {
                allFoods[4]['food']['desc']['name'] = "Chicken gizzard";
            }
            if (allFoods[5]['food']['desc']['name'] == "Chicken, heart, all classes, raw") {
                allFoods[5]['food']['desc']['name'] = "Chicken heart";
            }
            if (allFoods[6]['food']['desc']['name'] == "Beef, variety meats and by-products, liver, raw") {
                allFoods[6]['food']['desc']['name'] = "Beef liver";
            }
            if (allFoods[7]['food']['desc']['name'] == "Fish, whitefish, mixed species, raw") {
                allFoods[7]['food']['desc']['name'] = "Whitefish";
            }
            if (allFoods[8]['food']['desc']['name'] == "Fish, salmon, Atlantic, farmed, raw") {
                allFoods[8]['food']['desc']['name'] = "Salmon";
            }
            if (allFoods[9]['food']['desc']['name'] == "Egg, quail, whole, fresh, raw") {
                allFoods[9]['food']['desc']['name'] = "Quail egg";
            }
            if (allFoods[10]['food']['desc']['name'] == "Egg, whole, raw, fresh") {
                allFoods[10]['food']['desc']['name'] = "Chicken egg";
            }
            if (allFoods[11]['food']['desc']['name'] == "Yogurt, plain, skim milk") {
                allFoods[11]['food']['desc']['name'] = "Plain Nonfat Yogurt";
            }
            if (allFoods[12]['food']['desc']['name'] == "Sweet potato, cooked, baked in skin, flesh, without salt") {
                allFoods[12]['food']['desc']['name'] = "Sweet potato";
            }
            if (allFoods[13]['food']['desc']['name'] == "Oil, coconut") {
                allFoods[13]['food']['desc']['name'] = "Coconut oil";
            }
            if (allFoods[14]['food']['desc']['name'] == "Broccoli, cooked, boiled, drained, without salt") {
                allFoods[14]['food']['desc']['name'] = "Broccoli";
            }
            if (allFoods[15]['food']['desc']['name'] == "Carrots, cooked, boiled, drained, without salt") {
                allFoods[15]['food']['desc']['name'] = "Carrot";
            }
            if (allFoods[16]['food']['desc']['name'] == "Kale, cooked, boiled, drained, without salt") {
                allFoods[16]['food']['desc']['name'] = "Kale";
            }
            if (allFoods[17]['food']['desc']['name'] == "Spinach, cooked, boiled, drained, without salt") {
                allFoods[17]['food']['desc']['name'] = "Spinach";
            }
            if (allFoods[18]['food']['desc']['name'] == "Peas, green, cooked, boiled, drained, without salt") {
                allFoods[18]['food']['desc']['name'] = "Peas";
            }
            if (allFoods[19]['food']['desc']['name'] == "Apples, raw, without skin") {
                allFoods[19]['food']['desc']['name'] = "Apple";
            }
            if (allFoods[20]['food']['desc']['name'] == "Blueberries, raw") {
                allFoods[20]['food']['desc']['name'] = "Blueberries";
            }
            if (allFoods[21]['food']['desc']['name'] == "Beets, cooked, boiled, drained") {
                allFoods[21]['food']['desc']['name'] = "Beets";
            }
            if (allFoods[22]['food']['desc']['name'] == "Seeds, flaxseed") {
                allFoods[22]['food']['desc']['name'] = "Flaxseed";
            }
            if (allFoods[23]['food']['desc']['name'] == "Seeds, chia seeds, dried") {
                allFoods[23]['food']['desc']['name'] = "Chia seeds";
            }
            if (allFoods[24]['food']['desc']['name'] == "Seeds, hemp seed, hulled") {
                allFoods[24]['food']['desc']['name'] = "Hemp seeds";
            }
        });
    };
    FoodformComponent.prototype.showFood = function (currentFood) {
        var _this = this;
        if (currentFood === -100) {
            currentFood = this.selectedFood;
        }
        this._httpService.getFoodById(currentFood).subscribe(function (data) {
            // console.log(data);
            // console.log(data['foods'][0]['food']['nutrients']);
            var foodInfo = {};
            foodInfo['foodname'] = data['foods'][0]['food']['desc']['name'];
            _this.selectedFood = data['foods'][0]['food']['desc']['ndbno'];
            if (_this.weight.foodweight) {
                foodInfo['foodweight'] = Number(_this.weight.foodweight);
            }
            else {
                foodInfo['foodweight'] = 0;
            }
            var allNutrients = data['foods'][0]['food']['nutrients'];
            var findNutrients = new Promise(function (res, rej) {
                for (var i = 0; i < allNutrients.length; i++) {
                    //  console.log(allNutrients[i]);
                    if (allNutrients[i]['nutrient_id'] === 208) {
                        // foodInfo['calories'] = allNutrients[i]['value'];
                        foodInfo['calories'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
                    }
                    if (allNutrients[i]['nutrient_id'] === 203) {
                        foodInfo['protein'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
                    }
                    if (allNutrients[i]['nutrient_id'] === 205) {
                        foodInfo['carbs'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
                    }
                    if (allNutrients[i]['nutrient_id'] === 204) {
                        foodInfo['fats'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
                    }
                    if (allNutrients[i]['nutrient_id'] === 323) {
                        foodInfo['vitaminE'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
                    }
                    if (allNutrients[i]['nutrient_id'] === 328) {
                        foodInfo['vitaminD'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
                    }
                    if (allNutrients[i]['nutrient_id'] === 309) {
                        foodInfo['zinc'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
                    }
                    if (allNutrients[i]['nutrient_id'] === 312) {
                        foodInfo['copper'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
                    }
                    if (allNutrients[i]['nutrient_id'] === 301) {
                        foodInfo['calcium'] = foodInfo['foodweight'] * .2835 * allNutrients[i]['value'];
                    }
                    // {{(currentFood.foodweight*.2835)*currentFood.calories}}
                }
                res(foodInfo);
            });
            findNutrients.then(function (myNutrients) {
                // console.log(myNutrients);
                // myNutrients['foodweight'] = currentFood.foodweight;
                // myNutrients.push(foodInfo['foodweight'])
                _this.newFood.push(myNutrients);
                _this.completedFoodForm = true;
                // this.newFood.push(foodInfo['foodweight']);
                console.log(_this.newFood);
            });
        });
        this.newFood = [];
    };
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
    FoodformComponent.prototype.addFoodSource = function () {
        var _this = this;
        if (this.completedFoodForm == true) {
            this.count++;
            console.log(this.count);
            var myFood = this.newFood[0];
            console.log(this.newFood[0]);
            if (this.count == 1) {
                var observable = this._httpService.makeFood(myFood);
                observable.subscribe(function (data) {
                    console.log(data);
                    console.log(data["_id"]);
                    _this.currentRecipe = data;
                    _this.showRecipe();
                });
            }
            else if (this.count > 1) {
                var observable = this._httpService.updateFood(this.currentRecipe, myFood);
                observable.subscribe(function (data) {
                    if (data['nModified'] > 0) {
                        _this.showRecipe();
                        console.log(_this.currentRecipe);
                    }
                });
            }
            this.completedFoodForm = false;
        }
    };
    FoodformComponent.prototype.showRecipe = function () {
        var _this = this;
        var obs = this._httpService.getSelectedFoods(this.currentRecipe._id);
        obs.subscribe(function (data) {
            console.log(data);
            var totalounce = 0;
            var totalcalories = 0;
            var totalcarbs = 0;
            var totalprotein = 0;
            var totalfats = 0;
            var totalvitaminE = 0;
            var totalvitaminD = 0;
            var totalzinc = 0;
            var totalcopper = 0;
            var totalcalcium = 0;
            _this.currentRecipe = data;
            for (var i = 0; i < _this.currentRecipe.food.length; i++) {
                totalounce += _this.currentRecipe.food[i].foodweight;
                totalcalories += _this.currentRecipe.food[i].calories;
                totalcarbs += _this.currentRecipe.food[i].carbs;
                totalprotein += _this.currentRecipe.food[i].protein;
                totalfats += _this.currentRecipe.food[i].fats;
                totalvitaminE += _this.currentRecipe.food[i].vitaminE;
                totalvitaminD += _this.currentRecipe.food[i].vitaminD;
                totalzinc += _this.currentRecipe.food[i].zinc;
                totalcopper += _this.currentRecipe.food[i].copper;
                totalcalcium += _this.currentRecipe.food[i].calcium;
                console.log("current weight", totalounce);
            }
            _this.recipeounce = totalounce;
            _this.recipecalories = totalcalories;
            _this.recipeprotein = totalprotein;
            _this.recipecarbs = totalcarbs;
            _this.recipefats = totalfats;
            _this.recipevitaminE = totalvitaminE;
            _this.recipevitaminD = totalvitaminD;
            _this.recipezinc = totalzinc;
            _this.recipecopper = totalcopper;
            _this.recipecalcium = totalcalcium;
        });
    };
    // shareRecipe(){
    //   console.log("Sharing the recipe!",this.currentRecipe._id);
    //   this._httpService.addFoodToDog(this.currentRecipe._id, this.recipeounce, this.recipecalories).subscribe(data => {
    //     this.addRecipeToDog()
    //     this._router.navigate(['/recipes']);
    //   })
    // }
    FoodformComponent.prototype.addRecipeToDog = function () {
        var _this = this;
        this.currentRecipe.recipetotalcalories = this.recipecalories;
        this.currentRecipe.recipetotalweight = this.recipeounce;
        this._httpService.addRecipeToDog(this.currentRecipe).subscribe(function (second) {
            console.log(second, "testing if its added");
            _this._router.navigate(['/recipes']);
        });
    };
    FoodformComponent.prototype.deleteFoodFromRecipe = function (recipe, fid) {
        var _this = this;
        this._httpService.removeFood(recipe, fid).subscribe(function (data) {
            _this.showRecipe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FoodformComponent.prototype, "foodIntake", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FoodformComponent.prototype, "newDog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FoodformComponent.prototype, "calorieIntake", void 0);
    FoodformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foodform',
            template: __webpack_require__(/*! ./foodform.component.html */ "./src/app/foodform/foodform.component.html"),
            styles: [__webpack_require__(/*! ./foodform.component.css */ "./src/app/foodform/foodform.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FoodformComponent);
    return FoodformComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.jumbotron { \n    background-size: cover;\n    padding-bottom: 18%;\n    padding-top: 18%;\n    background-position: center;   \n    background-repeat: no-repeat;\n    position: relative;\n}\n\n/* .bannertext {\n    text-align: left;\n    padding: 50px;\n    position: relative;\n    top: 200px;\n    color: white;\n} */\n\n.btn {\n    background-color: transparent;\n    color: white;\n    border-color: white;\n    \n    \n}\n\n/* @media (max-width: 600px) {\n    .bannertext {\n        font-size: 20px;\n    }\n} */\n\n.container{\n    margin:0px;\n    color: white;\n}\n\n/* .container {\n    position: relative;\n    text-align: left;\n    color: white;\n} */\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"jumbotron\" style=\"background-image: url(assets/banner2.jpg);\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Become Your Pet's Chef!</h1>\n    <p class=\"lead\">An application to create a balanced home-cooked diet for your dog</p>\n    <p class=\"lead\">\n      <a class=\"btn btn-primary btn-lg\" role=\"button\" (click)=\"showWeightForm()\" scrollTo scrollTargetSelector=\"#showFormOne\">Calculate Now!</a>\n    </p>\n\n  </div>\n</div>\n\n\n\n\n\n\n<div id=\"showFormOne\"></div>\n<app-weightform *ngIf=\"showForm\" id=\"weightForm\"></app-weightform>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService) {
        this._httpService = _httpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.showForm = false;
    };
    HomeComponent.prototype.showWeightForm = function () {
        if (this.showForm == false) {
            this.showForm = true;
        }
        else {
            this.showForm = false;
        }
        // this.smooth.smoothScrollToAnchor([{duration: 1000});
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HomeComponent.prototype, "showForm", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    // saved_search: any;
    function HttpService(_http) {
        this._http = _http;
    }
    // retrieveSearch(){
    //   return this.saved_search;
    // }
    HttpService.prototype.allRecipes = function () {
        return this._http.get('api/recipe/show');
    };
    HttpService.prototype.searchRecipes = function (search) {
        // this.saved_search = search;
        return this._http.post('api/recipe/search', search);
    };
    HttpService.prototype.addDog = function (dog) {
        return this._http.post('api/dog', dog);
    };
    HttpService.prototype.singleDog = function (id) {
        return this._http.get("api/dog/" + id);
    };
    HttpService.prototype.updateDog = function (dog) {
        return this._http.put("api/dog/" + dog._id, dog);
    };
    HttpService.prototype.makeFood = function (food) {
        return this._http.post('api/recipe', food);
    };
    HttpService.prototype.updateFood = function (recipe, food) {
        return this._http.post("api/recipe/" + recipe._id, food);
    };
    HttpService.prototype.getSelectedFoods = function (fid) {
        return this._http.get("api/recipe/" + fid);
    };
    HttpService.prototype.removeFood = function (recipe, fid) {
        return this._http.put("api/recipe/" + fid, recipe);
    };
    // addFoodToDog(recipe, ounces, calories){
    //   return this._http.post(`api/dog/addRecipe/${ounces}/${calories}`, {recipe:recipe});
    // }
    HttpService.prototype.getBreeds = function () {
        return this._http.get('https://dog.ceo/api/breeds/list/all');
    };
    HttpService.prototype.getFoods = function () {
        return this._http.get('https://api.nal.usda.gov/ndb/V2/reports?ndbno=45183902&ndbno=10199&ndbno=05332&ndbno=05665&ndbno=05023&ndbno=05025&ndbno=13325&ndbno=15130&ndbno=15236&ndbno=01140&ndbno=01123&ndbno=01118&ndbno=11508&ndbno=04047&ndbno=11091&ndbno=11125&ndbno=11234&ndbno=11458&ndbno=11305&ndbno=09004&ndbno=09050&ndbno=11081&ndbno=12220&ndbno=12006&ndbno=12012&type=f&format=json&api_key=s69vNdSmputLCwlVwDthJGuKamb9g8BrvNsrHtCM&location=Denver+CO');
    };
    HttpService.prototype.getFoodById = function (id) {
        return this._http.get("https://api.nal.usda.gov/ndb/V2/reports?ndbno=" + id + "&type=f&format=json&api_key=s69vNdSmputLCwlVwDthJGuKamb9g8BrvNsrHtCM&location=Denver+CO");
    };
    HttpService.prototype.addRecipeToDog = function (recipe) {
        return this._http.post('api/dog/addRecipeToDog/', { recipe: recipe });
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/nutrientValues.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/nutrientValues.pipe.ts ***!
  \****************************************/
/*! exports provided: NutrientValuesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutrientValuesPipe", function() { return NutrientValuesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NutrientValuesPipe = /** @class */ (function () {
    function NutrientValuesPipe() {
    }
    NutrientValuesPipe.prototype.transform = function (nutrient) {
        if (nutrient == undefined) {
            return 0.0.toFixed(1);
        }
        else {
            return nutrient.toFixed(1);
        }
    };
    NutrientValuesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'nutrientValues' })
    ], NutrientValuesPipe);
    return NutrientValuesPipe;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/*!***********************************************!*\
  !*** ./src/app/recipes/recipes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Chivo\");\n@import url(\"https://fonts.googleapis.com/css?family=Playfair+Display\");\np{\n    margin: 0;\n}\n.card{\n    margin-top: 20px;\n    \n}\n.form-control-borderless {\n    border: none;\n}\n.form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {\n    border: none;\n    outline: none;\n    box-shadow: none;\n}\ndiv.card-body.row.no-gutters.align-items-center{\n    padding: 5px;\n}"

/***/ }),

/***/ "./src/app/recipes/recipes.component.html":
/*!************************************************!*\
  !*** ./src/app/recipes/recipes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\t<div class=\"row justify-content-center\">\n    <div class=\"col-12 col-md-10 col-lg-8\">\n        <form class=\"card card-sm\"  (submit)=\"searchRecipes()\">\n          <div class=\"card-body row no-gutters align-items-center\">\n              <div class=\"col-auto\">\n                  <i class=\"fas fa-search h4 text-body\"></i>\n              </div>\n              <!--end of col-->\n              <div class=\"col\">\n                  <input class=\"form-control form-control-lg form-control-borderless\" type=\"search\" name=\"search.searchbar\" [(ngModel)]=\"search.searchbar\" placeholder=\"Search by creator, pet name, or breed\" >\n              </div>\n              <!--end of col-->\n              <div class=\"col-auto\">\n                  <button class=\"btn btn-md btn-outline-success\" type=\"submit\">Search Recipes</button>\n              </div>\n              <!--end of col-->\n          </div>\n      </form>\n    </div>\n    <!--end of col-->\n  </div>\n</div>\n\n\n\n<div class=\"card-group\" *ngIf=\"allDogsWithRecipes\">\n  <div class=\"col-sm-4\" *ngFor=\"let dog of allDogsWithRecipes\">\n    <div class=\"card\">\n      <h3 class=\"card-header\" style=\"font-family: 'Playfair Display', serif; font-style: italic\">{{dog.name}}</h3>\n      <div class=\"card-body\">\n        <div class=\"card-text\">\n          <div style=\"font-family: 'Chivo', sans-serif\">\n            <p >For: {{dog.petname}}, the {{dog.breed}}</p>\n            <p>{{dog.petname}} is currently {{dog.weight}} lbs with a goal of {{dog.targetweight}} lbs</p>\n            <p>Activity level: {{dog.activity}}</p>\n            <p>Goals per day:</p>\n            <p style=\"text-indent: 20px\">- {{dog.foodintake*16}} ounces of food </p>\n            <p style=\"text-indent: 20px\">- {{dog.calorieintake}} calories</p>\n          </div>\n          <hr>\n          <h5 style=\"font-family: 'Playfair Display', serif; font-style: italic\">Ingredients: </h5>\n          <hr>\n          <div *ngFor=\"let myFood of dog.diet[0].food\">\n            <p style=\"font-family: 'Chivo', sans-serif\">{{myFood.foodweight}} oz. {{myFood.foodname}}</p>\n          </div>\n          <hr>\n          <p style=\"font-family: 'Chivo', sans-serif\">Recipe's totals per day:</p>\n          <p style=\"text-indent: 20px\">- {{(dog.diet[0].recipetotalweight).toFixed(1)}} ounces</p>\n          <p style=\"text-indent: 20px\">- {{(dog.diet[0].recipetotalcalories).toFixed(1)}} calories </p>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <small class=\"text-muted\">Created on {{ dog.createdAt | date: \"MM/dd/yyyy\" }} by {{dog.creator}}</small>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipesComponent = /** @class */ (function () {
    function RecipesComponent(_httpService) {
        this._httpService = _httpService;
    }
    RecipesComponent.prototype.ngOnInit = function () {
        this.search = { searchbar: "" };
        this.showAllRecipes();
    };
    RecipesComponent.prototype.showAllRecipes = function () {
        var _this = this;
        this._httpService.allRecipes().subscribe(function (data) {
            _this.allDogsWithRecipes = data;
            console.log("getting all dogs with food", data);
        });
    };
    RecipesComponent.prototype.searchRecipes = function () {
        var _this = this;
        this._httpService.searchRecipes(this.search).subscribe(function (data) {
            console.log(data);
            _this.allDogsWithRecipes = data;
        });
    };
    RecipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! ./recipes.component.html */ "./src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/recipes/recipes.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/weightform/weightform.component.css":
/*!*****************************************************!*\
  !*** ./src/app/weightform/weightform.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/weightform/weightform.component.html":
/*!******************************************************!*\
  !*** ./src/app/weightform/weightform.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form (submit)=\"showFoodForm()\">\n    <!-- {{newDog | json}} -->\n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-12\">\n          <label for=\"name\">Recipe Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Recipe Name\" name=\"newDog.name\" [(ngModel)]=\"newDog.name\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for = \"creator\">Your Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"creator\" placeholder=\"Your Name\" name=\"newDog.creator\" [(ngModel)]=\"newDog.creator\">\n      </div>\n      <div class=\"form-group col-md-6\">\n          <label for = \"petname\">Dog's Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"petname\" placeholder=\"Pet's Name\" name=\"newDog.petname\" [(ngModel)]=\"newDog.petname\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-3\">\n      <label for=\"weight\">Dog's Weight (lbs)</label>\n        <input type=\"text\" class=\"form-control\" id=\"weight\" name=\"newDog.weight\" [(ngModel)]=\"newDog.weight\">\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label for=\"targetweight\">Target Weight (lbs)</label>\n          <input type=\"text\" class=\"form-control\" id=\"targetweight\" name=\"newDog.targetweight\" [(ngModel)]=\"newDog.targetweight\">\n        </div>\n      <div class=\"form-group col-md-3\">\n        <label for=\"activity\">Dog's Activity Level</label>\n        <select id=\"activity\" class=\"form-control\" name=\"newDog.activity\" [(ngModel)]=\"newDog.activity\">\n            <option selected value=\"average\">Average</option>\n            <option value=\"active\">Highly Active</option>\n            <option value=\"inactive\"> Inactive</option>\n          </select>\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label for=\"breed\">Dog Breed</label>\n        <select id=\"breed\" class=\"form-control\" name=\"newDog.breed\" [(ngModel)]=\"newDog.breed\">\n            <option value=\"{{b}}\" *ngFor=\"let b of allBreeds\">{{b}}</option>\n          </select>\n      </div>\n    </div>\n    <!-- <input class=\"btn btn-primary\" type=\"submit\" value=\"Create your meal!\" > -->\n    <!-- <button class=\"btn btn-primary\" type=\"submit\">Create your meal!</button> -->\n    <button (click)=\"onClick()\"class=\"btn btn-primary\" type=\"submit\">Create your meal!</button>\n\n    <!-- <a class=\"btn btn-primary\" role=\"button\" type=\"subit\" scrollTo scrollTargetSelector=\"#showFormTwo\">Calculate Now!</a> -->\n  </form>\n  <p *ngFor=\"let e of errors\" style=\"color:red\">{{e}}</p>\n</div>\n\n\n<div id=\"showFormTwo\"></div>\n<app-foodform  *ngIf=\"secondForm\" id=\"foodForm\"  [newDog]=\"newDog\" [foodIntake]=\"foodIntake\" [calorieIntake]=\"calorieIntake\" ></app-foodform>\n\n\n\n"

/***/ }),

/***/ "./src/app/weightform/weightform.component.ts":
/*!****************************************************!*\
  !*** ./src/app/weightform/weightform.component.ts ***!
  \****************************************************/
/*! exports provided: WeightformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightformComponent", function() { return WeightformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
// import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';
var WeightformComponent = /** @class */ (function () {
    function WeightformComponent(_httpService) {
        this._httpService = _httpService;
        this.errors = [];
    }
    WeightformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.secondForm = false;
        this.errors = [];
        this.newDog = { name: "", petname: "", creator: "", weight: "", activity: "average", breed: "", targetweight: "", foodintake: "", calorieintake: "" };
        this._httpService.getBreeds().subscribe(function (data) {
            console.log(data['message']);
            var allDogs = data["message"];
            var dogArray = Object.keys(allDogs).map(function (key) {
                if (allDogs[key].length > 0) {
                    var arr = [];
                    for (var i = 0; i < allDogs[key].length; i++) {
                        arr.push(allDogs[key][i] + " " + key);
                    }
                    return arr;
                }
                else {
                    return [key];
                }
            });
            console.log(dogArray);
            _this.allBreeds = [].concat.apply([], dogArray);
            console.log(_this.allBreeds);
        });
    };
    WeightformComponent.prototype.showFoodForm = function () {
        var _this = this;
        this.errors = [];
        this.findFoodIntake(this.newDog);
        this.findCaloricIntake(this.newDog);
        if (this.secondForm == false) {
            this.errors = [];
            var obs = this._httpService.addDog(this.newDog);
            obs.subscribe(function (data) {
                if (data['errors']) {
                    console.log(data);
                    for (var key in data['errors']) {
                        _this.errors.push(data['errors'][key]['message']);
                    }
                }
                else {
                    console.log(data);
                    // this.newDog = {name: "", petname: "", creator: "", weight: "", activity: "average", breed: "", targetweight: "", foodintake: "", calorieintake: ""};
                    _this.newDog = data;
                    _this.secondForm = true;
                    console.log(_this.newDog);
                }
            });
        }
        else {
            console.log(this.newDog);
            this._httpService.updateDog(this.newDog).subscribe(function (data) {
                data = _this.newDog;
                console.log(data);
                _this.secondForm = true;
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
    };
    WeightformComponent.prototype.onClick = function () {
        var x = document.querySelector("#showFormTwo");
        if (x) {
            x.scrollIntoView();
        }
    };
    WeightformComponent.prototype.getDogData = function (id) {
        var _this = this;
        var obs = this._httpService.singleDog(id);
        obs.subscribe(function (data) {
            _this.newDog = data;
            console.log(_this.newDog);
        });
    };
    WeightformComponent.prototype.findFoodIntake = function (dog) {
        if (dog.activity == "average") {
            this.newDog.foodintake = dog.weight * 2.5 / 100;
        }
        else if (dog.activity == "active") {
            this.newDog.foodintake = dog.weight * 3 / 100;
        }
        else if (dog.activity == "inactive") {
            this.newDog.foodintake = dog.weight * 2.2 / 100;
        }
    };
    WeightformComponent.prototype.findCaloricIntake = function (dog) {
        if (dog.targetweight > 0 && dog.targetweight < 8) {
            this.newDog.calorieintake = 250;
        }
        else if (dog.targetweight >= 8 && dog.targetweight < 11) {
            this.newDog.calorieintake = 350;
        }
        else if (dog.targetweight >= 11 && dog.targetweight < 17) {
            this.newDog.calorieintake = 450;
        }
        else if (dog.targetweight >= 17 && dog.targetweight < 22) {
            this.newDog.calorieintake = 600;
        }
        else if (dog.targetweight >= 22 && dog.targetweight < 27) {
            this.newDog.calorieintake = 750;
        }
        else if (dog.targetweight >= 27 && dog.targetweight < 33) {
            this.newDog.calorieintake = 875;
        }
        else if (dog.targetweight >= 33 && dog.targetweight < 38) {
            this.newDog.calorieintake = 1000;
        }
        else if (dog.targetweight >= 38 && dog.targetweight < 44) {
            this.newDog.calorieintake = 1125;
        }
        else if (dog.targetweight >= 44 && dog.targetweight < 49) {
            this.newDog.calorieintake = 1250;
        }
        else if (dog.targetweight >= 49 && dog.targetweight < 55) {
            this.newDog.calorieintake = 1375;
        }
        else if (dog.targetweight >= 55 && dog.targetweight < 60) {
            this.newDog.calorieintake = 1500;
        }
        else if (dog.targetweight >= 60 && dog.targetweight < 66) {
            this.newDog.calorieintake = 1600;
        }
        else if (dog.targetweight >= 66 && dog.targetweight < 71) {
            this.newDog.calorieintake = 1700;
        }
        else if (dog.targetweight >= 71 && dog.targetweight < 77) {
            this.newDog.calorieintake = 1790;
        }
        else if (dog.targetweight >= 77 && dog.targetweight < 82) {
            this.newDog.calorieintake = 1880;
        }
        else if (dog.targetweight >= 82 && dog.targetweight < 87) {
            this.newDog.calorieintake = 1950;
        }
        else if (dog.targetweight >= 87 && dog.targetweight < 92) {
            this.newDog.calorieintake = 2100;
        }
        else if (dog.targetweight >= 92 && dog.targetweight < 99) {
            this.newDog.calorieintake = 2200;
        }
        else if (dog.targetweight >= 99 && dog.targetweight < 105) {
            this.newDog.calorieintake = 2300;
        }
        else if (dog.targetweight >= 105) {
            this.newDog.calorieintake = 2500;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], WeightformComponent.prototype, "secondForm", void 0);
    WeightformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weightform',
            template: __webpack_require__(/*! ./weightform.component.html */ "./src/app/weightform/weightform.component.html"),
            styles: [__webpack_require__(/*! ./weightform.component.css */ "./src/app/weightform/weightform.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], WeightformComponent);
    return WeightformComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eugenialeung/Desktop/DojoAssignments/MEAN/Project/HomemadeFood/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map