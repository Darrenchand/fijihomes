webpackJsonp([18],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__ = __webpack_require__(265);
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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    // AboutItems = [
    //   {title: 'History', text: 'FijiHomes Started Way Back in the 1970. This Website was made just This Year 2018 to accomodate the growing needs of the customers',image: "assets/img/history.png"},
    //   {title: 'Contact Us', text: 'You Can Call Us on: +6799668863 OR you can drop an email at s11120422@student.usp.ac.fj. ThankYou',image: "assets/img/contact.png"},
    //   {title: 'Looking For a Job?', text: 'We are now Hiring Agents for broker jobs. Drop in ur CV at the latest on the Email Provided.',image: "assets/img/lookingforjob.png"}
    // ];
    function AboutPage(popoverCtrl, navCtrl, navParams) {
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // backgrounds = [
    //   'assets/imgs/background/background-1.jpg',
    //   'assets/imgs/background/background-2.jpg',
    //   'assets/imgs/background/background-3.jpg',
    //   'assets/imgs/background/background-4.jpg'
    // ];
    AboutPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__["a" /* PopoverPage */]);
        popover.present({ ev: event });
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="colored">\n<!--   \n  <ion-slides pager="false" autoplay="2000" loop="true" speed="1500" effect="fade">\n      <ion-slide class="slide-background swiper-slide" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n          <h1>Welcome to About us Page</h1>\n        <ion-grid class="card-background-page" >        \n                  <ion-row>                   \n                    <ion-col col-12 col-md-6 col-lg-4 col-xl-4 *ngFor="let item of AboutItems">\n                      <ion-card class= "newmade"> \n                        <img class="img"src={{item.image}}/>\n                            <ion-card-header style="background-color:white">{{item.title}}</ion-card-header>\n                            <ion-card-content style="background-color:white">{{item.text}}</ion-card-content>      \n                      </ion-card>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid> \n      </ion-slide>\n    </ion-slides> -->\n    <ion-card>\n        <h1 class="centered">About Us</h1>\n        <p>Fiji Homes Started Way Back in the 1970. This Website was made just This Year 2018 to accomodate the growing needs of the customers The company\'s current office is located in Suva, and employs 17 sales consultants and support staff, and 4 administration staff. The Fiji real estate industry is known to behighly corrupt, unethical and unstructured. FijiHomes has done a lot to improve this, and continues to do so, bringing high standards of customer service and ethics to the industry. Our agents are either trained in New Zealand, or trained locally by our New Zealand trainers, such that standards of the brand are maintained. FijiHomes enjoys the largest brokered market share for residential property rentals in Fiji, and strives to deliver world class service, through its excellent people!</p>    \n    </ion-card>\n   <ion-card>\n      <h1 class="centered">Contact Us</h1>\n      <p>You Can Call Us on: +6799668863 OR you can drop an email at s11120422@student.usp.ac.fj. ThankYou</p>\n   </ion-card>\n   \n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
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
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = (function () {
    function AccountPage(http, alerCtrl, events, storage, navCtrl, navParams) {
        this.http = http;
        this.alerCtrl = alerCtrl;
        this.events = events;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.coverImage = 'assets/imgs/background/background-1.jpg';
        this.se = { key: "fj55518", firstname: '', lastname: '', email: '', phone: '', password: '', description: '', address: '', bank: '', linkedin: '', dob: '' };
        this.user = JSON.parse(localStorage.getItem('userdata'));
        this.firstname = this.user.first_name;
        this.lastname = this.user.last_name;
        this.email = this.user.email;
        this.phone = this.user.phone;
        this.password = this.user.password;
        this.description = this.user.description;
        this.address = this.user.address;
        this.bank = this.user.bank_acc_number;
        this.linkedin = this.user.linkedin;
        this.dob = this.user.dob;
        console.log(JSON.parse(localStorage.getItem('userdata')));
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage.prototype.logout = function () {
        this.events.publish('user:logout');
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    AccountPage.prototype.Savechanges = function () {
        var _this = this;
        this.se.firstname = this.firstname;
        this.se.lastname = this.lastname;
        this.se.email = this.email;
        this.se.phone = this.phone;
        this.se.password = this.password;
        this.se.description = this.description;
        this.se.address = this.address;
        this.se.bank = this.bank;
        this.se.linkedin = this.linkedin;
        this.se.dob = this.dob;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/updateuser', this.se, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            //this.user = data;
            _this.user.first_name = _this.firstname;
            _this.user.last_name = _this.lastname;
            _this.user.email = _this.email;
            _this.user.phone = _this.phone;
            _this.user.password = _this.password;
            _this.user.description = _this.description;
            _this.user.address = _this.address;
            _this.user.bank_acc_number = _this.bank;
            _this.user.linkedin = _this.linkedin;
            _this.user.dob = _this.dob;
            localStorage.setItem('userdata', JSON.stringify(_this.user));
            console.log(data);
            _this.doAlert();
        }, function (err) {
            console.log("error");
        });
    };
    AccountPage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'Successful',
            message: 'The changes has been sucesssfully changed. Thankyou',
            buttons: [
                {
                    text: 'OK',
                    role: 'ok',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\account\account.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + coverImage +\')\'}"></div>\n<div id="content">\n  <div id="profile-info" padding>\n    <img id="profile-image" [src]="user?.pic_url">\n  </div>\n</div>\n\n<form>\n    <ion-card >\n    <ion-list inset >\n  <ion-item>\n    <ion-label>FirstName</ion-label>\n    <ion-input name="firstname"type="text" placeholder="Your Firstname"[(ngModel)]="firstname"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>LastName</ion-label>\n    <ion-input name="lastname"type="text"placeholder="Your Surname"[(ngModel)]="lastname"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>DOB</ion-label>\n    <ion-datetime  name ="dob"displayFormat="MMM DD YYYY"placeholder="Choose Your Date Of Birth"[(ngModel)]="dob"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Phone</ion-label>\n    <ion-input name="phone"type="text"placeholder="Your Phone Contact"[(ngModel)]="phone"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Linked-In</ion-label>\n    <ion-input name="linkedin"type="text"placeholder="Your Linked-In Profile Details"[(ngModel)]="linkedin"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Address</ion-label>\n    <ion-input name="address"type="text"placeholder="Your Residentail Address"[(ngModel)]="address"></ion-input>\n  </ion-item>\n</ion-list>\n</ion-card>\n<ion-card>\n<ion-list>\n  <ion-item>\n    <ion-label>\n      Description\n    </ion-label>\n    <ion-textarea name="description"placeholder="Short Descriptions about Yourself"[(ngModel)]="description"></ion-textarea>\n  </ion-item>\n</ion-list>\n</ion-card>\n</form>\n\n<div>\n<h4 padding>\nCredentials\n</h4>\n<ion-card>\n<ion-list inset>\n\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input disabled="true" name="email"type="text"placeholder="Your Valid Email Address required"[(ngModel)]="email"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input name="password"type="password" placeholder="A strong Password is Recommended"[(ngModel)]="password"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-card>\n</div>\n\n<h4 padding>Bank Details</h4>\n<ion-card>\n<ion-list inset>\n\n    <ion-item>\n      <ion-label>Bank Account Number</ion-label>\n      <ion-input name="acctnumber"type="text"placeholder="Your Bank Account Details"[(ngModel)]="bank"></ion-input>\n    </ion-item>\n  \n  </ion-list>\n</ion-card>\n\n<button color="secondary"ion-button full (click)="Savechanges()" >Save Changes</button>\n\n  <button ion-button full (click)="logout()">Logout</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PayPage = (function () {
    function PayPage(http, alertCtrl, domSanitizer, navCtrl, navParams) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.domSanitizer = domSanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.url = 'https://droidfiji.000webhostapp.com/stripe/tutorial1/tutorial/index.php?amount=';
        this.confirm = { key: "fj55518", buyer: '', property: '' };
        this.confirm.buyer = this.navParams.get('uid');
        this.confirm.property = this.navParams.get('pid');
        this.price = this.navParams.get('price');
        this.price = this.price * 2;
        this.r = this.domSanitizer.bypassSecurityTrustResourceUrl(this.url + this.price + '&buyer=' + this.confirm.buyer + '&property=' + this.confirm.property);
        console.log(this.r);
    }
    PayPage.prototype.ionViewDidLoad = function () {
    };
    PayPage.prototype.ionViewWillLeave = function () {
    };
    PayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pay',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\pay\pay.html"*/'<!--\n  Generated template for the PayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pay</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <iframe width="100%" height="100%" [src]="r" frameborder="0" allowfullscreen></iframe>\n  <!-- <ion-card >\n      <ion-list inset >\n    <ion-item>\n      <ion-label>EMAIL</ion-label>\n      <ion-input required="" type="text" [(ngModel)]="cardinfo.email"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>ACCOUNT NUMBER</ion-label>\n      <ion-input name="lastname"type="text"placeholder="XXXX - XXXX - XXXX - XXXX" required="" [(ngModel)]="cardinfo.number"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>MONTH</ion-label>\n      <ion-input required="" name ="dob" placeholder="MM"[(ngModel)]="cardinfo.expMonth"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>YEAR</ion-label>\n      <ion-input required="" type="text"placeholder="YY"[(ngModel)]="cardinfo.expYear"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>CVV</ion-label>\n      <ion-input required="" type="text"placeholder="XXXX"[(ngModel)]="cardinfo.cvc"></ion-input>\n    </ion-item>\n  </ion-list>\n  </ion-card>\n\n\n\n<button ion-button block outline  (click)="payy()"> Pay Now </button> -->\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\pay\pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentAddtimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
 * Generated class for the AgentAddtimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgentAddtimePage = (function () {
    // request={key:"fj55518",status:'',property:''};
    function AgentAddtimePage(http, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.send = { agent: '', key: "fj55518" };
        this.request = { key: "fj55518", property: '' };
        this.resend = { key: "fj55518", agent: '' };
        this.use = JSON.parse(localStorage.getItem('userdata'));
        this.send.agent = this.use.id;
        console.log(this.send.agent);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        //retrival of pending requests
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/getinterestedproperties', this.send, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.r = data.data;
            console.log(_this.r);
        }, function (err) {
            console.log("error encounted while requesting for Interested Noted properties For Particular Agent");
        });
        this.resend.agent = this.use.id;
        console.log(this.resend.agent);
        this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/getopenhomeschedule', this.resend, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.s = data.schedule;
            console.log(_this.s);
        }, function (err) {
            console.log("error encounted while checking for open home schedules");
        });
    }
    AgentAddtimePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpenhousePage');
    };
    AgentAddtimePage.prototype.Request = function (r) {
        var _this = this;
        console.log(r.property_id);
        this.request.property = r.property_id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/requestOpenHomeTime', this.request, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.r = data.data;
            console.log(_this.r);
        }, function (err) {
            console.log("error encounted while requesting for open_house_time");
        });
    };
    AgentAddtimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-agent-addtime',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\agent-addtime\agent-addtime.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Open House Arrangement</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="colored">\n    <ion-card padding>\n      <h1 class="centered">\n        The Following properties have been Noted Interested\n      </h1>\n      <p>Please Press \'Request\' to ask the Owner for prior Inspection Date & Time </p>\n      <table>\n          <thead>\n            <tr>\n              <th >Title</th>\n              <th >Price</th>\n              <th >Address</th>\n              <th >Owner Email</th>\n              <th>Owner Ph# </th>\n              <th > Action </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor="let r of r">\n              <td>{{ r.title }}</td>\n              <td> ${{ r.price }}</td>\n              <td>{{ r.location }}</td>\n              <td>{{r.email}}</td>\n              <td>{{r.phone}}</td>\n              <td>\n                <button ion-button small class="floatem"(click)="Request(r)" >Request</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </ion-card>\n    <p> </p>\n    <ion-card padding>\n        <h1 class="centered">\n            Schedule of Open House Time\n          </h1>\n          <p>The Table Below displays The Schedule For Open House Times</p>\n      <table>\n          <thead>\n              <tr>\n                <th >Title</th>\n                <th >Price</th>\n                <th >Address</th>\n                <th >Owner Email</th>\n                <th>Owner Ph# </th>\n                <th > Insp Date </th>\n                <th > Insp Time From </th>\n                <th > Insp Time To  </th>\n              </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor="let s of s">\n                    <td>{{ s.title }}</td>\n                    <td> ${{ s.price }}</td>\n                    <td>{{ s.location }}</td>\n                    <td>{{s.email}}</td>\n                    <td>{{s.phone}}</td>\n                    <td>{{s.date}}</td>\n                    <td>{{s.time_start}}</td>\n                    <td>{{s.time_end}}</td>\n                  </tr>\n            </tbody>\n      </table>\n    </ion-card>\n  </ion-content>  \n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\agent-addtime\agent-addtime.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AgentAddtimePage);
    return AgentAddtimePage;
}());

