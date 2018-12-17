webpackJsonp([5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, sp, navParams) {
        this.navCtrl = navCtrl;
        this.sp = sp;
        this.navParams = navParams;
        this.branch = {};
        this.editorial = {};
        this.organization = {};
        this.value = this.navParams.get("value");
    }
    AddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPage');
    };
    AddPage.prototype.clickMe = function (item) {
        var _this = this;
        if (item == 'branch') {
            this.branch.status = 1;
            console.log(this.branch);
            this.sp.createBranch(this.branch).subscribe(function (result) {
                console.log(result);
                _this.branch = {},
                    _this.navCtrl.pop();
            });
        }
        if (item == 'editorial') {
            this.editorial.status = 1;
            this.sp.createEditorial(this.editorial).subscribe(function (result) {
                console.log(result);
                _this.editorial = {},
                    _this.navCtrl.pop();
            });
        }
        if (item == 'organization') {
            this.organization.status = 1;
            this.sp.createOrganization(this.organization).subscribe(function (result) {
                console.log(result);
                _this.organization = {},
                    _this.navCtrl.pop();
            });
        }
    };
    AddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add',template:/*ion-inline-start:"/Users/alexparedesaranzamendi/Desktop/Universidad/ulasalle/cliente/src/pages/add/add.html"*/'<!--\n  Generated template for the AddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="value === \'branch\'">Agregar sucursal</ion-title>\n    <ion-title *ngIf="value === \'editorial\'">Agregar editorial</ion-title>\n    <ion-title *ngIf="value === \'organization\'">Agregar Organizacion</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div *ngIf="value === \'branch\'">\n    <ion-list >\n        <ion-item>\n            <ion-label floating >Name</ion-label>\n            <ion-input type="" [(ngModel)]="branch.name"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating >Address</ion-label>\n            <ion-input type="" [(ngModel)]="branch.address"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating >Latitude</ion-label>\n            <ion-input type="" [(ngModel)]="branch.latitude"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating >longitude</ion-label>\n            <ion-input type="" [(ngModel)]="branch.longitude"></ion-input>\n          </ion-item>\n          <button  (click)="clickMe(\'branch\')" ion-button>Agregar</button>\n    </ion-list>\n</div>\n\n\n\n<div *ngIf="value === \'editorial\'">\n    <ion-list >\n        <ion-item>\n            <ion-label floating >Name</ion-label>\n            <ion-input type="" [(ngModel)]="editorial.name"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating >Address</ion-label>\n            <ion-input type="" [(ngModel)]="editorial.address"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating >Country</ion-label>\n            <ion-input type="" [(ngModel)]="editorial.country"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating >Website</ion-label>\n            <ion-input type="" [(ngModel)]="editorial.webiste"></ion-input>\n          </ion-item>\n          <button  (click)="clickMe(\'editorial\')" ion-button>Agregar</button>\n    </ion-list>\n</div>\n\n\n\n<div *ngIf="value === \'organization\'">\n    <ion-list >\n        <ion-item>\n            <ion-label floating >Name</ion-label>\n            <ion-input type="" [(ngModel)]="organization.name"></ion-input>\n          </ion-item>\n           \n          <button  (click)="clickMe(\'organization\')" ion-button>Agregar</button>\n    </ion-list>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/alexparedesaranzamendi/Desktop/Universidad/ulasalle/cliente/src/pages/add/add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddPage);
    return AddPage;
}());

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(device, services, navCtrl, navParams) {
        this.device = device;
        this.services = services;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {
            userName: "",
            password: ""
        };
        this.access = {
            ip: "",
            user_id: "",
            user_agent: ""
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.getIp();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.services.login(this.user).subscribe(function (result) {
            console.log(result);
            _this.token = result;
            _this.userid = _this.token.user.id;
            _this.access.user_id = _this.userid;
            _this.services.generateCrud('post', 'users');
            localStorage.setItem('biblioteca', _this.token.token);
            localStorage.setItem('biblioteca_user', _this.token.user.id);
            _this.createAccess();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        });
    };
    LoginPage.prototype.getIp = function () {
        var _this = this;
        this.services.IP().subscribe(function (result) {
            _this.ip = result;
            _this.access.ip = _this.ip.ip;
            _this.access.user_agent = "Android";
            console.log(_this.access);
        });
    };
    LoginPage.prototype.createAccess = function () {
        this.services.createAccess(this.access).subscribe(function (result) {
            console.log(result);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/alexparedesaranzamendi/Desktop/Universidad/ulasalle/cliente/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ingresar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list color="primary">\n\n        <ion-item>\n          <ion-label fixed>Username</ion-label>\n          <ion-input type="text" value="" [(ngModel)]="user.userName"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label fixed>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n        </ion-item>\n\n        <button ion-button (click)="login()" >Enviar</button>\n      \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/alexparedesaranzamendi/Desktop/Universidad/ulasalle/cliente/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TextPage = /** @class */ (function () {
    function TextPage(alertCtrl, services, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.services = services;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.branch = this.navParams.get("value");
        this.type = this.navParams.data.type;
        ;
        this.edit = 1;
        console.log(this.type);
    }
    TextPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TextPage');
    };
    TextPage.prototype.clickMe = function (item) {
        var _this = this;
        if (this.type == 's') {
            console.log(this.branch);
            this.services.createBranch(this.branch).subscribe(function (result) {
                _this.services.generateCrud('update', 'branchs');
                console.log(result);
                _this.navCtrl.pop();
            });
        }
        if (this.type == 'e') {
            this.services.createEditorial(this.branch).subscribe(function (result) {
                _this.services.generateCrud('update', 'editoriales');
                console.log(result);
                _this.navCtrl.pop();
            });
        }
        if (this.type == 'o') {
            this.services.createOrganization(this.branch).subscribe(function (result) {
                console.log(result);
                _this.services.generateCrud('update', 'organizations');
                _this.navCtrl.pop();
            });
        }
    };
    TextPage.prototype.deleteItem = function () {
        this.showAlert();
    };
    TextPage.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Atencion',
            subTitle: 'Deseas eliminar: ' + this.branch.name,
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        if (_this.type == 'o') {
                            _this.services.deleteBranc(_this.branch.id, 'organizations').subscribe(function (result) {
                                _this.services.generateCrud('delete', 'organizations');
                                console.log(result);
                                _this.navCtrl.pop();
                            });
                        }
                        if (_this.type == 'e') {
                            _this.services.deleteBranc(_this.branch.id, 'editoriales').subscribe(function (result) {
                                _this.services.generateCrud('delete', 'editoriales');
                                console.log(result);
                                _this.navCtrl.pop();
                            });
                        }
                        if (_this.type == 's') {
                            _this.services.deleteBranc(_this.branch.id, 'branchs').subscribe(function (result) {
                                _this.services.generateCrud('delete', 'branchs');
                                console.log(result);
                                _this.navCtrl.pop();
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    TextPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-text',template:/*ion-inline-start:"/Users/alexparedesaranzamendi/Desktop/Universidad/ulasalle/cliente/src/pages/text/text.html"*/'<!--\n  Generated template for the TextPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{branch.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n\n        <ion-card-header>\n          {{branch.name}}\n        </ion-card-header>\n      \n        <ion-card-content>\n          {{branch.address}}\n        </ion-card-content>\n        \n        <ion-fab top right>\n            <button (click)="deleteItem()" ion-fab mini icon-center color="danger">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n        </ion-fab>\n\n      \n      </ion-card>\n      <!-- <ion-icon name="ios-trash" (click)="deleteB()"></ion-icon>\n      <ion-icon name="ios-brush" (click)="editB()"></ion-icon>\n\n      <div *ngIf="edit == 0">\n\n      </div> -->\n\n\n<div *ngIf="type === \'s\'">\n    <h3>Editar</h3>\n    <ion-list >\n        <ion-item>\n            <ion-label floating >Id</ion-label>\n            <ion-input type="" [(ngModel)]="branch.id" disabled></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating >Name</ion-label>\n            <ion-input type="" [(ngModel)]="branch.name"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating >Address</ion-label>\n            <ion-input type="" [(ngModel)]="branch.address"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating >Latitude</ion-label>\n            <ion-input type="" [(ngModel)]="branch.latitude"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating >longitude</ion-label>\n            <ion-input type="" [(ngModel)]="branch.longitude"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Status</ion-label>\n              <ion-select [(ngModel)]="branch.status">\n                <ion-option value="1" >1</ion-option>\n                <ion-option value="0" >0</ion-option>\n              </ion-select>\n            </ion-item>\n          <button  (click)="clickMe(\'branch\')" ion-button>Agregar</button>\n    </ion-list>\n</div>\n\n\n\n<div *ngIf="type === \'e\'">\n    <h3>Editar</h3>\n    <ion-list >\n        <ion-item>\n            <ion-label floating >Id</ion-label>\n            <ion-input type="" [(ngModel)]="branch.id" disabled></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating >Name</ion-label>\n            <ion-input type="" [(ngModel)]="branch.name"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating >Address</ion-label>\n            <ion-input type="" [(ngModel)]="branch.address"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating >Country</ion-label>\n            <ion-input type="" [(ngModel)]="branch.country"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating >Website</ion-label>\n            <ion-input type="" [(ngModel)]="branch.website"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Status</ion-label>\n            <ion-select [(ngModel)]="branch.status">\n              <ion-option value="1" >1</ion-option>\n              <ion-option value="0" >0</ion-option>\n            </ion-select>\n          </ion-item>\n          <button  (click)="clickMe(\'editorial\')" ion-button>Agregar</button>\n    </ion-list>\n</div>\n\n\n\n<div *ngIf="type === \'o\'">\n    <h3>Editar</h3>\n    <ion-list >\n        <ion-item>\n            <ion-label floating >Id</ion-label>\n            <ion-input type="" [(ngModel)]="branch.id" disabled></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating >Name</ion-label>\n            <ion-input type="" [(ngModel)]="branch.name"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Status</ion-label>\n              <ion-select [(ngModel)]="branch.status">\n                <ion-option value="1" >1</ion-option>\n                <ion-option value="0" >0</ion-option>\n              </ion-select>\n            </ion-item>\n           \n          <button  (click)="clickMe(\'organization\')" ion-button>Agregar</button>\n    </ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/alexparedesaranzamendi/Desktop/Universidad/ulasalle/cliente/src/pages/text/text.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TextPage);
    return TextPage;
}());

//# sourceMappingURL=text.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(services, navCtrl, navParams) {
        this.services = services;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {
            userName: "",
            password: "",
            gender: "",
            birth: "",
            estatus: "1",
            role_id: "3"
        };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        console.log(this.user);
        this.services.register(this.user).subscribe(function (result) {
            _this.services.generateCrud('post', 'users');
            _this.navCtrl.pop();
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/alexparedesaranzamendi/Desktop/Universidad/ulasalle/cliente/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registrarse</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list color="primary">\n\n        <ion-item>\n          <ion-label fixed>Username</ion-label>\n          <ion-input type="text" value="" [(ngModel)]="user.userName"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label fixed>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Birthday</ion-label>\n            <ion-datetime [(ngModel)]="user.birth" displayFormat="YYYY MM DD" ></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>Genero</ion-label>\n          <ion-select [(ngModel)]="user.gender">\n            <ion-option value="1" >Masculino</ion-option>\n            <ion-option value="2" >Femenino</ion-option>\n          </ion-select>\n        </ion-item>\n\n\n        <button ion-button (click)="register()" >Registrarse</button>\n      \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/alexparedesaranzamendi/Desktop/Universidad/ulasalle/cliente/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StartPage = /** @class */ (function () {
    function StartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartPage');
    };
    StartPage.prototype.changePage = function (item) {
        if (item == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
        if (item == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
        }
    };
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start',template:/*ion-inline-start:"/Users/alexparedesaranzamendi/Desktop/Universidad/ulasalle/cliente/src/pages/start/start.html"*/'<!--\n  Generated template for the StartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding class="fondo">\n<div class="buttons">\n    <div>\n        <button (click)="changePage(1)" ion-button round color="secondary" full>Ingresar</button>\n    </div>\n    <div>\n        <button (click)="changePage(2)" ion-button round  full>Registrarse</button>\n    </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/alexparedesaranzamendi/Desktop/Universidad/ulasalle/cliente/src/pages/start/start.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add/add.module": [
		282,
		4
	],
	"../pages/login/login.module": [
		283,
		3
	],
	"../pages/register/register.module": [
		284,
		2
	],
	"../pages/start/start.module": [
		285,
		1
	],
	"../pages/text/text.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_services_services__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_text_text__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_add__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_start_start__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_11__pages_text_text__["a" /* TextPage */], __WEBPACK_IMPORTED_MODULE_12__pages_add_add__["a" /* AddPage */], __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_15__pages_start_start__["a" /* StartPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add/add.module#AddPageModule', name: 'AddPage', segment: 'add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/text/text.module#TextPageModule', name: 'TextPage', segment: 'text', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_11__pages_text_text__["a" /* TextPage */], __WEBPACK_IMPORTED_MODULE_12__pages_add_add__["a" /* AddPage */], __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_15__pages_start_start__["a" /* StartPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_services_services__["a" /* ServicesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_start_start__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        platform.ready().then(function () {
            _this.token = localStorage.getItem('biblioteca');
            if (_this.token != null) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_start_start__["a" /* StartPage */];
            }
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/alexparedesaranzamendi/Desktop/Universidad/ulasalle/cliente/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/alexparedesaranzamendi/Desktop/Universidad/ulasalle/cliente/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicesProvider = /** @class */ (function () {
    function ServicesProvider(http) {
        this.http = http;
        this.url = "https://turisteape.herokuapp.com/api/";
        console.log('Hello ServicesProvider Provider');
    }
    ServicesProvider.prototype.getBranchs = function () {
        return this.http.get(this.url + 'branchs/read');
    };
    ServicesProvider.prototype.getOrganization = function () {
        return this.http.get(this.url + 'organizations/read');
    };
    ServicesProvider.prototype.getEditoriales = function () {
        return this.http.get(this.url + 'editoriales/read');
    };
    ServicesProvider.prototype.getCopies = function () {
        return this.http.get(this.url + 'copies/read');
    };
    ServicesProvider.prototype.IP = function () {
        var ip = "https://api.ipify.org?format=json";
        return this.http.get(ip);
    };
    ServicesProvider.prototype.getip = function () {
        var _this = this;
        this.IP().subscribe(function (result) {
            _this.ip = result;
            return _this.ip;
        });
    };
    ServicesProvider.prototype.createBranch = function (branch) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(this.url + 'branchs/update', {
            name: branch.name,
            address: branch.address,
            latitude: branch.latitude,
            longitude: branch.longitude,
            status: branch.status,
            id: branch.id
        }, httpOptions);
    };
    ServicesProvider.prototype.createEditorial = function (editorial) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(this.url + 'editoriales/update', {
            name: editorial.name,
            address: editorial.address,
            country: editorial.country,
            website: editorial.website,
            status: editorial.status,
            id: editorial.id
        }, httpOptions);
    };
    ServicesProvider.prototype.createOrganization = function (org) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(this.url + 'organizations/update', {
            name: org.name,
            id: org.id,
            status: org.status
        }, httpOptions);
    };
    ServicesProvider.prototype.createAccess = function (acc) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.url + 'access/create', {
            ip: acc.ip,
            user_id: acc.user_id,
            user_agent: acc.user_agent
        }, httpOptions);
    };
    ServicesProvider.prototype.deleteBranc = function (id, table) {
        return this.http.delete(this.url + table + '/delete/' + id);
    };
    ServicesProvider.prototype.login = function (user) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.url + 'user/login', {
            userName: user.userName,
            password: user.password
        }, httpOptions);
    };
    ServicesProvider.prototype.register = function (user) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.url + 'user/create', {
            userName: user.userName,
            password: user.password,
            gender: user.gender,
            birth: user.birth,
            estatus: user.estatus,
            role_id: user.role_id
        }, httpOptions);
    };
    ServicesProvider.prototype.crud = function (type, entity) {
        var id = localStorage.getItem('biblioteca_user');
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.url + 'cruds/create', {
            user_id: id,
            type: type,
            entity: entity
        }, httpOptions);
    };
    ServicesProvider.prototype.generateCrud = function (type, entity) {
        var id = localStorage.getItem('biblioteca_user');
        if (id != null) {
            this.crud(type, entity).subscribe(function (result) {
                console.log(result);
            });
        }
    };
    ServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServicesProvider);
    return ServicesProvider;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_text__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_add__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, sp) {
        this.navCtrl = navCtrl;
        this.sp = sp;
        this.addpage = __WEBPACK_IMPORTED_MODULE_4__add_add__["a" /* AddPage */];
        this.textPage = __WEBPACK_IMPORTED_MODULE_3__text_text__["a" /* TextPage */];
        // this.getBranchs();
        // this.getOrganizations();
        // this.getEditoriales();
        this.option = "Organization";
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.getBranchs();
        this.getOrganizations();
        this.getEditoriales();
        this.getCopies();
    };
    HomePage.prototype.getBranchs = function () {
        var _this = this;
        this.sp.getBranchs().subscribe(function (result) {
            _this.sp.generateCrud('get', 'branchs');
            var x = result;
            _this.branchs = x.Branchs;
            // JSON.stringify(this.branchs);
            console.log(_this.branchs);
        });
    };
    HomePage.prototype.getEditoriales = function () {
        var _this = this;
        this.sp.getEditoriales().subscribe(function (result) {
            _this.sp.generateCrud('get', 'editoriales');
            var x = result;
            _this.editoriales = x.Editoriales;
            // JSON.stringify(this.branchs);
            console.log(result);
        });
    };
    HomePage.prototype.getOrganizations = function () {
        var _this = this;
        this.sp.getOrganization().subscribe(function (result) {
            _this.sp.generateCrud('get', 'organization');
            var x = result;
            _this.organizations = x.Organizations;
            // JSON.stringify(this.branchs);
            console.log(result);
        });
    };
    HomePage.prototype.getCopies = function () {
        var _this = this;
        this.sp.getCopies().subscribe(function (result) {
            _this.sp.generateCrud('get', 'copies');
            var x = result;
            _this.copies = x.Copies;
            // JSON.stringify(this.branchs);
            console.log(result);
        });
    };
    HomePage.prototype.refresh = function () {
        this.getBranchs();
        this.getOrganizations();
        this.getEditoriales();
    };
    HomePage.prototype.addPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_add__["a" /* AddPage */]);
    };
    HomePage.prototype.pushPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__text_text__["a" /* TextPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/alexparedesaranzamendi/Desktop/Universidad/ulasalle/cliente/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Biblioteca\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-segment [(ngModel)]="option">\n      <ion-segment-button value="Organization">\n        Organizacion\n      </ion-segment-button>\n      <ion-segment-button value="Branch">\n        Sucursal\n      </ion-segment-button>\n      <ion-segment-button value="Editorial">\n        Editoriales\n      </ion-segment-button>\n    </ion-segment>\n    \n    <div *ngIf="option == Branch">\n\n    </div>\n    <div [ngSwitch]="option">\n\n        <ion-list *ngSwitchCase="\'Organization\'">\n            <ion-list style="padding-top:20px;">\n              <!-- <ion-item style="text-align:center;" [navPush]="addpage" [navParams]="{ value : \'organization\' }" ><button ion-button full  >Add Organization</button></ion-item> -->\n              <ion-item style="text-align:center;" (click)="refresh()"  ><button ion-button full >List Organizaciones</button></ion-item>\n            <ion-item *ngFor="let b of organizations"[navPush]="textPage" [navParams]="{ value : b,type:\'o\' }">\n                {{b.name}}\n              </ion-item>\n            </ion-list>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'Branch\'">\n          <ion-list style="padding-top:20px;">\n              <!-- <ion-item style="text-align:center;" [navPush]="addpage" [navParams]="{ value : \'branch\' }" ><button ion-button full  >Add Branch</button></ion-item> -->\n              <ion-item style="text-align:center;" (click)="refresh()"  ><button ion-button full >List Sucursales</button></ion-item>\n              <ion-item *ngFor="let b of branchs"[navPush]="textPage" [navParams]="{ value : b ,type:\'s\'}">\n                {{b.name}}\n                <p *ngFor="let c of copies" >\n                    <span *ngIf="c.branch_id == b.id">* {{c.details}}</span>\n                  </p>\n              </ion-item>\n            </ion-list>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'Editorial\'">\n            <ion-list style="padding-top:20px;">\n                <!-- <ion-item style="text-align:center;" [navPush]="addpage" [navParams]="{ value : \'editorial\' }" ><button ion-button full  >Add Editorial</button></ion-item> -->\n                <ion-item style="text-align:center;" (click)="refresh()"  ><button ion-button full >List Editorial</button></ion-item>\n            <ion-item *ngFor="let b of editoriales"[navPush]="textPage" [navParams]="{ value : b,type:\'e\' }">\n                {{b.name}}\n              </ion-item>\n            </ion-list>\n        </ion-list>\n      </div>\n</ion-content>\n\n\n<!-- \n  La forma tradicional para evaluar psicologicamente a un alumno de secundaria en colegios estatales actualmente son pasados desapercibidos. Hoy en dia a nivel mundial el diseño y el uso de herramientas graficas en dispositivos moviles permite despertar el interes de las personas. En el Perú la gran mayoria de colegios estatales no disponen del area de psicologia. En este articulo se presenta una propuesta para evaluar jovenes estudiantes del nivel secundario mediante un aplicativo usando interfaces de usuario.\n -->\n'/*ion-inline-end:"/Users/alexparedesaranzamendi/Desktop/Universidad/ulasalle/cliente/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map