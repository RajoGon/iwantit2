webpackJsonp([1,4],{

/***/ 389:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 389;


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(508);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'my-app',
            template: "<navigation></navigation><router-outlet></router-outlet><myfooter></myfooter>",
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_product_service_component__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__["a" /* RegisterService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/app.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navigation_component_navigation_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navigation_component_login_component_login_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navigation_component_register_component_register_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_footer_component_footer_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_category_component_category_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_advanced_search_component_advanced_search_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_product_display_component_product_display_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_myaccount_myaccount_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_product_view_product_view_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_advertisement_filter_pipe__ = __webpack_require__(519);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
                    { path: 'myaccount', component: __WEBPACK_IMPORTED_MODULE_14__components_myaccount_myaccount_component__["a" /* MyAccountComponent */] },
                    { path: 'productview', component: __WEBPACK_IMPORTED_MODULE_15__components_product_view_product_view_component__["a" /* ProductViewComponent */] }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__components_navigation_component_navigation_component__["a" /* NavigationComponent */], __WEBPACK_IMPORTED_MODULE_7__components_navigation_component_login_component_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navigation_component_register_component_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_9__components_footer_component_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_category_component_category_component__["a" /* CategoryComponent */], __WEBPACK_IMPORTED_MODULE_12__components_home_advanced_search_component_advanced_search_component__["a" /* AdvancedSearchComponent */], __WEBPACK_IMPORTED_MODULE_13__components_home_product_display_component_product_display_component__["a" /* ProductDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_myaccount_myaccount_component__["a" /* MyAccountComponent */], __WEBPACK_IMPORTED_MODULE_15__components_product_view_product_view_component__["a" /* ProductViewComponent */], __WEBPACK_IMPORTED_MODULE_16__pipes_advertisement_filter_pipe__["a" /* FilterPipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/app.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'myfooter',
            template: __webpack_require__(675),
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/footer.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvancedSearchComponent = (function () {
    function AdvancedSearchComponent(productService, registerService) {
        var _this = this;
        this.productService = productService;
        this.registerService = registerService;
        this.dateList = [];
        //get dates
        this.productService.getDateConditions().subscribe(function (response) {
            _this.dateList = response.data.dateList;
            console.log('date conditions are ', _this.dateList);
        }, function (error) {
            console.log('Error');
        });
    }
    AdvancedSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'advanced-search',
            template: __webpack_require__(676),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__["a" /* RegisterService */]) === 'function' && _b) || Object])
    ], AdvancedSearchComponent);
    return AdvancedSearchComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/advanced.search.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service_component__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = (function () {
    function CategoryComponent(productService, router) {
        var _this = this;
        this.productService = productService;
        this.router = router;
        this.categoryList = [];
        this.selectedCategory = 'Featured Products';
        this.searchedList = [];
        this.productService.fetchCategory().subscribe(function (response) {
            _this.categories = response.data.itemList;
            _this.generateCategories();
        }, function (error) {
            console.log('Error');
        });
    }
    CategoryComponent.prototype.generateCategories = function () {
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var x = _a[_i];
            this.categoryList.push(x.name);
        }
    };
    CategoryComponent.prototype.setCategory = function (category) {
        this.selectedCategory = category;
        this.productService.sendCategory(this.selectedCategory);
    };
    CategoryComponent.prototype.searchAds = function (searchText) {
        //this.productService.searchbyText(searchText);
        this.router.navigate(['/'], { queryParams: { search: searchText } });
        //   .subscribe(
        //   (response)=>{
        //     this.searchedList=response.data.advertiseList;
        //      this.productService.sendSearchedProducts(this.searchedList);      
        //   },
        //   (error)=>console.log('error')
        // )
    };
    CategoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'category',
            template: __webpack_require__(677),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service_component__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_product_service_component__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], CategoryComponent);
    return CategoryComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/category.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'home',
            template: __webpack_require__(678),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/home.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDisplayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDisplayComponent = (function () {
    function ProductDisplayComponent(productService, router, activatedRoute) {
        var _this = this;
        this.productService = productService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.productList = [];
        this.selectedCategory = null;
        this.searchText = null;
        this.productService.getAllProducts().subscribe(function (response) {
            _this.products = response.data.advertiseList;
            _this.generateCategories(null);
        }, function (error) {
            console.log('Error');
        });
    }
    ProductDisplayComponent.prototype.ngDoCheck = function () {
        this.selectedCategory = this.productService.getCategory();
        if (this.selectedCategory != null) {
            this.generateCategories(this.selectedCategory);
        }
    };
    ProductDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (queryParam) {
            _this.searchText = queryParam['search'];
            if (_this.searchText != null) {
                _this.productService.searchByText(_this.searchText).subscribe(function (response) {
                    _this.products = response.data.advertiseList;
                    _this.generateCategories(null);
                }, function (error) {
                    console.log('Error');
                });
                console.log("Search text", _this.searchText);
            }
        });
    };
    // subscribe to router event
    ProductDisplayComponent.prototype.generateCategories = function (categories) {
        console.log("getting", categories);
        this.productList = [];
        this.selectedCategory = categories;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var x = _a[_i];
            if (this.selectedCategory == null || this.selectedCategory == "All Products") {
                this.productList.push(x);
            }
            else {
                console.log("specific.");
                if (x.category == this.selectedCategory) {
                    this.productList.push(x);
                }
            }
        }
        this.selectedCategory = null;
    };
    ProductDisplayComponent.prototype.goToProduct = function (productToView) {
        var productToSend;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x.id == productToView.id) {
                this.productService.sendProduct(x);
            }
        }
        this.router.navigate(['/productview']);
    };
    ProductDisplayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'product-display',
            template: __webpack_require__(679),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], ProductDisplayComponent);
    return ProductDisplayComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/product.display.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_register_service_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyAccountComponent = (function () {
    function MyAccountComponent(activatedRoute, productService, registerService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.registerService = registerService;
        this.router = router;
        this.updateSuccess = true;
        this.userInfo = [];
        this.categoryList = [];
        this.loginToken = null;
        this.loginToken2 = null;
        this.productList = [];
        this.postDate = null;
        this.toPost = false;
        this.toUpdate = true;
        this.actionList = [];
        this.postSuccess = true;
        this.currentAction = "Post a new ad";
        this.productUpdate = {
            postId: null,
            status: "Open",
            name: this.productName,
            title: this.productTitle,
            description: this.productDescription,
            category: this.productcategory
        };
        this.productService.fetchCategory().subscribe(function (response) {
            _this.categories = response.data.itemList;
            _this.generateCategories();
        }, function (error) {
            console.log('Error');
        });
        //get user info
        this.username = this.registerService.getUser();
        this.registerService.getUserInfo(this.username, this.loginToken).subscribe(function (response) {
            _this.userInfo = response.data.user;
            console.log('User details are', _this.userInfo);
        }, function (error) {
            console.log('Error');
        });
        //getproducts
        // this.productService.getAllProducts().subscribe(
        // (response) => {               
        //     this.products=response.data.advertiseList;            
        //     this.generateProducts(this.products);
        // },
        // (error) => {
        //   console.log('Error');
        // });
        this.productService.getUserProducts(this.loginToken = this.registerService.getToken()).subscribe(function (response) {
            console.log('Success', response.data.mypostList);
            _this.products = response.data.mypostList;
            _this.generateProducts(_this.products);
        }, function (error) {
            console.log('Error');
        });
        //get actions
        this.productService.getActions(this.loginToken).subscribe(function (response) {
            _this.actionList = response.data.actionList;
            console.log('actions are ', _this.actionList);
        }, function (error) {
            console.log('Error');
        });
    }
    ;
    MyAccountComponent.prototype.generateCategories = function () {
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var x = _a[_i];
            this.categoryList.push(x.name);
        }
    };
    MyAccountComponent.prototype.generateProducts = function (products) {
        this.productList = [];
        var username = this.registerService.getUser();
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var x = _a[_i];
            // if(x.userId == username ){
            //   x.createdDate=new Date(x.createdDate).toLocaleDateString('en-GB');
            //   this.productList.push(x);
            // }
            this.productList.push(x);
        }
        console.log('products are ', this.productList, ' of user ', username);
    };
    MyAccountComponent.prototype.ngDoCheck = function () {
        this.loginToken = this.registerService.getToken();
        //console.log('In Account',this.loginToken);   
        // this.registerService.getUserInfo(this.username,this.loginToken).subscribe(
        //     (response) => {               
        //         this.userInfo=response.data.user;            
        //         console.log('User details are', this.userInfo);
        //     },
        //     (error) => {
        //       console.log('Error');
        //     });
    };
    MyAccountComponent.prototype.postAd = function (productTitle, productName, productDescription, productCategory) {
        var _this = this;
        this.productService.postNewAd(this.loginToken, productTitle, productCategory, productDescription, productName).subscribe(function (response) {
            _this.postSuccess = false;
            _this.router.navigate(['/']);
        });
    };
    //updatead
    MyAccountComponent.prototype.updateAd = function (id, title, category, description, name) {
        console.log('product id is', id);
        this.toPost = true;
        this.toUpdate = false;
        this.productUpdate = {
            postId: id,
            status: "Open",
            name: name,
            title: title,
            description: description,
            category: category
        };
        // this.productService.updateAd(this.loginToken,this.productUpdate);         
    };
    MyAccountComponent.prototype.update = function (id, productTitle, productName, productDescription, productCategory, action) {
        var _this = this;
        this.productUpdate = {
            postId: id,
            status: "Open",
            name: productName,
            title: productTitle,
            description: productDescription,
            category: productCategory
        };
        this.currentAction = "Edit your ad";
        if (action == "Update") {
            this.productService.updateAdOnServer(this.loginToken, this.productUpdate).subscribe(function (response) {
                _this.updateSuccess = false;
                _this.toPost = false;
                _this.toUpdate = true;
                _this.router.navigate(['/']);
            }, function (error) { return console.log('could not update'); });
        }
        else {
            this.productService.deleteAdOnServer(this.loginToken, this.productUpdate).subscribe(function (response) {
                _this.updateSuccess = false;
                _this.toPost = false;
                _this.toUpdate = true;
                _this.router.navigate(['/']);
            }, function (error) { return console.log('could not delete'); });
        }
    };
    MyAccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'myaccount',
            template: __webpack_require__(680),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service_component__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_product_service_component__["a" /* ProductService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_register_service_component__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_register_service_component__["a" /* RegisterService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], MyAccountComponent);
    return MyAccountComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/myaccount.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        this.showError = true;
        this.showSuccess = true;
        this.childEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
    }
    LoginComponent.prototype.loginUser = function (username, password) {
        var _this = this;
        this.loginDetails = {
            userName: username,
            password: password
        };
        this.registerService.login(this.loginDetails).subscribe(function (response) {
            _this.loginToken = response.data['auth-token'];
            localStorage.setItem("auth-token", _this.loginToken);
            _this.username = response.data.userId;
            localStorage.setItem("userId", _this.username);
            if (_this.loginToken == null) {
                _this.showError = false;
                _this.showSuccess = true;
            }
            else {
                _this.showSuccess = false;
                _this.showError = true;
                _this.registerService.sendToken(_this.loginToken, _this.username);
                document.getElementById('closeModal').click();
                _this.showSuccess = true;
                window.location.reload();
                //this.router.navigate(['/']); 
                _this.childEvent.emit('Hello nav');
            }
        }, function (error) {
            console.log('Error');
            _this.showError = false;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'login',
            template: __webpack_require__(681),
            outputs: ['childEvent']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__["a" /* RegisterService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/login.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        this.loginToken = "none";
        this.childData = null;
        this.logoutToken = null;
        this.showLogout = true;
        this.showLogout = true;
        console.log("Inside contruct");
        this.loginToken = localStorage.getItem("auth-token");
        this.loginToken = "none";
        console.log("login token", this.loginToken);
        if (this.loginToken == "none" || this.loginToken == null || this.loginToken === null) {
            this.showLogout = true;
            console.log("showlogout in construct", this.showLogout, this.loginToken);
        }
        else {
            this.showLogout = false;
            console.log("showlogout in construct", this.showLogout, this.loginToken);
        }
    }
    // ngDoCheck(){
    //   this.showLogout = false;
    //    this.loginToken=localStorage.getItem("auth-token");
    //     console.log("login token",this.loginToken);
    //     if(this.loginToken===""){
    //       this.showLogout = true;
    //       console.log("showlogout", this.showLogout,this.loginToken);
    //     }else{
    //       this.showLogout = false;
    //       console.log("showlogout", this.showLogout,this.loginToken);
    //     }
    //    console.log('In Nav ',this.loginToken);      
    // }
    NavigationComponent.prototype.ngOnInit = function () {
        this.showLogout = true;
        this.loginToken = localStorage.getItem("auth-token");
        console.log("login token", this.loginToken);
        if (this.loginToken == "none" || this.loginToken == null || this.loginToken === null) {
            this.showLogout = true;
            console.log("showlogout in init", this.showLogout, this.loginToken);
        }
        else {
            this.showLogout = false;
            console.log("showlogout in init", this.showLogout, this.loginToken);
        }
    };
    NavigationComponent.prototype.logoutUser = function () {
        var _this = this;
        console.log("Logging out");
        this.logoutToken = this.loginToken;
        this.loginToken = null;
        this.registerService.logoutUser(this.logoutToken).subscribe(function (response) {
            _this.loginToken = localStorage.getItem("auth-token");
            console.log("login token", _this.loginToken);
            if (_this.loginToken == "none") {
                _this.showLogout = true;
                console.log("showlogout in logout", _this.showLogout, _this.loginToken);
            }
            else {
                _this.showLogout = false;
                console.log("showlogout in logout", _this.showLogout, _this.loginToken);
            }
            _this.registerService.sendToken("none", "");
            _this.router.navigate(['']);
        }, function (error) {
        });
        this.loginToken = "none";
        this.registerService.sendToken("none", "");
        this.router.navigate(['']);
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'navigation',
            template: __webpack_require__(682)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__["a" /* RegisterService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/navigation.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = (function () {
    function RegisterComponent(registerService) {
        this.registerService = registerService;
        this.showError = true;
        this.showSuccess = true;
    }
    RegisterComponent.prototype.registerUser = function (username, firstname, lastname, password, email, phone) {
        var _this = this;
        this.userdata = {
            userName: username,
            firstName: firstname,
            lastName: lastname,
            password: password,
            email: email,
            phone: phone
        };
        this.registerService.sendUserData(this.userdata).subscribe(function (response) {
            _this.showSuccess = false;
            _this.showError = true;
            _this.data = response;
            console.log(_this.data);
        }, function (error) {
            _this.showError = false;
            _this.showSuccess = true;
            _this.data = error;
            console.log(error);
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'register',
            template: __webpack_require__(683)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__["a" /* RegisterService */]) === 'function' && _a) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/register.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductViewComponent = (function () {
    function ProductViewComponent(productService, registerService) {
        this.productService = productService;
        this.registerService = registerService;
        this.messagesent = true;
    }
    ProductViewComponent.prototype.ngOnInit = function () {
        this.loginToken = this.registerService.getToken();
        this.postId = this.productService.getPostId();
        this.productService.getspecificproduct(this.loginToken, this.postId);
        this.productToView = this.productService.getProduct();
        //console.log("in product view",this.productToView ); 
        this.postDate = new Date(this.productToView.createdDate).toLocaleDateString('en-GB');
        //console.log('date',this.postDate);
        if (this.postDate != null || this.postDate !== null || this.postDate != "Invalid Date")
            this.productToView.createdDate = this.postDate;
        console.log('product id is do check ', this.productToView.id, this.postDate);
    };
    // ngDoCheck(){
    //    this.loginToken=this.registerService.getToken();
    //    this.postId=this.productService.getPostId();
    //   this.productService.getspecificproduct(this.loginToken,this.postId);
    //   this.productToView=this.productService.getProduct();
    //   //console.log("in product view",this.productToView ); 
    //   this.postDate=new Date(this.productToView.createdDate).toLocaleDateString('en-GB');
    //   //console.log('date',this.postDate);
    //   if(this.postDate!=null || this.postDate!==null || this.postDate!="Invalid Date" )
    //   this.productToView.createdDate=this.postDate;
    //   console.log('product id is do check ',this.productToView.id,this.postDate);
    // }
    ProductViewComponent.prototype.sendMessage = function (message) {
        var _this = this;
        this.messageToken = this.registerService.getToken();
        this.toSendMessage = message;
        this.productService.sendMessagetoSeller(this.toSendMessage, this.productToView.id, this.messageToken).subscribe(function (response) {
            _this.messagesent = false;
        }, function (error) {
            console.log('error');
        });
    };
    ProductViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'product-view',
            template: __webpack_require__(684),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__["a" /* RegisterService */]) === 'function' && _b) || Object])
    ], ProductViewComponent);
    return ProductViewComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/product.view.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterPipe = (function () {
    function FilterPipe() {
        this.filtered = [];
    }
    FilterPipe.prototype.transform = function (value, input) {
        this.filtered = [];
        if (!value)
            return [];
        if (input) {
            input = input.toLowerCase();
            // return value.title.filter(function (el: any) {
            //     return el.toLowerCase().indexOf(input) > -1;
            // })
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var x = value_1[_i];
                if (x.title.toLowerCase().includes(input)) {
                    this.filtered.push(x);
                    console.log(x.title, "selected");
                }
            }
            console.log(this.filtered);
            return this.filtered;
        }
        return value;
    };
    FilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Pipe */])({
            name: 'FilterPipe',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], FilterPipe);
    return FilterPipe;
}());
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/advertisement.filter.pipe.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/environment.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterService = (function () {
    function RegisterService(_http) {
        this._http = _http;
    }
    RegisterService.prototype.ngOnInit = function () {
        localStorage.setItem("auth-token", "none");
        localStorage.setItem("userId", "none");
        console.log("Register init service", localStorage.getItem("auth-token"));
    };
    RegisterService.prototype.sendUserData = function (userData) {
        var userdataRegister = {
            "userName": userData.username,
            "firstName": userData.firstname,
            "lastName": userData.lastname,
            "password": userData.password,
            "email": userData.email,
            "phone": userData.phone
        };
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        return this._http.post('https://testwant.herokuapp.com/register', userdataRegister, this.options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RegisterService.prototype.login = function (loginData) {
        this.loginDetails = {
            userName: loginData.userName,
            password: loginData.password
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post('https://testwant.herokuapp.com/login', this.loginDetails, options).map(function (response) { return response.json(); });
    };
    RegisterService.prototype.sendToken = function (loginToken, userId) {
        this.loginToken = loginToken;
        this.username = userId;
        localStorage.setItem("auth-token", this.loginToken);
        localStorage.setItem("userId", this.username);
        console.log('In service', this.loginToken, this.username);
    };
    RegisterService.prototype.getToken = function () {
        console.log("get token", localStorage.getItem("auth-token"));
        return localStorage.getItem("auth-token");
        //return this.loginToken;
    };
    RegisterService.prototype.getUser = function () {
        return localStorage.getItem("userId");
        //return this.username;
    };
    RegisterService.prototype.logoutUser = function (loginToken) {
        localStorage.setItem("auth-token", "none");
        localStorage.setItem("userId", "");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('auth-token', localStorage.getItem("auth-token"));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.delete('https://testwant.herokuapp.com/logout', options)
            .map(function (response) { return response.json(); });
    };
    RegisterService.prototype.getUserInfo = function (username, loginToken) {
        console.log('Getting details', localStorage.getItem("auth-token"), ' name is ', localStorage.getItem("userId"));
        //console.log('uname is ',username, ' token is ',this.loginToken);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('auth-token', localStorage.getItem("auth-token"));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.get('https://testwant.herokuapp.com/user?userId=' + localStorage.getItem("userId"), options).map(function (response) { return response.json(); });
    };
    RegisterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], RegisterService);
    return RegisterService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/register.service.component.js.map

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<br><br>\r\n\t\t<div class=\"footer\">\r\n\t\t    <div  class=\"row\">\r\n                <div class=\"col-md-4\" id=\"contact\">\r\n                    Contact us :<br><hr>\r\n                    <span class=\"glyphicon glyphicon-envelope\"> Customersupport@iwantthat.com</span><br>\r\n                    <span class=\"glyphicon glyphicon-phone-alt\"> 9766110856/98872981</span><br>\r\n                    <a id=\"web\" href=\"#\"><span class=\"glyphicon glyphicon-bookmark\"> https://www.iwantthat.com</span></a>\r\n\r\n\r\n                </div>\r\n                <div class=\"col-md-4\" id=\"contact2\">\r\n           \r\n                    Connect to us Socially:<br><hr>\r\n                    <div class=\"row\">\r\n                    <div class=\"col-md-2\">\r\n                      <a id=\"\" href=\"#\"><img class=\"img-circle\" style=\"height:50px; width:50px; \" src=\"images/fb.png\" alt=\"Nature\" ></a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                     <a id=\"\" href=\"#\"><img class=\"img-circle\" style=\"height:50px; width:50px; \" src=\"images/twit.jpg\" alt=\"Nature\" ></a>\r\n                     </div>\r\n                     <div class=\"col-md-2\">\r\n                    <a id=\"\" href=\"#\"> <img class=\"img-circle\" style=\"height:50px; width:50px; \" src=\"images/insta.jfif\" alt=\"Nature\" ></a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                     <a id=\"\" href=\"#\"><img class=\"img-circle\" style=\"height:50px; width:50px; \" src=\"images/ln.png\" alt=\"Nature\" ></a>\r\n                     </div>\r\n                     <div class=\"col-md-2\">\r\n                     <a id=\"\" href=\"#\"><img class=\"img-circle\" style=\"height:50px; width:50px; \" src=\"images/git.png\" alt=\"Nature\" ></a>\r\n                     </div>\r\n                     <div class=\"col-md-2\">\r\n                     <a id=\"\" href=\"#\"><img class=\"img-circle\" style=\"height:50px; width:50px; \" src=\"images/gplus.png\" alt=\"Nature\" ></a>\r\n                     </div>\r\n                </div>\r\n\r\n                </div>\r\n                  <div class=\"col-md-4\">\r\n                     You will find us here:<br><hr>\r\n                     <!-- <span class=\"glyphicon glyphicon-object-align-vertical\"> Sr. No. 33/1, Opposite Chhatrapati Shivaji Sports Complex, near Octroi Naka, Balewadi, Pune, Maharashtra 411045</span><br><br> -->\r\n                     <span class=\"glyphicon glyphicon-home\"> A804, Off Wakad Hinjewadi Road, Opp Sukhwani Petrol Pump, Wakad, Pune, 411057</span>\r\n                </div>\r\n          </div>\r\n          <div class=\" row copyright\">\r\n          \t\t&copy; I want that pvt ltd.\r\n          </div>\r\n\t\t</div>"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "\t\t<div class=\"col-md-3 asearch\"  >\r\n\t\t\t<div scrollSpyElement=\"test\" id=\"aser2\">\r\n\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t<fieldset>\r\n\r\n\t\t\t\t\t<!-- Form Name -->\r\n\t\t\t\t\t<legend>Advanced Search(Coming Soon!)</legend>\r\n\r\n\t\t\t\t\t<!-- Text input-->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <label class=\"col-md-4 control-label\" for=\"searchtext\">Category:</label>  \r\n\t\t\t\t\t  <div class=\"col-md-8\">\r\n\t\t\t\t\t  <input id=\"searchtext\" name=\"searchtext\" placeholder=\"Enter any text\" class=\"form-control input-md\" type=\"text\">\r\n\t\t\t\t\t    \r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- Text input-->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <label class=\"col-md-4 control-label\" for=\"postedby\">Posted by:</label>  \r\n\t\t\t\t\t  <div class=\"col-md-8\">\r\n\t\t\t\t\t  <input id=\"postedby\" name=\"postedby\" placeholder=\"placeholder\" class=\"form-control input-md\" type=\"text\">\r\n\t\t\t\t\t    \r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t<!-- Search input-->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <label class=\"col-md-4 control-label\" for=\"fromdate\">Date Conditions:</label>\r\n\t\t\t\t\t  <div class=\"col-md-8\">\r\n\t\t\t\t\t    <select name=\"choose\" #updateCategory class=\"form-control\"  ngModel>\r\n\t\t\t\t\t\t\t\t    <option *ngFor=\"let y of dateList\">{{y.datecondition}}</option>\r\n\t\t\t\t\t\t\t\t  </select>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- Search input-->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <label class=\"col-md-4 control-label\" for=\"todate\">Select Date:</label>\r\n\t\t\t\t\t  <div class=\"col-md-8\">\r\n\t\t\t\t\t    <input type=\"date\" name=\"dateSelect\">\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- Select Basic -->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <label class=\"col-md-4 control-label\" for=\"sortby\">Sort By:</label>\r\n\t\t\t\t\t  <div class=\"col-md-8\">\r\n\t\t\t\t\t    <select id=\"sortby\" name=\"sortby\" class=\"form-control\">\r\n\t\t\t\t\t      <option value=\"1\">Price low to high</option>\r\n\t\t\t\t\t      <option value=\"2\">Price high to low</option>\r\n\t\t\t\t\t      <option value=\"3\">Latest</option>\r\n\t\t\t\t\t      <option value=\"4\">Popularity</option>\r\n\t\t\t\t\t    </select>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- Text input-->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <label class=\"col-md-4 control-label\" for=\"index\">Start Index:</label>  \r\n\t\t\t\t\t  <div class=\"col-md-8\">\r\n\t\t\t\t\t  <input id=\"index\" name=\"index\" placeholder=\"Enter index\" class=\"form-control input-md\" type=\"text\">\r\n\t\t\t\t\t    \r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- Text input-->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <label class=\"col-md-4 control-label\" for=\"records\">Search Records</label>  \r\n\t\t\t\t\t  <div class=\"col-md-8\">\r\n\t\t\t\t\t  <input id=\"records\" name=\"records\" placeholder=\"Enter record\" class=\"form-control input-md\" type=\"text\">\r\n\t\t\t\t\t  <div >  <button [disabled]=\"true\"  type=\"button\" id=\"searchButton\" class=\"btn btn-default\">Comming Soon!</button></div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</fieldset>\r\n\t\t\t\t\t</form>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t</div>"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "\t\t<div id=\"cat\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\" col-md-2 dropdown\" id=\"catdropdown\">\r\n  \t\t\t\t<button id=\"catbutton\" class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Categories\r\n  \t\t\t\t<span class=\"caret\"></span></button>\r\n  \t\t\t\t<ul class=\"dropdown-menu\" id=\"categorydropdown\">\r\n\t  \t\t\t\t<div class=\"row>\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t    \t\t\t\t<li><a  (click)=\"setCategory('All Products')\" href=\"#\"><span><img src=\"images/vehicle.png\" height=\"25px\"></span> All</a></li>\r\n\t\t    \t\t\t</div>\r\n\t\t  \t\t\t\t<div class=\"col-md-3\" *ngFor=\"let x of categoryList\">\r\n\t\t    \t\t\t\t<li><a  (click)=\"setCategory(x)\" href=\"#\"><span><img src=\"images/vehicle.png\" height=\"25px\"></span> {{x}}</a></li>\r\n\t\t    \t\t\t</div>\r\n\t    \t\t\t</div>\r\n  \t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6\" id=\"payby\">\r\n\t\t\t\t\t<!-- <button  type=\"button\" class=\"btn btn-success\">Advanced Search</button> -->\r\n\t\t\t\t\t<img class=\"img-responsive\" src=\"images/payment2.png\" alt=\"Los Angeles\" width=\"300\" height=\"20\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4 webdesigntuts-workshop\">\r\n\t\t\t\t\t<form action=\"\" method=\"\">\t\r\n\t\t\t\t\t<div>\t    \r\n\t\t\t\t\t\t<input type=\"search\" #searchProduct placeholder=\"What are you looking for?\">\t\t    \t\r\n\t\t\t\t\t\t<button (click)=\"searchAds(searchProduct.value)\">Search</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t<!-- Banner -->\r\n\t\t<div class=\"banner\">\r\n\t\t\t<!-- <img  src=\"images/advert.jpg\" > -->\r\n\t\t\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Indicators -->\r\n\t\t\t\t\t\t\t\t\t\t  <ol class=\"carousel-indicators\">\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n\t\t\t\t\t\t\t\t\t\t  </ol>\r\n\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Wrapper for slides -->\r\n\t\t\t\t\t\t\t\t\t\t  <div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item active\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\" intr\" src=\"images/advert.jpg\" alt=\"Los Angeles\" >\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive intr\" src=\"images/advert2.jpg\" alt=\"Chicago\" >\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"intr\" src=\"images/advert3.jpg\" alt=\"New York\" >\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Left and right controls -->\r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- Products -->\r\n\t\t<h3>&nbsp;&nbsp;<b>{{selectedCategory}}</b> </h3><hr>"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<category></category>\r\n<!--<h3>&nbsp;&nbsp;<b>Featured Products</b> </h3><hr>-->\r\n\t\t<!-- First row -->\r\n\t\t<br>\r\n<div class=\"row\" id=\"aser\">\r\n    <advanced-search></advanced-search>\r\n    <product-display></product-display>\r\n</div>"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "\t\t<div class=\"col-md-9\"> <!-- All products start -->\r\n\t\t<div class=\"containter\" id=\"allproducts\">\r\n\t\t\t<div class=\"row products\">\r\n\t\t\t<a routerLink=\"/productview\" (click)=\"goToProduct(x)\" *ngFor=\"let x of productList\">\r\n\t\t\t\t<div class=\"col-md-4 hvr-float-shadow\" style=\"margin-bottom: 20px\">\r\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"images/prod1.jpg\" alt=\"Chania\" >\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tProduct Name\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t{{x.title| slice:0:10}}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tCategory\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t{{x.category}}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPosted By\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t{{x.name | slice:0:15}}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPosted on \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t14/07/2017\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t\t<!--<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPrice \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t1,41,000\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t\t<div class=\"desc2\">\r\n\t\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\tDescription\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t{{x.description| slice:0:15}} \r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t\t\t<!--<a href=\"productview.html\">\r\n\t\t\t\t<div class=\"col-md-4 hvr-float-shadow\">\r\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"images/prod1.jpg\" alt=\"Chania\" >\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tProduct Name\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tLaptop\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tCategory\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tElectronics\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPosted By\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tAditya\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPosted on \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t14/07/2017\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPrice \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t1,41,000\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc2\">\r\n\t\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\tDescription\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\tAn alienware laptop which the latest nvidia 1000 series gpu and an overclocked cpu. \r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t\t\t<a href=\"productview.html\">\r\n\t\t\t\t<div class=\"col-md-4 hvr-float-shadow\">\r\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"images/prod1.jpg\" alt=\"Chania\" >\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tProduct Name\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tLaptop\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tCategory\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tElectronics\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPosted By\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tAditya\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPosted on \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t14/07/2017\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPrice \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t1,41,000\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc2\">\r\n\t\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\tDescription\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\tAn alienware laptop which the latest nvidia 1000 series gpu and an overclocked cpu. \r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</a>-->\r\n\r\n\t\t\t</div>\r\n\t\t<!-- </div> -->\r\n\t\t<br>\r\n\r\n\r\n\t\t</div>\r\n\t\t</div> <!-- All products end -->"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "\t\t<category></category>\r\n        <br>\r\n\t\t<div class=\"container\">\r\n\t\t  <div class=\"jumbotron\" id=\"myaccjumbo\">\r\n\t\t    <h1>Welcome {{userInfo.firstName}} {{userInfo.lastName}},</h1> \r\n\t\t    <p>Here you can edit your account details, view your ads, and post new ads</p> \r\n\t\t  </div>\r\n\t\t <!-- Panels -->\r\n\t\t  <div class=\"panel-group\" id=\"accordion\">\r\n\t\t  <div class=\"panel panel-default\">\r\n\t\t    <div class=\"panel-heading\">\r\n\t\t      <h4 class=\"panel-title\">\r\n\t\t        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">\r\n\t\t        Profile</a>\r\n\t\t      </h4>\r\n\t\t    </div>\r\n\t\t    <div id=\"collapse1\" class=\"panel-collapse collapse in\">\r\n\t\t      \t<div class=\"userdetails\">\r\n\t\t\t\t    <div class=\"row panel-body\">\r\n\t\t\t\t        <div class=\"col-md-6\"> Name</div>\r\n\t\t\t\t        <div class=\"col-md-6\"> {{userInfo.firstName}} {{userInfo.lastName}}</div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div class=\"row panel-body\">\r\n\t\t\t\t        <div class=\"col-md-6\"> Username</div>\r\n\t\t\t\t        <div class=\"col-md-6\"> {{userInfo.userName}}</div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div class=\"row panel-body\">\r\n\t\t\t\t        <div class=\"col-md-6\"> Email Address</div>\r\n\t\t\t\t        <div class=\"col-md-6\"> {{userInfo.email}}</div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div class=\"row panel-body\">\r\n\t\t\t\t        <div class=\"col-md-6\"> Phone</div>\r\n\t\t\t\t        <div class=\"col-md-6\"> {{userInfo.phone}}</div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t</div>\r\n\t\t    </div>\r\n\t\t  </div>\r\n\t\t  <div class=\"panel panel-default\" id=\"adhistory\">\r\n\t\t    <div class=\"panel-heading\">\r\n\t\t      <h4 class=\"panel-title\">\r\n\t\t        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\">\r\n\t\t        My Advertisement History</a>\r\n\t\t      </h4>\r\n\t\t    </div>\r\n\t\t    <div id=\"tfheader\">\r\n\r\n\t\t\t\t        <input type=\"text\" id=\"tfq\" [(ngModel)]=\"queryString\" class=\"tftextinput2\" size=\"21\" maxlength=\"120\" placeholder=\"Search a specific ad by title\">\r\n\r\n\t\t\t\t<div class=\"tfclear\"></div>\r\n\t\t\t</div>\r\n\t\t    <div id=\"collapse2\" class=\"panel-collapse collapse addetails\">\r\n\t\t\t    <div class=\"row panel-body adpad\" *ngFor=\"let x of productList| FilterPipe: queryString\"> <!-- first ad -->\r\n\t\t\t\t    <div class=\"col-md-5\">\r\n\t\t\t\t    \t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t    \t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<b>Ad id: {{x.id}} </b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\tPosted on {{x.createdDate}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<b>Product Name</b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t{{x.title}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<b>Category</b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t{{x.category}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<b>Ad status</b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t{{x.status}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t<b>Description:</b>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t{{x.description}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<a (click)=\"updateAd(x.id,x.title,x.category,x.description,x.name)\">Edit Ad</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div class=\"col-md-7\">\r\n\t\t\t\t    \t\t\t    \r\n\t\t\t\t\t\t\t\t      <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Indicators -->\r\n\t\t\t\t\t\t\t\t\t\t  <ol class=\"carousel-indicators\">\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n\t\t\t\t\t\t\t\t\t\t  </ol>\r\n\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Wrapper for slides -->\r\n\t\t\t\t\t\t\t\t\t\t  <div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item active\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_1.jpg\" alt=\"Los Angeles\" height=\"300\" width=\"400\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_2.jfif\" alt=\"Chicago\" height=\"300\" width=\"400\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_3.jfif\" alt=\"New York\" height=\"300\" width=\"400\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Left and right controls -->\r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div><!-- product1 --> <!-- second ad -->\r\n\t\t\t\t\t<!--<div class=\"row panel-body\">\r\n\t\t\t\t    <div class=\"col-md-5\">\r\n\t\t\t\t    \t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t    \t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<b>Advertisement No.2</b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\tPosted on 14/07/2017\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<b>Product Name</b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\tLaptop\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<b>Category</b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\tElectronics\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<b>Price</b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t1,14,000\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t<b>Description:</b>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\tAn alienware laptop which the latest nvidia 1000 series gpu and an overclocked cpu. \r\n\t\t\t\t\t\t\t\tAn alienware laptop which the latest nvidia 1000 series gpu and an overclocked cpu\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<a>Update Ad</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<a>Delete Ad</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div class=\"col-md-7\">\r\n\t\t\t\t    \t\t\t    \r\n\t\t\t\t\t\t\t\t      <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\t\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t\t  <ol class=\"carousel-indicators\">\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n\t\t\t\t\t\t\t\t\t\t  </ol>\r\n\r\n\t\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t\t  <div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item active\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_1.jpg\" alt=\"Los Angeles\" height=\"300\" width=\"400\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_2.jfif\" alt=\"Chicago\" height=\"300\" width=\"400\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_3.jfif\" alt=\"New York\" height=\"300\" width=\"400\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> product2 -->\r\n\t\t\t</div>\r\n\r\n\t\t  </div>\r\n\t\t  <div class=\"panel panel-default\">\r\n\t\t    <div class=\"panel-heading\">\r\n\t\t      <h4 class=\"panel-title\">\r\n\t\t        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\">\r\n\t\t        Advertisement Management section</a>\r\n\t\t      </h4>\r\n\t\t    </div>\r\n\t\t\t\t<!--<div>\r\n\t\t\t\t\t<h4 class=\"panel-title\" style=\"margin-left:20px\">\r\n\t\t        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\">\r\n\t\t        {{currentAction}}</a>\r\n\t\t      </h4>\r\n\t\t\t\t</div>-->\r\n\t\t    <div id=\"collapse3\" class=\"panel-collapse collapse in\">\r\n\t\t      <div class=\"panel-body\">\r\n\t\t\t\t\t<form class=\"form-horizontal\" #productForm=\"ngForm\" novalidate>\r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t    <label class=\"control-label col-sm-2\" for=\"email\">Product Title:</label>\r\n\t\t\t\t\t    <div class=\"col-sm-10\">\r\n\t\t\t\t\t      <input type=\"text\" name=\"title\" #productTitle #productTitleRef=\"ngModel\" class=\"form-control\" id=\"email\" required ngModel=\"{{productUpdate.title}}\">\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t<div id=\"productTitleError\" *ngIf=\"productTitleRef.errors\" [hidden]=\"productTitleRef.untouched && (productTitleRef.valid || productTitleRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease enter a product title.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t <div class=\"form-group\">\r\n\t\t\t\t\t    <label class=\"control-label col-sm-2\" for=\"email\">Name:</label>\r\n\t\t\t\t\t    <div class=\"col-sm-10\">\r\n\t\t\t\t\t      <input type=\"text\" name=\"name\" #productNameRef=\"ngModel\"  #productName class=\"form-control\" id=\"email\" required  ngModel=\"{{productUpdate.name}}\">\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t<div id=\"productNameError\" *ngIf=\"productNameRef.errors\" [hidden]=\"productNameRef.untouched && (productNameRef.valid || productNameRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease enter your name.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t  <!--<div class=\"form-group\">\r\n\t\t\t\t\t    <label class=\"control-label col-sm-2\" for=\"pwd\">Price:</label>\r\n\t\t\t\t\t    <div class=\"col-sm-10\"> \r\n\t\t\t\t\t      <input type=\"text\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter the price you want to sell the product at\">\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </div>-->\r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t  <label style=\"margin-right: 30px;\" class=\"control-label col-sm-2\" for=\"comment\">Description:</label>\r\n\t\t\t\t\t\t  <textarea name=\"description\" #productDescriptionRef=\"ngModel\" #productDescription class=\"form-group col-sm-9\" rows=\"5\" id=\"comment\"  required ngModel=\"{{productUpdate.description}}\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div id=\"productDescriptionError\" *ngIf=\"productDescriptionRef.errors\" [hidden]=\"productDescriptionRef.untouched && (productDescriptionRef.valid || productDescriptionRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease enter a product description.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t   <div class=\"form-inline form-group\">\r\n\t\t\t\t\t  \t<div class=\"row\">\r\n\t\t\t\t\t  \t\t\t<div class=\"col-md-2\" style=\"text-align: right; padding-right:0px\">\r\n\t\t\t\t\t\t\t\t  <label for=\"sel1\">Select Category:</label>\r\n\t\t\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t\t\t <div class=\"col-md-10\" style=\"padding-left: 25px;\">\r\n\t\t\t\t\t\t\t\t  <select name=\"category\" #productCategory class=\"form-control\" id=\"sel1\" ngModel=\"{{productUpdate.category}}\">\r\n\t\t\t\t\t\t\t\t    <option *ngFor=\"let x of categoryList\">{{x}}</option>\r\n\t\t\t\t\t\t\t\t  </select>\r\n\t\t\t\t\t\t\t\t\t<div [hidden]=\"toUpdate\">\r\n\t\t\t\t\t\t\t\t\t<select name=\"choose\" #updateCategory class=\"form-control\"  ngModel>\r\n\t\t\t\t\t\t\t\t    <option *ngFor=\"let y of actionList\">{{y.name}}</option>\r\n\t\t\t\t\t\t\t\t  </select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  <!--<div class=\"form-group\">\r\n\t\t\t\t\t    <label class=\"control-label col-sm-2\" for=\"pwd\">Upload Photo 1:</label>\r\n\t\t\t\t\t    <div class=\"col-sm-10\"> \r\n\t\t\t\t\t      <input type=\"file\" class=\"form-control\" id=\"pwd\" placeholder=\"\">\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"form-group\"> \r\n\t\t\t\t\t    <div class=\"col-sm-offset-2 col-sm-10\">\r\n\t\t\t\t\t      <button type=\"button\" class=\"btn btn-default\">Upload more images</button>\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </div>-->\r\n\t\t\t\t\t<div [hidden]=\"updateSuccess\" class=\"alert alert-success\">\r\n  \t\t\t\t\t<strong>Successfully carried out action.</strong> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div [hidden]=\"postSuccess\" id=\"userSuccess\" class=\"alert alert-success\">\r\n  \t\t\t\t\t\t\t\t\t\t\t<strong>Ad posted successfully!</strong> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t  <div class=\"form-group\"> \r\n\t\t\t\t\t    <div class=\"col-sm-offset-2 col-sm-10\">\r\n\t\t\t\t\t    <div [hidden]=\"toPost\">  <button  type=\"button\" id=\"postadbutton\" [disabled]=\"!productForm.form.valid\" (click)=\"postAd(productTitle.value,productName.value,productDescription.value,productCategory.value)\" class=\"btn btn-default\">Submit</button></div>\r\n\t\t\t\t\t\t\t<div [hidden]=\"toUpdate\">\t<button  type=\"button\" id=\"postadbutton\" [disabled]=\"!productForm.form.valid\" (click)=\"update(productUpdate.postId,productTitle.value,productName.value,productDescription.value,productCategory.value,updateCategory.value)\" class=\"btn btn-default\">Update</button></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</form>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t\t</div>"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<div id=\"log\" class=\"modal fade\" role=\"dialog\">\r\n\t\t  <div class=\"modal-dialog\">\r\n\t\t    <!-- Modal content-->\r\n\t\t    <div class=\"form-group\" id=\"login\">\r\n\t\t\t    <form #loginForm=\"ngForm\" novalidate>\r\n\t\t\t\t\t<h1>Login Form</h1>\r\n\t\t\t\t\t<div [hidden]=\"showError\" id=\"userExists\" class=\"alert alert-danger\">\r\n  \t\t\t\t\t<strong>Invalid credentials, please try again.</strong> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div [hidden]=\"showSuccess\" id=\"userSuccess\" class=\"alert alert-success\">\r\n  \t\t\t\t\t<strong>Successfully logged in. Redirecting to home page...</strong> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"uname\">\r\n\t\t\t\t\t\t<input #username #usernameRef=\"ngModel\" name=\"username\" required class=\"form-control\" type=\"text\" placeholder=\"Username\" required=\"\" id=\"username\" ngModel/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"usernameLoginError\" *ngIf=\"usernameRef.errors\" [hidden]=\"usernameRef.untouched && (usernameRef.valid || usernameRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease a username.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input #password required #passwordRef=\"ngModel\" class=\"form-control\" name=\"password\" type=\"password\" placeholder=\"Password\" required=\"\" id=\"password\" ngModel/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"usernameLoginError\" *ngIf=\"passwordRef.errors\" [hidden]=\"passwordRef.untouched && (passwordRef.valid || passwordRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease a password.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input id=\"loginbutton\" [disabled]=\"!loginForm.form.valid\" type=\"button\" (click)=\"loginUser(username.value,password.value)\" value=\"Log in\"><br>\r\n\t\t\t\t\t\t<a data-dismiss=\"modal\" id=\"closeModal\" data-dismiss=\"modal\"></a>\r\n\t\t\t\t\t\t<a href=\"#sign\" data-target=\"#sign\" data-toggle=\"modal\" data-dismiss=\"modal\">Register</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t</div>"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "\t\t<nav class=\"navbar navbar-inverse\">\r\n  \t\t\t<div class=\"container-fluid\">\r\n    \t\t\t<div class=\"navbar-header\">\r\n     \t\t\t\t <a class=\"navbar-brand\" href=\"index.html\">\r\n     \t\t\t\t \t<img src=\"images/logo.jpg\" class=\"img-rounded\" alt=\"Cinque Terre\" width=\"200\" height=\"70\">\r\n     \t\t\t\t </a>\r\n    \t\t\t</div>\r\n\t\t    \t<ul class=\"nav navbar-nav\">\r\n\t\t      \t\t<li routerLinkActive=\"active\"><a href=\"/iwantit2/\">Home</a></li>\r\n\t\t      \t\t<li><a>Product view</a></li>\r\n\t\t      \t\t<!--<li><a href=\"help.html\">Help</a></li>-->\r\n\t\t     \t\t \r\n\t\t    \t</ul>\r\n\t\t    \t<ul class=\"nav navbar-nav navbar-right\">\t\r\n\t\t    \t\t<li><a *ngIf=\"!showLogout\" routerLink=\"/myaccount\"><span class=\"glyphicon glyphicon-open\"></span> <button type=\"button\" class=\"btn btn-primary\">Post an Ad</button></a></li>\r\n\t\t    \t\t<li><a *ngIf=\"!showLogout\" routerLink=\"/myaccount\" routerLinkActive=\"active\"> <span class=\"glyphicon glyphicon-briefcase\"></span> My Account</a></li>\r\n\r\n\t\t\t\t\t\t\t<li *ngIf=\"showLogout\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#sign\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\r\n\t\t      \t\t\t\t<li *ngIf=\"showLogout\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#log\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\t\t\t\t\t\r\n\t\t\t\t\t<li *ngIf=\"!showLogout\"><a href=\"#\" (click)=\"logoutUser()\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\t\t\t\t\r\n\t\t\t\t</ul>\r\n  \t\t\t</div>\r\n\t\t</nav>\r\n\t\t<login (childEvent)=\"childData=$event\"></login>\r\n\t\t<register></register>"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "\t\t<div id=\"sign\" class=\"modal fade\" role=\"dialog\"> \r\n\t\t  <div class=\"modal-dialog\">\r\n\r\n\t\t    <!-- Modal content-->\r\n\t\t    <div class=\"form-group\" id=\"sign2\">\r\n\t\t\t    <form #signupForm=\"ngForm\" novalidate>\r\n\t\t\t\t\t<h1>Signup</h1>\r\n\t\t\t\t\t<div [hidden]=\"showError\" id=\"userExists\" class=\"alert alert-danger\">\r\n  \t\t\t\t\t<strong>User Already Exists, try again!</strong> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div [hidden]=\"showSuccess\" id=\"userSuccess\" class=\"alert alert-success\">\r\n  \t\t\t\t\t<strong>Successfully registered, please login.</strong> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"uname22\">\r\n\t\t\t\t\t\t<input name=\"userName\" minlength=\"3\" #username #usernameRef=\"ngModel\" class=\"form-control\" type=\"text\" placeholder=\"Username\" required id=\"username\" ngModel />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"uname3\" *ngIf=\"usernameRef.errors && usernameRef.touched\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t<div [hidden]=\"!usernameRef.errors.required\" > Please enter a username</div>\r\n\t\t\t\t\t\t\t<div [hidden]=\"!usernameRef.errors.minlength\"> Username needs minimum 3 characters.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div id=\"uname22\">\r\n\t\t\t\t\t\t<input name=\"firstName\" #nameModelRef=\"ngModel\" #firstname class=\"form-control\" type=\"text\" placeholder=\"First Name\" required id=\"fname\" ngModel />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"fnameError\" *ngIf=\"nameModelRef.errors\" [hidden]=\"nameModelRef.untouched && (nameModelRef.valid || nameModelRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease enter first name\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"uname22\">\r\n\t\t\t\t\t\t<input name=\"lastName\" #lastname #LnameModelRef=\"ngModel\" class=\"form-control\" type=\"text\" placeholder=\"Last Name\" required id=\"lname\" ngModel/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"lnameError\" *ngIf=\"LnameModelRef.errors\" [hidden]=\"LnameModelRef.untouched && (LnameModelRef.valid || LnameModelRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease enter last name\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"uname22\"> \r\n\t\t\t\t\t\t<input name=\"password\" #password #passwordRef=\"ngModel\" class=\"form-control\" type=\"password\" placeholder=\"Password\" required minlength=\"5\" id=\"password\" ngModel/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--<div id=\"passwordError\" [hidden]=\"passwordRef.untouched && (passwordRef.valid || passwordRef.pristine)\" class=\"alert alert-danger\" >\r\n\t\t\t\t\t\t\tPlease enter a password\r\n\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t<div id=\"passwordError\" *ngIf=\"passwordRef.errors && passwordRef.touched\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t<div [hidden]=\"!passwordRef.errors.required\" > Please enter a password</div>\r\n\t\t\t\t\t\t\t<div [hidden]=\"!passwordRef.errors.minlength\"> Password needs minimum 5 characters.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"uname22\">\r\n\t\t\t\t\t\t<input name=\"email\" #email #emailRef=\"ngModel\" required class=\"form-control\" type=\"email\" placeholder=\"Email\" id=\"email\" ngModel/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"emailError\" *ngIf=\"emailRef.errors && emailRef.touched\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t<div [hidden]=\"!emailRef.errors.required\" > Please enter an amail</div>\r\n\t\t\t\t\t\t\t<div [hidden]=\"!emailRef.errors.valid\"> Email is not valid.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"uname22\">\r\n\t\t\t\t\t\t<input name=\"phone\" #phoneRef=\"ngModel\" #phone class=\"form-control\" type=\"text\" placeholder=\"Phone number\" required id=\"phone\" ngModel/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"phoneError\" *ngIf=\"phoneRef.errors\" [hidden]=\"phoneRef.untouched && (phoneRef.valid || phoneRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease a phone number.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input id=\"signinbutton\" [disabled]=\"!signupForm.form.valid\" type=\"button\" value=\"Sign up\" (click)=\"registerUser(username.value,firstname.value,lastname.value,password.value,email.value,phone.value)\"><br>\r\n\t\t\t\t\t\t<a href=\"#\" data-target=\"#log\" data-toggle=\"modal\" data-dismiss=\"modal\">Already have an account? Login</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\r\n\t\t  </div>\r\n\t\t</div>"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "\t\t\t\t\t<h3>&nbsp;&nbsp;<b>Product Name :{{productToView.title}} </b> </h3><hr>\r\n\t\t<br>\r\n\t\t\t\t\t\t\t\t\t<div id=\"adCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Indicators -->\r\n\t\t\t\t\t\t\t\t\t\t  <ol class=\"carousel-indicators\">\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#adCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#adCarousel\" data-slide-to=\"1\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#adCarousel\" data-slide-to=\"2\"></li>\r\n\t\t\t\t\t\t\t\t\t\t  </ol>\r\n\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Wrapper for slides -->\r\n\t\t\t\t\t\t\t\t\t\t  <div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item active\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_1.jpg\" alt=\"Los Angeles\" height=\"600\" width=\"800\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_2.jfif\" alt=\"Chicago\" height=\"600\" width=\"800\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_3.jfif\" alt=\"New York\" height=\"600\" width=\"800\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Left and right controls -->\r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"left carousel-control\" href=\"#adCarousel\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"right carousel-control\" href=\"#adCarousel\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n            <div class=\"showadvert\">\r\n\t\t\t\t    \t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t    \t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\tPosted on\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t{{productToView.createdDate}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\tProduct Name\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t{{productToView.title}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\tCategory\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t{{productToView.category}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\tPosted By\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t{{productToView.name}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\tPrice\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t1,14,000\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\tDescription\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t{{productToView.description}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--<div class=\"row panel-body\">\r\n\t\t\t\t\t    \t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\tContact Seller\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t9766110818\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    \t</div>-->\r\n\t\t\t\t    \t\t<!--<div class=\"row panel-body\">\r\n\t\t\t\t\t    \t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\tEmail Seller\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\tRajorshi.Gon@Xoriant.com\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    \t\t</div>-->\r\n\t\t\t\t    \t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t    \t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\tMessage Seller\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<form class=\"form-horizontal\">\r\n\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t  <div class=\"col-md-12\">                     \r\n\t\t\t\t\t\t\t\t\t\t    <textarea #message class=\"form-control\" id=\"message\" name=\"message\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t  <div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t    <button id=\"sendmessage\" type=\"button\" (click)=\"sendMessage(message.value)\" name=\"sendmessage\" class=\"btn btn-primary\">Send</button>\r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"messagesent\" id=\"userSuccess\" class=\"alert alert-success\">\r\n  \t\t\t\t\t\t\t\t\t\t\t<strong>Message sent successfully...</strong> \r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    </div>"

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        this.selectedCategory = null;
        this.searchedProductList = [];
        this.searchCategory = null;
    }
    ProductService.prototype.fetchCategory = function () {
        return this._http.get('https://testwant.herokuapp.com/categories').map(function (response) { return response.json(); });
    };
    ProductService.prototype.getUserProducts = function (loginToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('auth-token', loginToken);
        // console.log('getting specific with token ',loginToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.get('https://testwant.herokuapp.com/posts', options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.sendCategory = function (category) {
        this.selectedCategory = category;
        // console.log("Category in service", this.selectedCategory);
    };
    ProductService.prototype.getCategory = function () {
        // console.log("returning category ",this.selectedCategory);
        return this.selectedCategory;
    };
    ProductService.prototype.sendProduct = function (product) {
        this.productToView = product;
    };
    ProductService.prototype.getProduct = function () {
        return this.productToView;
    };
    ProductService.prototype.getPostId = function () {
        return this.productToView.postId;
    };
    ProductService.prototype.getspecificproduct = function (loginToken, postId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('auth-token', loginToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        //console.log('getting product with id',postId,loginToken);
        return this._http.get('https://testwant.herokuapp.com/viewAd?postId=' + postId, options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.searchByText = function (searchText) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        console.log('getting product with search text', searchText);
        return this._http.get('https://testwant.herokuapp.com/posts/search/text?searchText=' + searchText, options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.postNewAd = function (token, title, category, description, uname) {
        var ad = {
            "title": title,
            "name": uname,
            "category": category,
            "description": description,
        };
        //console.log(ad);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post('https://testwant.herokuapp.com/postAd', JSON.stringify(ad), options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.updateAdOnServer = function (loginToken, productUpdate) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var newad = {
            "postId": productUpdate.postId,
            "status": "Open",
            "name": productUpdate.name,
            "title": productUpdate.title,
            "description": productUpdate.description,
            "category": productUpdate.category
        };
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', loginToken);
        //console.log('updating ad ',newad,'with token ',loginToken );
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.put('https://testwant.herokuapp.com/postAd', JSON.stringify(newad), options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.getActions = function (loginToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('auth-token', loginToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.get('https://testwant.herokuapp.com/actions', options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.getDateConditions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('auth-token', sessionStorage.getItem("auth-token"));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.get('https://testwant.herokuapp.com/dateconditions', options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.deleteAdOnServer = function (loginToken, productUpdate) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('auth-token', loginToken);
        //console.log('Deleting ad with token ',loginToken,'and id = ',productUpdate.postId );
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.delete('https://testwant.herokuapp.com/post?postId=' + productUpdate.postId, options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.searchbyText = function (text) {
        this.searchCategory = text;
        // let headers = new Headers();    
        // let options = new RequestOptions({ headers: headers });
        // return this._http.get('http://192.168.3.144:9000/posts/search?category='+text,options).map((response: Response)=>response.json());
    };
    // sendSearchedProducts(searchedProducts:any){
    //     console.log(searchedProducts);
    //     this.searchedProductList=searchedProducts;
    // }
    ProductService.prototype.getAllProducts = function () {
        return this._http.get('https://testwant.herokuapp.com/posts/search').map(function (response) { return response.json(); });
    };
    ProductService.prototype.sendMessagetoSeller = function (Message, postid, loginToken) {
        console.log('Sending message ', Message, 'with token ', loginToken, 'and post id', postid);
        this.messageToSeller = {
            "message": Message,
            "postId": postid
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', loginToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post('https://testwant.herokuapp.com/message', JSON.stringify(this.messageToSeller), options).map(function (response) { return response.json(); });
    };
    ProductService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], ProductService);
    return ProductService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Montu/Desktop/Angular/iwantit/src/product.service.component.js.map

/***/ })

},[702]);
//# sourceMappingURL=main.bundle.map