//# sourceMappingURL=agent-addtime.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
 * Generated class for the AgentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgentListPage = (function () {
    function AgentListPage(http, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.send = { key: "fj55518" };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/allagents', this.send, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.resut = data.data;
            console.log(_this.resut);
        }, function (err) {
            console.log("error");
        });
    }
    AgentListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgentListPage');
    };
    AgentListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-agent-list',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\agent-list\agent-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Agents</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-md-6 col-lg-4 col-xl-3 *ngFor="let resut of resut">\n        <ion-card class="img" >\n          <img class="h"src={{resut.pic_url}}/>\n            <ion-card-header>{{ resut.first_name }} {{ resut.last_name }}</ion-card-header>\n           <ion-card-content>\n              <ion-row > <ion-icon name="mail"> Email {{ resut.email}}</ion-icon> </ion-row>\n             \n             <ion-row ><ion-icon name="call"> {{ resut.phone}}</ion-icon></ion-row>\n            \n             <ion-row >\n                <ion-icon name="logo-linkedin"> {{ resut.linkedin}}</ion-icon>\n             </ion-row>\n             \n            </ion-card-content>           \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\agent-list\agent-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AgentListPage);
    return AgentListPage;
}());

//# sourceMappingURL=agent-list.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
 * Generated class for the AgentRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgentRequestPage = (function () {
    function AgentRequestPage(http, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.send = { key: "fj55518", agent_id: '' };
        this.request = { key: "fj55518", status: '', property: '' };
        this.use = JSON.parse(localStorage.getItem('userdata'));
        this.send.agent_id = this.use.id;
        console.log(this.send.agent_id);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        //retrival of pending requests
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/allagentpendingproperties', this.send, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.r = data.data;
            console.log(_this.r);
        }, function (err) {
            console.log("error encounted while requesting for Agents Liable Property Pending");
        });
        //retrival of approved requets
        this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/allagentactiveproperties', this.send, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.s = data.data;
            console.log(_this.s);
        }, function (err) {
            console.log("error encounted while requesting for Agents Liable Property Approved");
        });
        //retrival of Removed Properties
        this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/allagentnotactiveproperties', this.send, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.t = data.data;
            console.log(_this.t);
        }, function (err) {
            console.log("error encounted while requesting for Agents Liable Property");
        });
        //retieval of Rented Properties
        this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/allagentrentedproperties', this.send, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.u = data.data;
            console.log(_this.u);
        }, function (err) {
            console.log("error encounted while requesting for Agents Liable Property");
        });
    }
    AgentRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestsPage');
    };
    AgentRequestPage.prototype.Approve = function (r) {
        var _this = this;
        console.log(r.property_id);
        //to update the status of the property to Active
        this.request.status = "active";
        this.request.property = r.property_id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/setpropertystatus', this.request, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.r = data.data;
            console.log(_this.r);
        }, function (err) {
            console.log("error encounted while setting property status to active");
        });
    };
    AgentRequestPage.prototype.Remove = function (r) {
        var _this = this;
        console.log(r.property_id);
        //to update the status of the property to Inactive
        this.request.status = "notactive";
        this.request.property = r.property_id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/setpropertystatus', this.request, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.r = data.data;
            console.log(_this.r);
        }, function (err) {
            console.log("error encounted while setting property status to notactive");
        });
    };
    AgentRequestPage.prototype.Rented = function (s) {
        var _this = this;
        console.log(s.property_id);
        //to update the status of the property to Rented
        this.request.status = "rented";
        this.request.property = s.property_id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/setpropertystatus', this.request, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.s = data.data;
            console.log(_this.s);
        }, function (err) {
            console.log("error encounted while setting property status to rented");
        });
    };
    AgentRequestPage.prototype.Reactivate = function (t) {
        var _this = this;
        console.log(t.property_id);
        //to update the status of the property to active
        this.request.status = "pending";
        this.request.property = t.property_id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/setpropertystatus', this.request, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.t = data.data;
            console.log(_this.t);
        }, function (err) {
            console.log("error encounted while setting property status to pending");
        });
    };
    AgentRequestPage.prototype.Repost = function (u) {
        var _this = this;
        this.request.status = "active";
        this.request.property = u.property_id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/setpropertystatus', this.request, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.u = data.data;
            console.log(_this.u);
        }, function (err) {
            console.log("error encounted while setting property status to active");
        });
    };
    AgentRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-agent-request',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\agent-request\agent-request.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Liable Properties</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="colored">\n    <ion-card padding>\n       <h1 class="centered">Properties Requesting For Approval</h1>\n        <table class="footable">\n          <thead>\n            <tr>\n              <th >Upload Date </th>\n              <th >Title</th>\n              <th >Image</th>\n              <th >Price</th>\n              <th >Address</th>\n              <th >Owner Email</th>\n              <th >Status</th>\n              <th > Action </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor="let r of r">\n              <td> {{r.created_at | date:\'dd/MM/yyyy\'}}</td>\n              <td>{{ r.title }}</td>\n              <td> <img src={{r.property_pic}}/></td>\n              <td> ${{ r.price }}</td>\n              <td>{{ r.location }}</td>\n              <td>{{r.owner_email}}</td>\n              <td>{{ r. propertystatus }}</td>\n              <td>\n                <button ion-button small class="floatem"(click)="Approve(r)" >Approve</button>\n                <button ion-button color="danger" small class="floatem"(click)="Remove(r)">Remove</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n    </ion-card>\n  <ion-card padding>\n      <h1 class="centered">Advertised Properties</h1>\n      <table class="footable">\n          <thead>\n            <tr>\n              <th data-class="expand"> Upload date</th>\n              <th data-class="expand"> Title</th>\n              <th data-hide="phone">Image</th>\n              <th data-hide="phone,tablet">Price</th>\n              <th data-hide="phone,tablet">Address</th>\n              <th >Owner Email</th>\n              <th data-hide="phone,tablet">Status</th>\n              <th > Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor="let s of s">\n              <td> {{s.created_at | date:\'dd/MM/yyyy\'}}</td>\n              <td>{{ s.title }}</td>\n              <td> <img src={{s.property_pic}}/></td>\n              <td> ${{ s.price }}</td>\n              <td>{{ s.location }}</td>\n              <td>{{s.owner_email}}</td>\n              <td>{{ s. propertystatus }}</td>\n              <td>\n                <button ion-button small (click)="Rented(s)" >Rented</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n  </ion-card>\n  <ion-card padding>\n      <h1 class="centered">Removed Properties</h1>\n      <table class="footable">\n          <thead>\n            <tr>\n              <th data-class="expand"> Upload date</th>\n              <th data-class="expand"> Title</th>\n              <th data-hide="phone">Image</th>\n              <th data-hide="phone,tablet">Price</th>\n              <th data-hide="phone,tablet">Address</th>\n              <th >Owner Email</th>\n              <th data-hide="phone,tablet">Status</th>\n              <th > Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor="let t of t">\n              <td> {{t.created_at| date:\'dd/MM/yyyy\'}}</td>\n              <td>{{ t.title }}</td>\n              <td> <img src={{t.property_pic}}/></td>\n              <td> ${{ t.price }}</td>\n              <td>{{ t.location }}</td>\n              <td>{{t.owner_email}}</td>\n              <td>{{ t. propertystatus }}</td>\n              <td>\n                <button ion-button small (click)="Reactivate(t)"  >Reactivate</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n  </ion-card>\n    <ion-card padding>\n        <h1 class="centered">Rented Properties</h1>\n        <table class="footable">\n            <thead>\n              <tr>\n                <th data-class="expand"> Upload date</th>\n                <th data-class="expand"> Title</th>\n                <th data-hide="phone">Image</th>\n                <th data-hide="phone,tablet">Price</th>\n                <th data-hide="phone,tablet">Address</th>\n                <th >Owner Email</th>\n                <th data-hide="phone,tablet">Status</th>\n                <th > Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor="let u of u">\n                <td> {{u.created_at | date:\'dd/MM/yyyy\'}}</td>\n                <td>{{ u.title }}</td>\n                <td> <img src={{u.property_pic}}/></td>\n                <td> ${{ u.price }}</td>\n                <td>{{ u.location }}</td>\n                <td>{{ u.owner_email }}</td>\n                <td>{{ u. propertystatus }}</td>\n                <td>\n                  <button ion-button small (click)="Repost(u)"  >Repost</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n    </ion-card>\n     \n</ion-content>\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\agent-request\agent-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AgentRequestPage);
    return AgentRequestPage;
}());

//# sourceMappingURL=agent-request.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllreviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
 * Generated class for the AllreviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllreviewsPage = (function () {
    function AllreviewsPage(http, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.send = { key: "fj55518", agent: '' };
        this.resend = { key: "fj55518", agent: '' };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.use = JSON.parse(localStorage.getItem('userdata'));
        this.send.agent = this.use.id;
        this.resend.agent = this.use.id;
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/agentgetreviews', this.send, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.resut = data.data.tenantreviews;
            console.log(_this.resut);
        }, function (err) {
            console.log("error in getting tenant reveiws");
        });
        this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/agentgetreviews', this.resend, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.result = data.data.ownerreviews;
            console.log(_this.result);
        }, function (err) {
            console.log("error in getting owner reviews");
        });
    }
    AllreviewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllreviewsPage');
    };
    AllreviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-allreviews',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\allreviews\allreviews.html"*/'<!--\n  Generated template for the AllreviewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>All Reviews</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="colored">\n<ion-card padding>\n    <h1 class="centered"> All Reviews by Tenants are shown in the table below: </h1>\n    <table class="footable">\n        <thead>\n          <tr>\n            <th data-class="expand"> Reviewed By </th>\n            <th data-hide="phone">Reviewed For</th>\n            <th data-hide="phone,tablet">Property Title</th>\n            <th data-hide="phone,tablet">Reviews</th>\n            <th data-hide="phone,tablet">Ratings</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let resut of resut">\n            <td> {{resut.reviewby}}</td>\n            <td> {{resut.reviewfor}}</td>\n            <td> {{resut.propertytitle}}</td>\n            <td>{{resut.reviewdescription}}</td>\n            <td><ion-rating\n              class="stylesheet"\n              [numStars]="5"\n              [readOnly]="true"\n              [value]=resut.rank>\n              </ion-rating>\n              </td>\n          </tr>\n        </tbody>\n      </table>\n</ion-card>\n<ion-card>\n    <p>.</p>\n    <h1 class="centered"> All Reviews By Owners are shown in the table below: </h1>\n    <p>.</p>\n    <table class="footable">\n        <thead>\n          <tr>\n            <th data-class="expand"> Reviewed By </th>\n            <th data-hide="phone">Reviewed For</th>\n            <th data-hide="phone,tablet">Property Title</th>\n            <th data-hide="phone,tablet">Reviews</th>\n            <th data-hide="phone,tablet">Ratings</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let result of result">\n              <td> {{result.reviewby}}</td>\n              <td> {{result.reviewfor}}</td>\n              <td> {{result.propertytitle}}</td>\n              <td>{{result.reviewdescription}}</td>\n              <td><ion-rating\n                class="stylesheet"\n                [numStars]="5"\n                [readOnly]="true"\n                [value]=result.rank>\n                </ion-rating>\n                </td>\n          </tr>\n        </tbody>\n      </table>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\allreviews\allreviews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AllreviewsPage);
    return AllreviewsPage;
}());

//# sourceMappingURL=allreviews.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodegeneratorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
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
 * Generated class for the CodegeneratorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CodegeneratorPage = (function () {
    function CodegeneratorPage(http, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getusers = { key: "fj55518", agent: '' };
        this.generator = { key: "fj55518", property: '', userid: '' };
        //fetch the active users for code generation
        this.use = JSON.parse(localStorage.getItem('userdata'));
        this.getusers.agent = this.use.id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/getdetailsforcodegen', this.getusers, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.userdata = data.data;
            console.log(_this.userdata);
        }, function (err) {
            console.log("error while fetching the Active Users");
        });
    }
    CodegeneratorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CodegeneratorPage');
    };
    CodegeneratorPage.prototype.GenerateCod = function (userid, propertyid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.generator.userid = userid;
        this.generator.property = propertyid;
        console.log(this.generator.property);
        console.log(this.generator.userid);
        this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/generateauthcode', this.generator, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.s = data.authcode;
            console.log(_this.s);
        }, function (err) {
            console.log("error while executing generate code");
        });
    };
    CodegeneratorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-codegenerator',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\codegenerator\codegenerator.html"*/'<!--\n  Generated template for the CodegeneratorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Code Generator</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="backgrd">\n\n  <ion-card padding>\n      <h2 class="centered">Choose the User & Property from the menu below</h2>\n    <ion-item >\n      <ion-label>Select User:</ion-label>\n      <ion-select [(ngModel)]="userid">\n          <ion-option *ngFor="let userdata of userdata" value="{{userdata.userid}}">{{userdata.first_name}} {{userdata.last_name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item >\n      <ion-label>Select Property:</ion-label>\n      <ion-select [(ngModel)]="propertyid">\n          <ion-option *ngFor="let userdata of userdata" value="{{userdata.propertyid}}">{{userdata.propertydetails}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <div class="buttonfloat">\n      <button ion-button (click)="GenerateCod(userid,propertyid)">\n        Generate\n         </button>\n    </div>\n    <div>\n      <p>-</p>\n      <div class="centered">\n        <h1 class="centered">Generated Code :  {{s}}</h1>\n      </div>\n      <p>- </p>\n    </div>\n    \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\codegenerator\codegenerator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], CodegeneratorPage);
    return CodegeneratorPage;
}());

//# sourceMappingURL=codegenerator.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__ = __webpack_require__(47);
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
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = (function () {
    function MapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showMap();
    }
    MapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
    };
    MapPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map").setView([-17.713371, 178.065033], 9);
            __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Group 5'
            }).addTo(_this.map);
            _this.showMarkers();
        });
    };
    MapPage.prototype.showMarkers = function () {
        var _this = this;
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.layerGroup([]);
        this.properties = JSON.parse(localStorage.getItem('maphouse'));
        console.log(this.properties);
        this.properties.forEach(function (property) {
            if (property.lat, property.lon) {
                var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([property.lat, property.lon]).on('click', function (event) { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__["a" /* PropertyDetailPage */], { house: event.target.data }); });
                marker.data = property;
                _this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-map',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\map\map.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div id="map" style="width:100%; height:100%;"></div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyHousesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__property_detail_property_detail__ = __webpack_require__(47);
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
 * Generated class for the MyHousesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyHousesPage = (function () {
    function MyHousesPage(http, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.s = { key: "fj55518", userid: '' };
        this.del = { key: "fj55518", buyer: '', property: '' };
        this.use = JSON.parse(localStorage.getItem('userdata'));
        this.s.userid = this.use.id;
        this.del.buyer = this.use.id;
        console.log(this.s.userid);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/userinterestedpropertiesinfo', this.s, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.res = data.data;
            console.log(_this.res);
            console.log("checking");
            if (_this.res.length > 0) {
                _this.hide = true;
            }
            else {
                _this.hide = false;
            }
        }, function (err) {
            console.log("user intere error");
        });
    }
    MyHousesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyHousesPage');
    };
    MyHousesPage.prototype.view = function (mine) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__property_detail_property_detail__["a" /* PropertyDetailPage */], { house: mine });
    };
    MyHousesPage.prototype.remove = function (row) {
        var _this = this;
        this.del.property = row.id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/notinterested', this.del, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.reply = data;
            console.log(_this.reply);
            var index = _this.res.indexOf(row);
            console.log(index);
            if (index !== -1) {
                _this.res.splice(index, 1);
                console.log("removed");
            }
        }, function (err) {
            console.log("remove error");
        });
    };
    MyHousesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-houses',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\my-houses\my-houses.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Houses</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div style=" position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);" [hidden]="hide">\n\n    <img src="assets/imgs/empty.png">\n    <p></p>\n\n  </div>\n    <ion-list *ngFor="let res of res" >\n        <ion-item-sliding >\n          <ion-item (click)="view(res)">\n              <ion-avatar item-left>\n                  <img src="{{res.pic_url}}"/>\n              </ion-avatar>\n            {{res.title}}\n          </ion-item>\n     \n          <ion-item-options side="right">\n            <button ion-button (click)="remove(res)">Unmark</button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\my-houses\my-houses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MyHousesPage);
    return MyHousesPage;
}());

//# sourceMappingURL=my-houses.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypropertiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
 * Generated class for the MypropertiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MypropertiesPage = (function () {
    function MypropertiesPage(http, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.send = { key: "fj55518", userid: '' };
        this.use = JSON.parse(localStorage.getItem('userdata'));
        this.send.userid = this.use.id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/allownerproperties', this.send, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.r = data.data;
            console.log(_this.r);
        }, function (err) {
            console.log("error");
        });
    }
    MypropertiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MypropertiesPage');
    };
    MypropertiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myproperties',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\myproperties\myproperties.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Houses</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="colored">\n  <ion-card padding>\n      <h1 class="centered">List of Properties That Belong To Me</h1>\n          <table class="footable">\n                  <thead>\n                    <tr>\n                      <th data-class="expand"> Upload date</th>\n                      <th data-hide="phone">Image</th>\n                      <th data-hide="phone,tablet">Price</th>\n                      <th data-hide="phone,tablet">Address</th>\n                      <th data-hide="phone,tablet">Status</th>\n                      <th data-hide="phone,tablet">Agent</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor="let r of r">\n                      <td> {{r.created_at | date:\'dd/MM/yyyy\'}}</td>\n                      <td> <img src={{r.property_pic}}/></td>\n                      <td> ${{ r.price }}</td>\n                      <td>{{ r.location }}</td>\n                      <td>{{ r.property_status }}</td>\n                      <td> <ion-avatar item-left>\n                        <img class="img2" src="{{r?.agent_pic}}"/>\n                    </ion-avatar>{{ r.first_name }} {{ r.last_name }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\myproperties\myproperties.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MypropertiesPage);
    return MypropertiesPage;
}());

//# sourceMappingURL=myproperties.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
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
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewPage = (function () {
    function ReviewPage(http, navCtrl, navParams, toastCtrl) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.getusers = { key: "fj55518", user: '' };
        this.submittext = { key: "fj55518", property: '', review: '', rating: '', user: '' };
        this.use = JSON.parse(localStorage.getItem('userdata'));
        this.getusers.user = this.use.id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/getpropertypeople', this.getusers, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.userdata = data.data;
            console.log(_this.userdata);
        }, function (err) {
            console.log("error while fetching the My Property to Review");
        });
    }
    ReviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewPage');
    };
    ReviewPage.prototype.starClicked = function (value) {
        this.value1 = value;
        console.log("Rated :", value);
    };
    ReviewPage.prototype.submited = function (propertyid, text) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.submittext.property = propertyid;
        this.submittext.review = text;
        this.submittext.rating = this.value1;
        this.submittext.user = this.use.id;
        console.log();
        this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/customerreviews', this.submittext, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.s = data;
            // console.log(this.s)
            _this.presentToast();
        }, function (err) {
            console.log("error while executing Submit Review");
        });
    };
    ReviewPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Review Added Sucessfully',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-review',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\review\review.html"*/'<!--\n  Generated template for the ReviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>review</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="colored">\n  <ion-card padding >\n    <h1 class="centered">To Review Property Please Fill all the details & Click Submit </h1>\n  <ion-item >\n    <ion-label>Select property:</ion-label>\n    <ion-select [(ngModel)]="property_id">\n        <ion-option *ngFor="let userdata of userdata" value="{{userdata.property_id}}">{{userdata.title}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Write Review: </ion-label>\n    <ion-textarea name="writereview"placeholder="Write Review about the (Property/Owner/Customer)"[(ngModel)]="writereview"></ion-textarea>\n  </ion-item>\n  <ion-item>\n    <ion-label> Rate: </ion-label>\n  </ion-item>\n   <div>\n    <ion-rating\n    class="stylesheet"\n    [numStars]="5"\n    [readOnly]="false"\n    [value]="3"\n    (clicked)="starClicked($event)">\n    </ion-rating>\n   </div>\n   <p>.</p>\n   <div class="padded">\n     <button ion-button full (click)="submited(property_id,writereview)">\n       Submit\n     </button>\n   </div>\n   <p>.</p>\n \n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\review\review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(35);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(events, http, navCtrl, navParams) {
        this.events = events;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signup = { email: '',
            password: '',
            first_name: '',
            last_name: '',
            pic_url: '' };
        this.sendd = { key: "fj55518", email: '', password: '', firstname: '', lastname: '', role: 'user' };
        this.check = true;
        this.check2 = true;
        this.backgrounds = [
            'assets/imgs/background/background-1.jpg',
            'assets/imgs/background/background-5.jpg',
            'assets/imgs/background/background-3.jpg',
            'assets/imgs/background/background-4.jpg'
        ];
    }
    SignupPage.prototype.onSignup = function () {
        var _this = this;
        if (this.signup.email.length <= 0 && this.signup.password.length <= 0) {
            this.check = false;
            this.check2 = false;
        }
        else if (this.signup.email.length <= 0) {
            this.check = false;
        }
        else if (this.signup.password.length <= 0) {
            this.check2 = false;
        }
        else if (this.signup.email.length > 3 && this.signup.password.length > 5) {
            this.check = true;
            this.check2 = true;
            this.sendd.email = this.signup.email;
            this.sendd.password = this.signup.password;
            this.sendd.firstname = this.signup.first_name;
            this.sendd.lastname = this.signup.last_name;
            console.log(this.sendd);
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/signup', this.sendd, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.userdata = data;
                if (_this.userdata.code === 1) {
                    localStorage.setItem('userdata', JSON.stringify(_this.userdata.userdata));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                    console.log(_this.userdata);
                }
            }, function (err) {
                console.log("error");
            });
        }
        else {
        }
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\signup\signup.html"*/'<ion-header>\n		<ion-navbar>\n			<button ion-button menuToggle>\n				<ion-icon name="menu"></ion-icon>\n			</button>\n			<ion-title>Signup</ion-title>\n		</ion-navbar>\n	</ion-header>\n\n<ion-content>\n		<ion-slides pager="false" autoplay="2000" loop="true" speed="1500" effect="fade">\n		  <ion-slide class="slide-background swiper-no-swiping" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n		  </ion-slide>\n		</ion-slides>\n		<div class="login-container">\n				<img class="logo" src="assets/imgs/home.png" />\n			<ion-item>\n					<ion-input [(ngModel)]="signup.email"  type="text"placeholder="email" required></ion-input>\n			\n			</ion-item>\n\n			<p ion-text [hidden]="check" color="danger" padding-left>\n					Username is required with 3 or more characters\n				</p>\n\n			<ion-item>\n					<ion-input [(ngModel)]="signup.password"  type="password" placeholder="password"  required></ion-input>\n			</ion-item>\n\n			<p ion-text [hidden]="check2" color="danger" padding-left>\n					Password is required with 5 or more characters\n				</p>\n\n				<ion-item>\n					<ion-input [(ngModel)]="signup.first_name"   placeholder="first name"  required></ion-input>\n			</ion-item>\n			<ion-item>\n				<ion-input [(ngModel)]="signup.last_name"   placeholder="last name"  required></ion-input>\n		</ion-item>\n			<ion-col>\n					<button ion-button (click)="onSignup()" block>Create</button>\n			</ion-col>\n		</div>\n</ion-content>'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitHousePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var URL = 'http://droidfiji.000webhostapp.com/PHP-Slim-Restful/up.php';
var SubmitHousePage = (function () {
    function SubmitHousePage(toastCtrl, loadingCtrl, formBuilder, http, navCtrl, navParams) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.getagent = { key: "fj55518" };
        this.selectedfile = null;
        this.title = '';
        this.location = '';
        this.price = ' ';
        this.description = '';
        this.numbedroom = ' ';
        this.numwashroom = ' ';
        this.numshower = ' ';
        this.carpark = ' ';
        this.agent = ' ';
        this.type = '';
        this.user = JSON.parse(localStorage.getItem('userdata'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/allagentsbrief', this.getagent, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.agentform = data.data;
            console.log(_this.agentform);
        }, function (err) {
            console.log("error");
        });
    }
    SubmitHousePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubmitHousePage');
    };
    SubmitHousePage.prototype.onfileselected = function (event) {
        this.selectedfile = event.target.files[0];
        console.log(event);
    };
    SubmitHousePage.prototype.reupload = function () {
        var _this = this;
        var fd = new FormData();
        fd.append('image', this.selectedfile);
        fd.append('key', 'fj55518');
        fd.append('agent', this.agent);
        fd.append('owner', this.user.id);
        fd.append('type', this.type);
        fd.append('carpark', this.carpark);
        fd.append('numwashroom', this.numwashroom);
        fd.append('numshower', this.numshower);
        fd.append('numbedroom', this.numbedroom);
        fd.append('description', this.description);
        fd.append('bond', this.price);
        fd.append('price', this.price);
        fd.append('location', this.location);
        fd.append('title', this.title);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/addproperty', fd, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.agentforms = data.data;
            console.log(_this.agentforms.data);
            console.log(_this.agentforms.code);
        }, function (err) {
            console.log("error Cannot Upload the Image");
            __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
                title: "Success",
                text: "Your property is now awaiting Approval",
                icon: "success",
            });
        });
    };
    SubmitHousePage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Registration Successful. Your Property will be approved by an Agent Soon',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SubmitHousePage.prototype.addagent = function () {
        console.log(this.slideOneForm.value);
    };
    SubmitHousePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-submit-house',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\submit-house\submit-house.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Submit A House</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="back">\n\n    <ion-item >\n      <ion-label>Title: </ion-label>\n        <ion-input type="text" placeholder="Your Property title... " [(ngModel)]="title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Type: </ion-label>\n        <ion-input type="text"placeholder="type" [(ngModel)]="type"  ></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Location: </ion-label>\n          <ion-input type="text"placeholder="Your Property Location..." [(ngModel)]="location"  ></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label>Price: </ion-label>\n            <ion-input type="number" placeholder="Rent price is taken as bond price also" [(ngModel)]="price"></ion-input>\n        </ion-item>\n          <ion-item>\n              <ion-label># of Bedrooms: </ion-label>\n                <ion-input type="number" placeholder="Number of Bedrooms..." [(ngModel)]="numbedroom"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label># of Bathroom: </ion-label>\n                  <ion-input type="number" placeholder="Number of Bathrooms..." [(ngModel)]="numshower"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label># of Washroom: </ion-label>\n                    <ion-input type="number" placeholder="Number of Toilet..." [(ngModel)]="numwashroom"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label># of CarPark: </ion-label>\n                      <ion-input type="number" placeholder="Number of CarPark..." [(ngModel)]="carpark"></ion-input>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label>Description: </ion-label>\n                      <ion-textarea placeholder="Short Descriptions abuot the Features..."  [(ngModel)]="description" ></ion-textarea>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label>Pick Agent:</ion-label>\n                      <ion-select  [(ngModel)]="agent">\n                          <ion-option *ngFor="let agentform of agentform" value="{{agentform.id}}">{{agentform.first_name}} {{agentform.last_name}}</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  <ion-item>\n                    <input type="file" (change)="onfileselected($event)"/>\n                     </ion-item>\n      <button ion-button full color="danger" icon-left (click)="reupload()">\n          <ion-icon name="cloud-upload"></ion-icon>\n        Done\n      </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\submit-house\submit-house.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SubmitHousePage);
    return SubmitHousePage;
}());

//# sourceMappingURL=submit-house.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserinspecttimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);
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
 * Generated class for the UserinspecttimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserinspecttimePage = (function () {
    function UserinspecttimePage(http, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.send = { key: "fj55518", email: '', id: '' };
        this.confirmed = { key: "fj55518", property: '', starttime: '', endtime: '', date: '' };
        this.use = JSON.parse(localStorage.getItem('userdata'));
        this.send.id = this.use.id;
        this.send.email = this.use.email;
        //console.log(this.send.id);
        //console.log(this.send.email);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        //retrival of open house times for user
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/getpropertyinfoopenhome', this.send, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.r = data.data;
            console.log(_this.r);
        }, function (err) {
            console.log("error encounted while requesting for open house time for user");
        });
    }
    UserinspecttimePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserinspecttimePage');
    };
    UserinspecttimePage.prototype.confirm = function (r, date, timefrom, timeto) {
        var _this = this;
        console.log(r.id);
        //to update the status of the property to Active
        this.confirmed.starttime = timefrom;
        this.confirmed.endtime = timeto;
        this.confirmed.date = date;
        this.confirmed.property = r.id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        console.log(r.id, " : ", timefrom, " : ", timeto, " : ", date);
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/setopenhometime', this.confirmed, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.r = data.data;
            console.log(_this.r);
            __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()({
                title: "Success",
                text: "Good Job Mate",
                icon: "success",
            });
        }, function (err) {
            console.log("error encounted while setting property status to active");
        });
    };
    UserinspecttimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-userinspecttime',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\userinspecttime\userinspecttime.html"*/'<!--\n  Generated template for the UserinspecttimePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Open House Inspection Time</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="colored">\n \n <ion-card>\n    <h1 class="centered">\n        Fill in the Inspection Date & Time For Your Property\n      </h1>\n      <ion-grid>\n        <ion-row>\n          <ion-col *ngFor="let r of r">\n              <ion-card >\n                  <h2 class="headerstyle">Property Info</h2>\n                  <ion-list>\n                      <ion-item>\n                          <ion-label>Property Title</ion-label>\n                          <ion-input disabled="true"name="title"type="text"[(ngModel)]="r.title"></ion-input>\n                          \n                        </ion-item>\n                        <ion-item>\n                            <ion-label>Property Address</ion-label>\n                            <ion-input disabled="true" name="address"type="text"[(ngModel)]="r.location"></ion-input>\n                         \n                          </ion-item>\n                          <ion-item>\n                              <ion-label>Property Price</ion-label>\n                              <ion-input disabled="true" name="price"type="text"[(ngModel)]="r.price"></ion-input>\n                             \n                            </ion-item>\n                  </ion-list>\n                  <h2 class="headerstyle">Open House Time Info</h2>\n                  <ion-list>\n                      <ion-item>\n                          <ion-label>Date</ion-label>\n                          <ion-datetime  name ="date"displayFormat="YYYY MMM DD "placeholder="Choose Your Date of Inspection"[(ngModel)]="date"></ion-datetime>\n                       \n                        </ion-item>\n                        <ion-item>\n                            <ion-label>Inspection Time From</ion-label>\n                            <ion-datetime  name ="timefrom"displayFormat="h:mm A" pickerFormat="h mm A"placeholder="Time Starts From"[(ngModel)]="timefrom"></ion-datetime>\n                         \n                          </ion-item>\n                          <ion-item>\n                              <ion-label>Inspection Time To</ion-label>\n                              <ion-datetime  name ="timeto"displayFormat="h:mm A" pickerFormat="h mm A"placeholder="Time End"[(ngModel)]="timeto"></ion-datetime>\n                          \n                            </ion-item>\n                  </ion-list>\n                  <div class="centereditem">\n                      <button ion-button (click)="confirm(r,date, timefrom,timeto)">\n                          Confirm\n                        </button>\n                  </div>\n                  \n                </ion-card> \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n        <div>\n              \n        </div>\n </ion-card> \n \n</ion-content>\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\userinspecttime\userinspecttime.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], UserinspecttimePage);
    return UserinspecttimePage;
}());

//# sourceMappingURL=userinspecttime.js.map

/***/ }),

/***/ 131:
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
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		303,
		17
	],
	"../pages/account/account.module": [
		304,
		16
	],
	"../pages/agent-addtime/agent-addtime.module": [
		305,
		15
	],
	"../pages/agent-list/agent-list.module": [
		306,
		14
	],
	"../pages/agent-request/agent-request.module": [
		307,
		13
	],
	"../pages/allreviews/allreviews.module": [
		308,
		12
	],
	"../pages/codegenerator/codegenerator.module": [
		309,
		11
	],
	"../pages/login/login.module": [
		311,
		10
	],
	"../pages/map/map.module": [
		310,
		9
	],
	"../pages/my-houses/my-houses.module": [
		312,
		8
	],
	"../pages/myproperties/myproperties.module": [
		313,
		7
	],
	"../pages/pay/pay.module": [
		314,
		6
	],
	"../pages/property-detail/property-detail.module": [
		315,
		5
	],
	"../pages/property-list/property-list.module": [
		316,
		4
	],
	"../pages/review/review.module": [
		317,
		3
	],
	"../pages/signup/signup.module": [
		318,
		2
	],
	"../pages/submit-house/submit-house.module": [
		319,
		1
	],
	"../pages/userinspecttime/userinspecttime.module": [
		320,
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
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_list_property_list__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(menu, storage, navCtrl) {
        this.menu = menu;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.slideIndex = 0;
        this.slides = [
            {
                title: 'Welcome to FijiHomes',
                imageUrl: 'assets/imgs/started.jpg',
                description: 'Best homes around fiji',
            }
        ];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    HomePage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    HomePage.prototype.goToHome = function () {
        var _this = this;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__property_list_property_list__["a" /* PropertyListPage */]).then(function () {
            _this.storage.set('haSeenTutorial', 'true');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], HomePage.prototype, "slider", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\home\home.html"*/'<ion-content fullscreen="true" class="no-padding-top getstarted">\n    <ion-slides #slider pager="true">\n      <ion-slide *ngFor="let slide of slides"\n                 class="slide-background swiper-no-swiping"\n                 [ngStyle]="{\'background-image\': \'url(\' + +\')\'}">\n        <div class="text-wrapper">\n          <div class="slide-text">\n            <h2 class="slide-title" [innerHTML]="slide.title"></h2><br>\n            <p [innerHTML]="slide.description"></p>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n    <div class="floating-buttons pop-in" *ngIf="slideIndex >= slides.length - 1">\n      <button ion-button clear large full (click)="goToHome()">Let\'s go!</button>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_stripe__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_agent_list_agent_list__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_codegenerator_codegenerator__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_allreviews_allreviews__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pay_pay__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_my_houses_my_houses__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_property_list_property_list__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_account_account__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_about_about__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_userinspecttime_userinspecttime__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_review_review__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_map_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_agent_request_agent_request__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_agent_addtime_agent_addtime__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_myproperties_myproperties__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_submit_house_submit_house__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_property_detail_property_detail__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_file_upload__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ion_rating_ion_rating__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_agent_list_agent_list__["a" /* AgentListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_30__ion_rating_ion_rating__["a" /* IonRating */],
                __WEBPACK_IMPORTED_MODULE_13__pages_my_houses_my_houses__["a" /* MyHousesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_property_list_property_list__["a" /* PropertyListPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_userinspecttime_userinspecttime__["a" /* UserinspecttimePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_codegenerator_codegenerator__["a" /* CodegeneratorPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_allreviews_allreviews__["a" /* AllreviewsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_property_detail_property_detail__["a" /* PropertyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_submit_house_submit_house__["a" /* SubmitHousePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_myproperties_myproperties__["a" /* MypropertiesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_agent_request_agent_request__["a" /* AgentRequestPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_agent_addtime_agent_addtime__["a" /* AgentAddtimePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pay_pay__["a" /* PayPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_27__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_29_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agent-addtime/agent-addtime.module#AgentAddtimePageModule', name: 'AgentAddtimePage', segment: 'agent-addtime', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agent-list/agent-list.module#AgentListPageModule', name: 'AgentListPage', segment: 'agent-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agent-request/agent-request.module#AgentRequestPageModule', name: 'AgentRequestPage', segment: 'agent-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allreviews/allreviews.module#AllreviewsPageModule', name: 'AllreviewsPage', segment: 'allreviews', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/codegenerator/codegenerator.module#CodegeneratorPageModule', name: 'CodegeneratorPage', segment: 'codegenerator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-houses/my-houses.module#MyHousesPageModule', name: 'MyHousesPage', segment: 'my-houses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myproperties/myproperties.module#MypropertiesPageModule', name: 'MypropertiesPage', segment: 'myproperties', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pay/pay.module#PayPageModule', name: 'PayPage', segment: 'pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/property-detail/property-detail.module#PropertyDetailPageModule', name: 'PropertyDetailPage', segment: 'property-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/property-list/property-list.module#PropertyListPageModule', name: 'PropertyListPage', segment: 'property-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/review/review.module#ReviewPageModule', name: 'ReviewPage', segment: 'review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/submit-house/submit-house.module#SubmitHousePageModule', name: 'SubmitHousePage', segment: 'submit-house', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userinspecttime/userinspecttime.module#UserinspecttimePageModule', name: 'UserinspecttimePage', segment: 'userinspecttime', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_28__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_agent_list_agent_list__["a" /* AgentListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_my_houses_my_houses__["a" /* MyHousesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_property_list_property_list__["a" /* PropertyListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_userinspecttime_userinspecttime__["a" /* UserinspecttimePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_codegenerator_codegenerator__["a" /* CodegeneratorPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_allreviews_allreviews__["a" /* AllreviewsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_property_detail_property_detail__["a" /* PropertyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_submit_house_submit_house__["a" /* SubmitHousePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_myproperties_myproperties__["a" /* MypropertiesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_agent_request_agent_request__["a" /* AgentRequestPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_agent_addtime_agent_addtime__["a" /* AgentAddtimePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pay_pay__["a" /* PayPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_stripe__["a" /* Stripe */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
    }
    PopoverPage.prototype.support = function () {
        this.app.getRootNav().push('SupportPage');
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2/getting-started')\">Learn Ionic</button>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2')\">Documentation</button>\n      <button ion-item (click)=\"close('http://showcase.ionicframework.com')\">Showcase</button>\n      <button ion-item (click)=\"close('https://github.com/ionic-team/ionic')\">GitHub Repo</button>\n      <button ion-item (click)=\"support()\">Support</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=about-popover.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_agent_list_agent_list__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_houses_my_houses__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_property_list_property_list__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_allreviews_allreviews__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_userinspecttime_userinspecttime__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_account__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_review_review__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_codegenerator_codegenerator__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_map_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_user_data__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_submit_house_submit_house__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_myproperties_myproperties__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_agent_request_agent_request__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_agent_addtime_agent_addtime__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var MyApp = (function () {
    function MyApp(userData, storage, events, menu, platform, statusBar, splashScreen) {
        var _this = this;
        this.userData = userData;
        this.storage = storage;
        this.events = events;
        this.menu = menu;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.appPages = [
            { title: 'Properties', name: 'PropertyListPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_property_list_property_list__["a" /* PropertyListPage */], icon: 'home' },
            { title: 'Agents', name: 'AgentListPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_agent_list_agent_list__["a" /* AgentListPage */], icon: 'contacts' },
            { title: 'Map', name: 'MapPage', component: __WEBPACK_IMPORTED_MODULE_17__pages_map_map__["a" /* MapPage */], icon: 'map' },
            { title: 'About', name: 'AboutPage', component: __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */], icon: 'information-circle' }
        ];
        this.loggedInPages = [
            { title: 'Account', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_13__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'My Favourites', name: 'MyHousesPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_my_houses_my_houses__["a" /* MyHousesPage */], icon: 'star' },
            { title: 'Submit House', name: 'SubmitHousePage', component: __WEBPACK_IMPORTED_MODULE_19__pages_submit_house_submit_house__["a" /* SubmitHousePage */], icon: 'add-circle' },
            { title: 'Inspection Time', name: 'UserinspecttimePage', component: __WEBPACK_IMPORTED_MODULE_12__pages_userinspecttime_userinspecttime__["a" /* UserinspecttimePage */], icon: 'eye' },
            { title: 'Review', name: 'ReviewPage', component: __WEBPACK_IMPORTED_MODULE_15__pages_review_review__["a" /* ReviewPage */], icon: 'star-half' },
            { title: 'My Houses', name: 'MypropertiesPage', component: __WEBPACK_IMPORTED_MODULE_20__pages_myproperties_myproperties__["a" /* MypropertiesPage */], icon: 'home' }
        ];
        this.agentInPages = [
            { title: 'Requests', name: 'AgentRequestPage', component: __WEBPACK_IMPORTED_MODULE_21__pages_agent_request_agent_request__["a" /* AgentRequestPage */], icon: 'checkmark' },
            { title: 'Open House Time', name: 'AgentAddtimePage', component: __WEBPACK_IMPORTED_MODULE_22__pages_agent_addtime_agent_addtime__["a" /* AgentAddtimePage */], icon: 'time' },
            { title: 'Code Generator', name: 'CodegeneratorPage', component: __WEBPACK_IMPORTED_MODULE_16__pages_codegenerator_codegenerator__["a" /* CodegeneratorPage */], icon: 'barcode' },
            { title: 'All Reviews', name: 'AllreviewsPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_allreviews_allreviews__["a" /* AllreviewsPage */], icon: 'star' },
            { title: 'Account', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_13__pages_account_account__["a" /* AccountPage */], icon: 'person' }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Signup', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        this.storage.get('haSeenTutorial').then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                if (localStorage.getItem('userdata')) {
                    _this.userrole = JSON.parse(localStorage.getItem('userdata'));
                    console.log(_this.userrole);
                    _this.enableMenu(_this.userrole.role);
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_property_list_property_list__["a" /* PropertyListPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
                    console.log("no storage", localStorage.getItem('userdata'));
                }
            }
            else {
                console.log("fucked", localStorage.getItem('userdata'));
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
            }
            _this.platformReady();
        });
        this.listenToLoginEvents();
    }
    MyApp.prototype.platformReady = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        var params = {};
        this.nav.setRoot(page.component).catch(function (err) {
            console.log("Didn't set nav root: " + err);
        });
        if (page.logsOut === true) {
        }
    };
    MyApp.prototype.enableMenu = function (loggedIn) {
        if (loggedIn == "user") {
            this.menu.enable(true, 'loggedInMenu');
        }
        else if (loggedIn == "agent") {
            this.menu.enable(true, 'agentInMenu');
        }
        else {
            this.menu.enable(true, 'loggedOutMenu');
        }
    };
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu("user");
        });
        this.events.subscribe('agent:login', function () {
            _this.enableMenu("agent");
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu("user");
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu("logout");
        });
    };
    MyApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\app\app.html"*/'<ion-split-pane>\n\n    <!-- logged out menu -->\n    <ion-menu id="loggedOutMenu" [content]="content">\n  \n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Fiji Homes</ion-title>\n          <ion-buttons left>\n              <button ion-button icon-only>\n                <ion-icon name="home"></ion-icon>\n              </button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n  \n      <ion-content class="outer-content">\n  \n        <ion-list>\n          <ion-list-header>\n            Navigate\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n  \n        <ion-list>\n          <ion-list-header>\n            Account\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n  \n        <!-- <ion-list>\n          <ion-list-header>\n            Tutorial\n          </ion-list-header>\n          <button ion-item menuClose (click)="openTutorial()">\n            <ion-icon item-start name="hammer"></ion-icon>\n            Show Tutorial\n          </button>\n        </ion-list> -->\n      </ion-content>\n  \n    </ion-menu>\n  \n    <!-- logged in menu -->\n    <ion-menu id="loggedInMenu" [content]="content">\n  \n        <ion-header>\n            <ion-toolbar>\n              <ion-title>Fiji Homes</ion-title>\n              <ion-buttons left>\n                  <button ion-button icon-only>\n                    <ion-icon name="home"></ion-icon>\n                  </button>\n              </ion-buttons>\n            </ion-toolbar>\n          </ion-header>\n  \n      <ion-content class="outer-content">\n  \n        <ion-list>\n          <ion-list-header>\n            Navigate\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n  \n        <ion-list>\n          <ion-list-header>\n            Account\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n  \n      </ion-content>\n  \n    </ion-menu>\n    \n     <!-- Agents in menu -->\n     <ion-menu id="agentInMenu" [content]="content">\n  \n      <ion-header>\n          <ion-toolbar>\n            <ion-title>Fiji Homes</ion-title>\n            <ion-buttons left>\n                <button ion-button icon-only>\n                  <ion-icon name="home"></ion-icon>\n                </button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navigate\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Account\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of agentInPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n  \n    <!-- main navigation -->\n    <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n  \n  </ion-split-pane>\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_18__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonRating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IonRating = (function () {
    function IonRating() {
        this.numStars = 5;
        this.readOnly = true;
        this.value = 5;
        this.clicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.stars = [];
    }
    IonRating.prototype.ngAfterViewInit = function () {
        this.calc();
    };
    IonRating.prototype.calc = function () {
        var _this = this;
        setTimeout(function () {
            _this.stars = [];
            var tmp = _this.value;
            for (var i = 0; i < _this.numStars; i++, tmp--)
                if (tmp >= 1)
                    _this.stars.push("star");
                else if (tmp < 1 && tmp > 0)
                    _this.stars.push("star-half");
                else
                    _this.stars.push("star-outline");
        }, 0);
    };
    IonRating.prototype.starClicked = function (index) {
        if (!this.readOnly) {
            this.value = index + 1;
            this.calc();
            this.clicked.emit(this.value);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], IonRating.prototype, "numStars", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], IonRating.prototype, "readOnly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], IonRating.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], IonRating.prototype, "clicked", void 0);
    IonRating = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ion-rating',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\ion-rating\ion-rating.html"*/'<ion-grid no-padding no-margin class="ion-rating-container">\n    <ion-row>\n        <ion-col text-center *ngFor="let star of stars; let i = index" tappable (click)="starClicked(i)">\n            <ion-icon [name]="star"></ion-icon>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\ion-rating\ion-rating.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], IonRating);
    return IonRating;
}());

//# sourceMappingURL=ion-rating.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__property_list_property_list__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(34);
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
var LoginPage = (function () {
    function LoginPage(storage, events, http, navCtrl, navParams) {
        this.storage = storage;
        this.events = events;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.login = { email: '',
            password: '',
            first_name: '',
            last_name: '',
            pic_url: '' };
        this.check = true;
        this.check2 = true;
        this.send = { key: "fj55518", email: '', password: '' };
        this.backgrounds = [
            'assets/imgs/background/background-1.jpg',
            'assets/imgs/background/background-5.jpg',
            'assets/imgs/background/background-3.jpg',
            'assets/imgs/background/background-4.jpg'
        ];
    }
    LoginPage.prototype.onLogin = function () {
        var _this = this;
        if (this.login.email.length <= 0 && this.login.password.length <= 0) {
            this.check = false;
            this.check2 = false;
        }
        else if (this.login.email.length <= 0) {
            this.check = false;
        }
        else if (this.login.password.length <= 0) {
            this.check2 = false;
        }
        else if (this.login.email.length > 3 && this.login.password.length > 5) {
            this.check = true;
            this.check2 = true;
            //this.userData.signup(this.login.email);
            this.send.email = this.login.email;
            this.send.password = this.login.password;
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/login', this.send, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.userdata = data;
                if (_this.userdata.code == '1') {
                    if (_this.userdata.userdata.role == 'user') {
                        localStorage.setItem('userdata', JSON.stringify(_this.userdata.userdata));
                        _this.events.publish('user:login');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__property_list_property_list__["a" /* PropertyListPage */]);
                        console.log("user", _this.userdata.userdata);
                    }
                    else if (_this.userdata.userdata.role == 'agent') {
                        localStorage.setItem('userdata', JSON.stringify(_this.userdata.userdata));
                        _this.events.publish('agent:login');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__property_list_property_list__["a" /* PropertyListPage */]);
                        console.log("agent", _this.userdata.userdata);
                    }
                }
                else {
                    console.log("didnt match", _this.userdata);
                }
            }, function (err) {
                console.log("error");
            });
        }
        else {
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n		<ion-slides pager="false" autoplay="2000" loop="true" speed="1500" effect="fade">\n		  <ion-slide class="slide-background swiper-no-swiping" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n		  </ion-slide>\n		</ion-slides>\n		<div class="login-container">\n		  <img class="logo" src="assets/imgs/home.png" />\n	\n			<ion-item>\n			  <ion-input type="text" [(ngModel)]="login.email" #username="ngModel" name="email"  placeholder="email" autocapitalize="off" required></ion-input>\n			\n			</ion-item>\n\n			<p ion-text [hidden]="check" color="danger" padding-left>\n					Username is required\n			</p>\n\n			<ion-item>\n					<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" placeholder="password" required></ion-input>\n			</ion-item>\n\n			<p ion-text [hidden]="check2" color="danger" padding-left>\n					Password is required\n			</p>\n\n\n			<ion-col>\n					<button ion-button block (click)="onLogin()">Login</button>\n				</ion-col>\n\n			<p ><strong>Forgot your password?</strong></p>\n		 \n		</div>\n</ion-content>	\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
 * Generated class for the PropertyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PropertyListPage = (function () {
    function PropertyListPage(http, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.send = { key: "fj55518" };
        this.searchKey = "";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/allproperties', this.send, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.resutl = data.data;
            _this.back = data.data;
            localStorage.setItem('maphouse', JSON.stringify(_this.resutl));
            console.log(_this.resutl);
        }, function (err) {
            console.log("error");
        });
    }
    PropertyListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PropertyListPage');
    };
    PropertyListPage.prototype.findByPrice = function (searchKey) {
        this.resutl = this.back;
        var key = searchKey;
        return Promise.resolve(this.resutl.filter(function (property) {
            return (property.price).indexOf(key) > -1;
        }));
    };
    PropertyListPage.prototype.findBylocation = function (searchKey) {
        this.resutl = this.back;
        var key = searchKey.toUpperCase();
        return Promise.resolve(this.resutl.filter(function (property) {
            return (property.location).toUpperCase().indexOf(key) > -1;
        }));
    };
    PropertyListPage.prototype.findBybedrooms = function (searchKey) {
        this.resutl = this.back;
        var key = searchKey.toUpperCase();
        return Promise.resolve(this.resutl.filter(function (property) {
            return (property.num_bedroom).toUpperCase().indexOf(key) > -1;
        }));
    };
    PropertyListPage.prototype.findBytype = function (searchKey) {
        this.resutl = this.back;
        var key = searchKey.toUpperCase();
        return Promise.resolve(this.resutl.filter(function (property) {
            return (property.type).toUpperCase().indexOf(key) > -1;
        }));
    };
    PropertyListPage.prototype.onInput = function (event) {
        var _this = this;
        if (this.selectedchoice == "price") {
            this.findByPrice(this.searchKey)
                .then(function (data) {
                console.log(data);
                _this.resutl = data;
            })
                .catch(function (error) { return alert(JSON.stringify(error)); });
        }
        else if (this.selectedchoice == "Location") {
            this.findBylocation(this.searchKey)
                .then(function (data) {
                console.log(data);
                _this.resutl = data;
            })
                .catch(function (error) { return alert(JSON.stringify(error)); });
        }
        else if (this.selectedchoice == "Bedrooms") {
            this.findBybedrooms(this.searchKey)
                .then(function (data) {
                console.log(data);
                _this.resutl = data;
            })
                .catch(function (error) { return alert(JSON.stringify(error)); });
        }
        else if (this.selectedchoice == "type") {
            this.findBytype(this.searchKey)
                .then(function (data) {
                console.log(data);
                _this.resutl = data;
            })
                .catch(function (error) { return alert(JSON.stringify(error)); });
        }
    };
    PropertyListPage.prototype.housedetail = function (house) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__["a" /* PropertyDetailPage */], { house: house });
    };
    PropertyListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-property-list',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\property-list\property-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n        <button class="button2" ion-button round left >\n            <ion-label>Search by</ion-label>\n            <ion-select [(ngModel)]="selectedchoice">\n                <ion-option value="price">price</ion-option>\n                <ion-option value="Location">Location</ion-option>\n                <ion-option value="Bedrooms">Bedrooms</ion-option>\n                <ion-option value="type">type</ion-option>\n          </ion-select>\n          </button>\n\n          <button class="button1" ion-button color="secondary" outline right >\n            <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"></ion-searchbar>\n            </button>\n\n                      \n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-md-6 col-lg-4 col-xl-3 *ngFor="let resutl of resutl">\n        <ion-card (click)=" housedetail(resutl)"  class="img">\n          <img class="h"src={{resutl.pic_url}}/>\n            <ion-card-header>{{ resutl.title }}</ion-card-header>\n            <div >\n              <p>\n                  <img class= "iconsize"src="assets/img/home1.png"/>\n                  {{ resutl.type }} \n              </p>\n              <p>\n                  <img class= "iconsize"src="assets/img/location.png"/>\n                  {{ resutl.location }}\n              </p>\n              <p>\n                  <img class= "iconsize"src="assets/img/price.png"/>\n                  ${{ resutl.price }}\n              </p>\n              <img class= "iconremake"src="assets/img/beds.png"/>\n              <p class="floatelement">\n                  {{ resutl.num_bedroom }}\n              </p>\n              <img class= "iconremake"src="assets/img/toilet.png"/>\n              <p class="floatelement">\n                  {{ resutl.num_washroom }}\n              </p>\n              <img class= "iconremake"src="assets/img/apartmentbathroom.png"/>\n              <p class="floatelement">\n                  {{ resutl.num_shower }}\n              </p>\n              <img class= "iconremake"src="assets/img/carpark.png"/>\n              <p class="floatelement">\n                  {{ resutl.carpark }}\n              </p>\n          </div>     \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\property-list\property-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PropertyListPage);
    return PropertyListPage;
}());

//# sourceMappingURL=property-list.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pay_pay__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PropertyDetailPage = (function () {
    function PropertyDetailPage(alertCtrl, http, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.send = { key: "fj55518", user_id: '' };
        this.myfav = [];
        this.visible = true;
        this.login = true;
        this.sent = { key: "fj55518", userid: '' };
        this.inte = { key: "fj55518", buyer: '', property: '' };
        this.msg = { key: "fj55518", user: '', property: '', message: '' };
        this.code = { key: "fj55518", user: '', authcode: '' };
        this.estateProperty = this.navParams.get('house');
        console.log(this.estateProperty);
        this.send.user_id = this.estateProperty.agent_id;
        this.inte.property = this.estateProperty.id;
        this.msg.property = this.estateProperty.id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/singleuser', this.send, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.agent = data.data;
            console.log(_this.agent);
        }, function (err) {
            console.log("agent error");
        });
        if (localStorage.getItem('userdata')) {
            this.login = false;
            this.user = JSON.parse(localStorage.getItem('userdata'));
            this.sent.userid = this.user.id;
            this.inte.buyer = this.user.id;
            this.msg.user = this.user.id;
            this.visible = false;
            this.code.user = this.user.id;
            console.log(this.sent.userid);
            this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/userinterestedproperties', this.sent, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.temp = data.data;
                console.log(_this.temp);
                console.log("checking");
                if (_this.temp) {
                    for (var i = 0; i < _this.temp.length; i++) {
                        if (_this.temp[i].property === _this.estateProperty.id) {
                            _this.visible = true;
                        }
                    }
                }
            }, function (err) {
                console.log("user intere error");
            });
        }
        else {
            this.visible = true;
        }
    }
    PropertyDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PropertyDetailPage');
    };
    PropertyDetailPage.prototype.presentcode = function () {
        var _this = this;
        if (localStorage.getItem('userdata')) {
            var alert_1 = this.alertCtrl.create({
                title: 'Enter Code To Rent House',
                inputs: [
                    {
                        name: 'Message',
                        placeholder: 'Message'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: function (data) {
                            _this.code.authcode = data.Message;
                            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                            _this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/verifyauthcode', _this.code, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
                                if (data.code == '1') {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pay_pay__["a" /* PayPage */], { uid: _this.user.id, pid: _this.estateProperty.id, price: _this.estateProperty.price });
                                    console.log(data);
                                }
                            }, function (err) {
                                console.log("agent error");
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
    };
    PropertyDetailPage.prototype.presentPrompt = function () {
        var _this = this;
        if (localStorage.getItem('userdata')) {
            var alert_2 = this.alertCtrl.create({
                title: 'Enter Message',
                inputs: [
                    {
                        name: 'Message',
                        placeholder: 'Message'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Send',
                        handler: function (data) {
                            _this.msg.message = data.Message;
                            console.log(_this.msg);
                            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                            _this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/sendmessagetoagent', _this.msg, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
                                console.log(data);
                            }, function (err) {
                                console.log("agent error");
                            });
                        }
                    }
                ]
            });
            alert_2.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
    };
    PropertyDetailPage.prototype.Addtofav = function () {
        // if(localStorage.getItem('marked'))
        // {
        var _this = this;
        //     this.myfav =JSON.parse(localStorage.getItem('marked'));
        //     this.myfav.push(this.estateProperty);
        //     localStorage.setItem('marked',JSON.stringify(this.myfav));
        //     console.log(JSON.parse(localStorage.getItem('marked')));
        //     this.visible = true;
        // }
        // else{      
        //     this.myfav.push(this.estateProperty);
        //     localStorage.setItem('marked',JSON.stringify(this.myfav));
        //     console.log(this.myfav);
        //     this.visible = true;
        //   }   
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/interested', this.inte, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.add = data;
            console.log(_this.add);
            _this.visible = true;
        }, function (err) {
            console.log("agent error");
        });
    };
    PropertyDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-property-detail',template:/*ion-inline-start:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\property-detail\property-detail.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>\n      {{estateProperty.title}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen elestic-header>\n  <section class="housing-image"\n           [ngStyle]="{ \'background-image\': \'url(\' + estateProperty.pic_url + \')\'}">\n    <section class="housing-banner" padding>\n      <span class="housing-title">{{estateProperty.title}}</span>\n      <span class="price">{{estateProperty.price | currency:\'USD\' }}</span>\n    </section>\n  </section>\n  <section class="main-content">\n    <ion-grid class="main-features">\n      <ion-row>\n        <ion-col text-center *ngFor="let feature of estateProperty.features">\n          <!-- <ion-icon [name]="feature.icon"></ion-icon> -->\n          <span class="item-block">{{feature.title}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid class="listing-details">\n      <ion-row>\n        <p margin-left margin-right no-margin-top style="text-align: justify">\n          {{estateProperty.description}}\n        </p>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-icon name="home"></ion-icon>{{estateProperty.type}}\n        </ion-col>\n        <ion-col>\n          <ion-icon name="pin"></ion-icon>{{estateProperty.location}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <img class= "iconsize"src="assets/img/beds.png"/>{{estateProperty.num_bedroom}}\n        </ion-col>\n        <ion-col>\n            <img class= "iconsize"src="assets/img/toilet.png"/>{{estateProperty.num_washroom}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col>\n            <img class= "iconsize"src="assets/img/apartmentbathroom.png"/>{{estateProperty.num_shower}}\n          </ion-col>\n          <ion-col>\n              <img class= "iconsize"src="assets/img/carpark.png"/>{{estateProperty.carpark}}\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n    <h2 padding>Agent</h2>\n  </section>\n\n  <ion-fab bottom right #fab>\n      <button ion-fab><ion-icon name="arrow-dropup-circle"></ion-icon></button>\n      <ion-fab-list side="top">\n        <button ion-fab color="primary"[hidden]="login" (click)=" presentPrompt()"><ion-icon name="chatbubbles"></ion-icon></button>\n        <button ion-fab color="primary" [hidden]="login" (click)="presentcode()"><ion-icon name="cash"></ion-icon></button>\n        <button ion-fab color="primary" [hidden]="visible" (click)="Addtofav()" ><ion-icon name="add"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n    \n    <ion-list>\n\n        <button ion-item>\n            <ion-avatar item-left>\n                <img src="{{agent?.pic_url}}"/>\n            </ion-avatar>\n            <h2>{{agent?.first_name}} {{agent?.last_name}}</h2>\n            <p>{{agent?.phone}}</p>\n        </button>\n\n    </ion-list>\n</ion-content>\n<ion-footer>\n\n</ion-footer>\n'/*ion-inline-end:"C:\Users\fste-ews\Desktop\fijihomes\src\pages\property-detail\property-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PropertyDetailPage);
    return PropertyDetailPage;
}());

//# sourceMappingURL=property-detail.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.js.map