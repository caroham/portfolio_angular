webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var slide_panel_component_1 = __webpack_require__("./src/app/slide-panel/slide-panel.component.ts");
var routes = [
    { path: '', pathMatch: 'full', component: slide_panel_component_1.SlidePanelComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n    <router-outlet class=\"site-content\"></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var slide_panel_component_1 = __webpack_require__("./src/app/slide-panel/slide-panel.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var header_component_1 = __webpack_require__("./src/app/header/header.component.ts");
var footer_component_1 = __webpack_require__("./src/app/footer/footer.component.ts");
var flex_layout_1 = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                slide_panel_component_1.SlidePanelComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                flex_layout_1.FlexLayoutModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n  <p class=\"footer-email\">carolyn.hampe@gmail.com</p>\n  <p class=\"footer-desc\">site built &amp; designed 2018</p>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = "#footer {\n  height: 80px;\n  background-color: #FCFBF9;\n  margin: auto auto 0 auto;\n  padding-left: 30px;\n  padding-top: 30px; }\n\n.footer-email, .footer-desc {\n  padding-bottom: 8px; }\n\n.footer-email {\n  font-size: 14px; }\n\n.footer-desc {\n  font-size: 12px;\n  font-family: 'PT Serif', serif; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"nav\" [@navExpandTrigger]=\"navState\">\n  <h1 id=\"name-title\">Carolyn Hampe</h1>\n  <a id=\"btn-about\" (click)=\"toggleNavState()\">\n    <div id=\"info\">\n      <h3 class=\"letter-icon\">i</h3>\n    </div>\n    <img id=\"diamond\" src=\"./assets/app_icon_diamond-06.svg\">\n  </a>\n  <div id=\"about\" *ngIf=\"navExpanded\" [@aboutVisibleTrigger]=\"'in'\">\n    <div id=\"about-container\">\n      <h1 class=\"about-lg about-main-desc\">Software Developer with a background in Graphic Design. Interested in art, language, nature, and the ethics around technology.</h1>\n      <h3 class=\"about-title-timeline\" *ngIf=\"!mobile\">Timeline</h3>\n      <div class=\"timeline\"  *ngIf=\"!mobile\">\n        <h3 class=\"about-sub-title\">2014</h3>\n        <p class=\"about-desc\">BFA in Graphic Design from <a href=\"https://www.mica.edu/\" target=\"_blank\">MICA</a></p>\n        <h3 class=\"about-sub-title\">2014&ndash;2017</h3>\n        <p class=\"about-desc\">Worked as Graphic Designer in NYC</p>\n        <h3 class=\"about-sub-title\">2018</h3>\n        <p class=\"about-desc\">Learning to code at <a href=\"https://www.codingdojo.com/\" target=\"_blank\">Coding Dojo</a> in San Jose, CA</p>\n      </div>\n      <h3 class=\"about-title about-title-skills\">Skills</h3>\n      <div class=\"about-tech\">\n        <h3 class=\"about-sub-title\">Languages</h3>\n        <ul class=\"about-desc\">\n          <li>JavaScript</li>\n          <li>Swift4</li>\n          <li>Python2</li>\n          <li>HTML5/CSS3</li>\n        </ul>\n        <h3 class=\"about-sub-title\">Frameworks &amp; libraries</h3>\n        <ul class=\"about-desc\">\n          <li>Angular</li>\n          <li>Socket.io</li>\n          <li>Node.js &amp; Express</li>\n          <li>Django</li>\n        </ul>\n      </div>\n      <div class=\"about-tech-2\">\n        <h3 class=\"about-sub-title\">Databases</h3>\n        <ul class=\"about-desc\">\n          <li>MongoDB</li>\n          <li>MySQL</li>\n        </ul>\n        <h3 class=\"about-sub-title\">Design Softwares</h3>\n        <ul class=\"about-desc\">\n          <li>Sketch</li>\n          <li>Illustrator</li>\n          <li>InDesign</li>\n          <li>Photoshop</li>\n        </ul>\n      </div>\n      <a href=\"mailto:carolyn.hampe@gmail.com\" class=\"about-lg link-lg link-contact\" target=\"_blank\"><h1>Contact</h1></a>\n      <a href=\"https://github.com/caroham\" class=\"about-lg link-lg link-github\" target=\"_blank\"><h1>Github</h1></a>\n      <a id=\"close-btn\" *ngIf=\"this.mobile\" (click)=\"toggleNavState()\">close</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "#nav {\n  background-color: #fffcf8;\n  width: 100%;\n  -webkit-box-shadow: 0px 4px 6px rgba(221, 200, 175, 0.35);\n          box-shadow: 0px 4px 6px rgba(221, 200, 175, 0.35); }\n\n#name-title {\n  padding-left: 30px;\n  color: #000;\n  font-size: 1.5rem;\n  padding-top: 24px; }\n\n#name-title, #btn-about {\n  cursor: pointer;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  display: inline-block; }\n\n#btn-about {\n  margin-right: 16px;\n  float: right; }\n\n#info {\n  z-index: 2;\n  text-align: center;\n  padding-top: 20px;\n  vertical-align: middle;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n#diamond {\n  width: 40px;\n  height: 40px;\n  z-index: 1;\n  margin-top: -40px;\n  position: absolute; }\n\n.letter-icon {\n  padding-top: 7px;\n  font-size: 20px;\n  font-weight: 100; }\n\n.about-title {\n  font-size: 14px;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 700; }\n\n.about-sub-title {\n  padding-bottom: 10px;\n  font-size: 12px; }\n\n.about-desc {\n  padding-bottom: 20px;\n  font-size: 0.8rem;\n  line-height: 1rem; }\n\nli {\n  padding: 2px 0; }\n\n#about-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto auto auto auto auto auto;\n      grid-template-rows: auto auto auto auto auto auto;\n  grid-row-gap: 20px; }\n\n.about-main-desc {\n  -ms-grid-row: 2;\n  grid-row: 2; }\n\n.link-contact {\n  -ms-grid-column: 1;\n  grid-column: 1; }\n\n.link-github {\n  -ms-grid-column: 3;\n  grid-column: 3; }\n\n.about-title-timeline {\n  -ms-grid-column: 1;\n  grid-column: 1; }\n\n.about-title-skills, .about-title-timeline {\n  -ms-grid-row: 3;\n  grid-row: 3; }\n\n.about-tech, .about-tech-2, .timeline {\n  -ms-grid-row: 4;\n  grid-row: 4; }\n\n.link-lg {\n  -ms-grid-row: 5;\n  grid-row: 5; }\n\n#close-btn {\n  -ms-grid-row: 6;\n  grid-row: 6; }\n\n@media only screen and (max-width: 480px) {\n  #nav {\n    height: 60px; }\n  #about {\n    margin: 0 30px 0 30px; }\n  #about-container {\n    -ms-grid-columns: 1fr 20px 1fr;\n        grid-template-columns: 1fr 20px 1fr; }\n  .about-main-desc {\n    padding-top: 30px;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 3;\n    grid-column: 1 / 4; }\n  #close-btn {\n    display: block;\n    cursor: pointer;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 700;\n    font-size: 1rem;\n    padding-top: 12px;\n    color: #1a60f8; }\n  .about-tech, .about-title-skills {\n    -ms-grid-column: 1;\n    grid-column: 1; }\n  .about-tech-2 {\n    -ms-grid-column: 3;\n    grid-column: 3; } }\n\n@media only screen and (min-width: 481px) {\n  #close-btn {\n    display: hidden; }\n  #nav {\n    height: 80px; }\n  #about {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-rows: 60px 30px auto;\n        grid-template-rows: 60px 30px auto;\n    -ms-grid-columns: 30px 1fr 60px;\n        grid-template-columns: 30px 1fr 60px; }\n  #about-container {\n    grid-area: 2 / 2 / -1 / -1;\n    -ms-grid-columns: 120px 90px 120px 20px 120px auto 180px;\n        grid-template-columns: 120px 90px 120px 20px 120px auto 180px; }\n  .about-main-desc {\n    grid-column: 1 / -3;\n    padding-bottom: 20px; }\n  .about-sub-desc {\n    grid-area: 2 / 1 / -1 / -2; }\n  .link-contact {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 1;\n    grid-column: 1 / 2;\n    -ms-grid-row: 5;\n    grid-row: 5; }\n  .timeline {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 1;\n    grid-column: 1 / 2; }\n  .about-tech, .about-title-skills {\n    -ms-grid-column: 3;\n    grid-column: 3; }\n  .about-tech-2 {\n    -ms-grid-column: 5;\n    grid-column: 5; } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// import { ActivatedRoute, Params, Router } from '@angular/router';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_httpService) {
        this._httpService = _httpService;
        this.navState = "navCollapsed";
        this.navExpanded = false;
        this.mobile = false;
    }
    HeaderComponent.prototype.onResize = function (event) {
        if (window.innerWidth < 480) {
            this.mobile = true;
            this._httpService.mobile = true;
        }
        if (window.innerWidth > 480) {
            this.mobile = false;
            this._httpService.mobile = false;
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleNavState = function () {
        if (this._httpService.mobile) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
        this.navState = this.navExpanded ? 'navCollapsed' : 'navExpanded';
        this.navExpanded = !this.navExpanded;
    };
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onResize", null);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")],
            animations: [
                core_1.trigger('navExpandTrigger', [
                    core_1.state('navExpanded', core_1.style({ height: '700px' })),
                    core_1.state('navCollapsed', core_1.style({ height: '80px' })),
                    core_1.transition('navCollapsed => navExpanded', core_1.animate('600ms 200ms ease-in')),
                    core_1.transition('navExpanded => navCollapsed', core_1.animate('600ms 200ms ease-out')),
                ]),
                core_1.trigger('aboutVisibleTrigger', [
                    // state('navExpanded', style({opacity: '1'})),
                    // state('navCollapsed', style({opacity: '0'})),
                    // transition('navCollapsed => navExpanded', animate('1000ms 1000ms ease-in')),
                    // transition('navExpanded => navCollapsed', animate('1000ms 1000ms ease-out'))
                    // state('visible', style({ opacity: '1'})),
                    // transition('void => *', [style({ opacity: '0'}), animate('200ms')]),
                    // transition('* => void', [animate('200ms', style({ opacity: '0' }))]),
                    core_1.state('in', core_1.style({ opacity: '1' })),
                    core_1.transition('void => *', [
                        core_1.animate('300ms 800ms', core_1.style({ opacity: '1' }))
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('300ms', core_1.style({ opacity: '0' }))
                    ])
                ]),
            ]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.mobile = false;
    }
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/slide-panel/slide-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container-panels\">\n  <div id=\"panel-dev\" [@panelExpandTrigger]=\"expandedState\">\n    <div class=\"tab-dev tab\" (click)=\"toggleExpandedState()\">\n      <h2>Code</h2>\n    </div>\n    <div class=\"container-dev\" *ngIf=\"expanded\" [@visibleTrigger]=\"'visible'\">\n      <div class=\"proj-container-home\">\n        <!-- <img class=\"img-home-single\" src=\"./assets/cc_3_crop.gif\" alt=\"Communal Canvas gif\"> -->\n        <img  *ngIf=\"mobile\" class=\"img-home-single home-vid\" src=\"./assets/cc_still.png\" alt=\"still of project video\"/>  \n        <video *ngIf=\"!mobile\" loop muted class=\"img-home-single home-vid\" onClick=\"this.paused ? this.play() : this.pause();\">\n          <source type=\"video/mp4\" src=\"./assets/cc_3_crop.mp4\">\n          Your browser does not support the video tag.\n        </video>        \n        <div class=\"proj-desc\">\n          <div class=\"left-desc\">\n            <h3 class=\"proj-title-home\">Communal Canvas</h3>\n            <div class=\"proj-subtitles\">\n              <a class=\"proj-link\" href=\"https://github.com/caroham/communal_canvas\" target=\"_blank\"><p>github</p></a>\n              <p class=\"proj-date\">2018 (in progress)</p>\n            </div>\n            <p class=\"proj-desc-home\">A website where users can draw with their cursors. Drawings are passed down so that on first load the user sees a portion of what was last drawn. Use of Socket.io allows users to draw together in realtime if there are multiple users on the site at once.</p>\n          </div>\n          <div class=\"right-desc\">\n            <h3 class=\"proj-tech-title\">Technologies</h3>\n            <ul class=\"proj-tech\">\n              <li>AngularJS</li>\n              <li>Socket.io</li>\n              <li>Node.js</li>\n              <li>Express</li>\n              <li>MongoDB</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"proj-container-home\">\n        <img  *ngIf=\"mobile\" class=\"img-home-single home-vid\" src=\"./assets/map_still.png\" alt=\"still of project video\"/>  \n        <video *ngIf=\"!mobile\" loop muted class=\"img-home-single home-vid\" onClick=\"this.paused ? this.play() : this.pause();\">\n          <source type=\"video/mp4\" src=\"./assets/map_mockup_crop.mp4\">\n          Your browser does not support the video tag.\n        </video>  \n        <div class=\"proj-desc\">\n          <div class=\"left-desc\">\n            <h3 class=\"proj-title-home\">Mapped News</h3>\n            <div class=\"proj-subtitles\">\n              <a class=\"proj-link\" href=\"https://github.com/caroham/news_map\" target=\"_blank\"><p>github</p></a>\n              <p class=\"proj-date\">2018 (in progress)</p>\n            </div>\n            <p class=\"proj-desc-home\">An iOS app that plots the top 10 World News Stories on a map, using API's from The New York Times and Google, allowing for a different way to interact with and process the news</p>\n          </div>\n          <div class=\"right-desc\">\n            <h3 class=\"proj-tech-title\">Technologies</h3>\n            <ul class=\"proj-tech\">\n              <li>Swift</li>\n              <li>New York Times API</li>\n              <li>Google Maps API</li>\n              <li>Google Geocode API</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"proj-container-home\">\n        <img  *ngIf=\"mobile\" class=\"img-home-single home-vid\" src=\"./assets/wwc_still.png\" alt=\"still of project video\"/>  \n        <video *ngIf=\"!mobile\" loop muted class=\"img-home-single home-vid\" onClick=\"this.paused ? this.play() : this.pause();\">\n          <source type=\"video/mp4\" src=\"./assets/wwc_1.mp4\">\n          Your browser does not support the video tag.\n        </video>\n        <div class=\"proj-desc\">\n          <div class=\"left-desc\">\n            <h3 class=\"proj-title-home\">Write Write Cross</h3>\n            <div class=\"proj-subtitles\">\n              <a class=\"proj-link\" href=\"https://github.com/caroham/write_write_cross_game\" target=\"_blank\"><p>github</p></a>\n              <p class=\"proj-date\">2018 (in progress)</p>\n            </div>\n            <p class=\"proj-desc-home\">A collaborative writing game where everyone loses (just kidding). Users take turns writing and crossing out words. For every two words written, one must be crossed out. A frustrating but interesting writing experience.</p>\n          </div>\n          <div class=\"right-desc\">\n            <h3 class=\"proj-tech-title\">Technologies</h3>\n            <ul class=\"proj-tech\">\n              <li>Python</li>\n              <li>Django</li>\n              <li>MySQL</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"panel-design\">\n    <div class=\"tab-design tab\" (click)=\"toggleExpandedState()\">\n        <h2>Design</h2>\n    </div>\n    <div class=\"container-design\">\n      <div class=\"proj-container-home\">\n        <img class=\"img-home-mult mobile-tall\" *ngIf=\"!signal_main\" src=\"./assets/signal_1_still.png\" alt=\"Explorer gif 2\" (click)=\"signal_main = !signal_main\">\n        <img class=\"img-home-mult mobile-tall\" *ngIf=\"signal_main\" src=\"./assets/signal_1_crop.gif\" alt=\"Explorer gif 2\" (click)=\"signal_main = !signal_main\">\n        <img class=\"img-home-mult mobile-tall\" *ngIf=\"!signal_load\" src=\"./assets/signal_loading_still.png\" alt=\"Explorer gif 2\" (click)=\"signal_load = !signal_load\">\n        <img class=\"img-home-mult mobile-tall\" *ngIf=\"signal_load\" src=\"./assets/signal_loading_crop.gif\" alt=\"Explorer gif 2\" (click)=\"signal_load = !signal_load\">\n        <div class=\"proj-desc\">\n          <div class=\"left-desc\">\n            <h3 class=\"proj-title-home\">Dolphin/Signal App Startup</h3>\n            <div class=\"proj-subtitles\">\n                <p class=\"proj-link\">2017</p>\n            </div>\n            <p class=\"proj-desc-home\">A mobile app that reminds users to reach out to contacts who they haven't talked to in a while. The reminders are based on how frequently a user normally talks with their contacts, and notifies users when they fall out of their normal communication cycle. A beta version of the app was formerly on the Google Play store but since has been taken off.</p>\n          </div>\n          <div class=\"right-desc\">\n            <ul class=\"proj-tech\">\n              <li>\n                <h3 class=\"proj-credit-title\">Company</h3>\n                <p class=\"proj-credits\">ABC Design Lab (internal start-up)</p>\n              </li>\n              <li>\n                <h3 class=\"proj-credit-title\">Creative Director</h3>\n                <p class=\"proj-credits\">Adam Chaloiecheep</p>\n              </li>\n              <li>\n                <h3 class=\"proj-credit-title\">Logo Designer</h3>\n                <p class=\"proj-credits\">Andrew Boudreaux</p>\n              </li>\n              <li>\n                <h3 class=\"proj-credit-title\">Production Designer</h3>\n                <p class=\"proj-credits\">Liz Liu</p>\n              </li>\n              <li>\n                <h3 class=\"proj-credit-title\">My Role</h3>\n                <p class=\"proj-credits\">UX/Graphic Designer</p>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"proj-container-home\">\n          <img class=\"img-home-mult mobile-tall\" *ngIf=\"!amnh_zoom\" src=\"./assets/amnh_mapzoom_still.png\" alt=\"Explorer gif 2\" (click)=\"amnh_zoom = !amnh_zoom\">\n        <img class=\"img-home-mult mobile-tall\" *ngIf=\"amnh_zoom\" src=\"./assets/amnh_mapzoom_crop.gif\" alt=\"Explorer gif 2\" (click)=\"amnh_zoom = !amnh_zoom\">\n        <img class=\"img-home-mult mobile-tall\" *ngIf=\"!mobile && !amnh_scroll\" src=\"./assets/amnh_scroll_still.png\" alt=\"Explorer gif 2\" (click)=\"amnh_scroll = !amnh_scroll\">\n        <img class=\"img-home-mult mobile-tall\" *ngIf=\"!mobile && amnh_scroll\" src=\"./assets/amnh_scroll_short.gif\" alt=\"Explorer gif 2\" (click)=\"amnh_scroll = !amnh_scroll\">\n        <div class=\"proj-desc\">\n          <div class=\"left-desc\">\n            <h3 class=\"proj-title-home\">AMNH Explorer App</h3>\n            <div class=\"proj-subtitles\">\n                <a class=\"proj-link\" href=\"https://www.amnh.org/apps/explorer\" target=\"_blank\"><p>website</p></a>\n                <p class=\"proj-date\">2015</p>\n            </div>\n            <p class=\"proj-desc-home\">A mobile app for the American Museum of Natural History. Users select their interests then get a curated list of exhibits to visit. When users neared an exhibit on their list, they would get a push notification. There was also an educational AR game in the app in which users would get hints to visit certain dioramas to collect badges.</p>\n          </div>\n          <div class=\"right-desc\">\n            <ul class=\"proj-tech\">\n              <li>\n                <h3 class=\"proj-credit-title\">Client</h3>\n                <p class=\"proj-credits\">American Museum of Natural History</p>\n              </li>\n              <li>\n                <h3 class=\"proj-credit-title\">Company</h3>\n                <p class=\"proj-credits\">Local Projects</p>\n              </li>\n              <li>\n                <h3 class=\"proj-credit-title\">Creative Director</h3>\n                <p class=\"proj-credits\">John Ryan</p>\n              </li>\n              <li>\n                <h3 class=\"proj-credit-title\">Art Directors</h3>\n                <p class=\"proj-credits\">Erika Tarte, Kim Gim</p>\n              </li>\n              <li>\n                <h3 class=\"proj-credit-title\">UX Designers</h3>\n                <p class=\"proj-credits\">Mateo Salazar, Edward Blake</p>\n              </li>\n              <li>\n                <h3 class=\"proj-credit-title\">Other Graphic Designers</h3>\n                <p class=\"proj-credits\">Laura Huaranga, Yooin Cho</p>\n              </li>\n              <li>\n                <h3 class=\"proj-credit-title\">My Role</h3>\n                <p class=\"proj-credits\">Graphic Designer</p>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"proj-container-home\">\n        <img class=\"img-home-mult mobile-tall img-pad\" src=\"./assets/thesis_zoomed-out_color.jpg\" alt=\"thesis 1\">\n        <img class=\"img-home-mult mobile-tall\" *ngIf=\"!mobile\" src=\"./assets/thesis_detail_640_crop.jpg\" alt=\"thesis 2\">\n        <div class=\"proj-desc\">\n          <div class=\"left-desc\">\n            <h3 class=\"proj-title-home\">The Language of Language</h3>\n            <div class=\"proj-subtitles\">\n                <p class=\"proj-link\">2014</p>\n            </div>\n            <p class=\"proj-desc-home\">An installation for my Senior Thesis project exploring linguistic relativity, or the relationship between a person's native language and how that shapes the way that they percieve the world.</p>\n          </div>\n          <div class=\"right-desc\">\n            <ul class=\"proj-tech\">\n              <!-- <li>\n                <h3 class=\"proj-credit-title\">Title</h3>\n                <p class=\"proj-credits\">Desc</p>\n              </li> -->\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/slide-panel/slide-panel.component.scss":
/***/ (function(module, exports) {

module.exports = "#panel-dev {\n  background-color: white; }\n\n#panel-design {\n  background-color: #f5f3f3; }\n\n.mobile-tall {\n  max-height: 500px;\n  width: auto; }\n\n.img-home-mult {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  margin-bottom: 24px;\n  cursor: url(/assets/play_icon.png), auto; }\n\n.img-home-single {\n  width: 100%;\n  height: auto;\n  margin-bottom: 24px;\n  cursor: url(/assets/play_icon.png), auto; }\n\n.proj-title-home {\n  font-size: 1.25rem;\n  padding-bottom: 10px; }\n\n.proj-desc-home {\n  line-height: 1.5rem; }\n\n.proj-tech-title {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n  padding-bottom: 12px; }\n\n.proj-link, .proj-date {\n  display: inline-block;\n  vertical-align: baseline;\n  font-size: 14px;\n  padding-bottom: 20px; }\n\n.proj-date {\n  padding-left: 20px; }\n\n.proj-desc {\n  padding-bottom: 48px; }\n\n.proj-credit-title {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n  padding-bottom: 8px; }\n\n.proj-credits {\n  font-size: 0.8rem;\n  padding-bottom: 4px; }\n\n@media only screen and (max-width: 480px) {\n  #panel-dev, #panel-design {\n    padding: 0 30px 0 30px; }\n  .tab {\n    padding: 30px 0 30px 0; }\n  .proj-desc-home {\n    padding-bottom: 20px; } }\n\n@media only screen and (min-width: 481px) {\n  #container-panels {\n    width: 100%;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-rows: 30px auto;\n        grid-template-rows: 30px auto;\n    -ms-grid-columns: 60px 1fr 60px;\n        grid-template-columns: 60px 1fr 60px; }\n  #panel-dev {\n    grid-area: 1 / 1 / -1 / -2;\n    z-index: 2;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-rows: 30px auto;\n        grid-template-rows: 30px auto;\n    -ms-grid-columns: 30px 1fr 90px 60px;\n        grid-template-columns: 30px 1fr 90px 60px;\n    -webkit-box-shadow: 4px 0px 4px rgba(221, 200, 175, 0.35);\n            box-shadow: 4px 0px 4px rgba(221, 200, 175, 0.35); }\n  #panel-design {\n    grid-area: 1 / 1 / -1 / -1;\n    z-index: 1;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-rows: 30px auto;\n        grid-template-rows: 30px auto;\n    -ms-grid-columns: 60px 30px 1fr 90px 60px;\n        grid-template-columns: 60px 30px 1fr 90px 60px; }\n  .tab-dev, .tab-design {\n    cursor: pointer;\n    padding-top: 24px;\n    padding-left: 18px;\n    text-align: left;\n    text-orientation: sideways-right;\n    writing-mode: vertical-rl;\n    -webkit-writing-mode: vertical-lr;\n    -ms-writing-mode: vertical-lr;\n    overflow: hidden;\n    max-height: 200px; }\n  .tab-dev h2, .tab-design h2 {\n    max-height: 200px; }\n  .tab-dev {\n    -ms-grid-row: 1;\n        grid-row-start: 1;\n    grid-row-end: -1;\n    -ms-grid-column: -2;\n        grid-column-start: -2; }\n  .tab-design {\n    -ms-grid-row: 1;\n        grid-row-start: 1;\n    grid-row-end: -1;\n    -ms-grid-column: -2;\n        grid-column-start: -2; }\n  .container-dev {\n    -ms-grid-row: 2;\n        grid-row-start: 2;\n    grid-row-end: -1;\n    -ms-grid-column: 2;\n        grid-column-start: 2;\n    grid-column-end: -3; }\n  .container-design {\n    -ms-grid-row: 2;\n        grid-row-start: 2;\n    grid-row-end: -1;\n    -ms-grid-column: 3;\n        grid-column-start: 3;\n    grid-column-end: -3; }\n  .proj-desc-home {\n    padding-bottom: 24px; }\n  .img-pad {\n    margin-right: 6px; } }\n\n@media only screen and (min-width: 780px) {\n  .proj-container-home {\n    margin-bottom: 20px; }\n  .proj-desc {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 3fr 20px 1fr;\n        grid-template-columns: 3fr 20px 1fr; }\n  .left-desc {\n    -ms-grid-column: 1;\n        grid-column-start: 1; }\n  .right-desc {\n    -ms-grid-column: 3;\n        grid-column-start: 3; }\n  .proj-desc-home {\n    padding-bottom: 48px; }\n  .mobile-wide {\n    max-width: 800px; } }\n\n@media only screen and (min-width: 1024px) {\n  .proj-desc {\n    -ms-grid-columns: 3fr 32px 1fr 10%;\n        grid-template-columns: 3fr 32px 1fr 10%; } }\n"

/***/ }),

/***/ "./src/app/slide-panel/slide-panel.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var SlidePanelComponent = /** @class */ (function () {
    function SlidePanelComponent(_httpService) {
        this._httpService = _httpService;
        this.expanded = true;
        this.expandedState = "expanded";
        this.mobile = false;
        this.signal_main = false;
        this.signal_load = false;
        this.amnh_scroll = false;
        this.amnh_zoom = false;
    }
    SlidePanelComponent.prototype.onResize = function (event) {
        if (window.innerWidth < 480) {
            this.mobile = true;
            this._httpService.mobile = true;
            this.expandedState = 'expanded';
            this.expanded = true;
        }
        if (window.innerWidth > 480) {
            this.mobile = false;
            this._httpService.mobile = false;
        }
    };
    SlidePanelComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 480) {
            this.mobile = true;
            this._httpService.mobile = true;
        }
    };
    SlidePanelComponent.prototype.toggleExpandedState = function () {
        if (!this.mobile) {
            this.expandedState = this.expanded ? 'collapsed' : 'expanded';
            this.expanded = !this.expanded;
        }
    };
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SlidePanelComponent.prototype, "onResize", null);
    SlidePanelComponent = __decorate([
        core_1.Component({
            selector: 'app-slide-panel',
            template: __webpack_require__("./src/app/slide-panel/slide-panel.component.html"),
            styles: [__webpack_require__("./src/app/slide-panel/slide-panel.component.scss")],
            animations: [
                // trigger('panelExpandTrigger', [
                //   state('expanded', style({width: '100%'})),
                //   state('collapsed', style({width: '60px'})),
                //   transition('collapsed => expanded', animate('400ms ease-in')),
                //   transition('expanded => collapsed', animate('400ms 200ms ease-out')),
                // ]),
                core_1.trigger('panelExpandTrigger', [
                    core_1.state('expanded', core_1.style({ transform: 'translateX(0)' })),
                    core_1.state('collapsed', core_1.style({ transform: 'translateX(-95%)' })),
                    core_1.transition('collapsed => expanded', core_1.animate('400ms 200ms ease-in')),
                    core_1.transition('expanded => collapsed', core_1.animate('400ms 200ms ease-out')),
                ]),
                core_1.trigger('visibleTrigger', [
                    core_1.state('expanded', core_1.style({ transform: 'translateX(0)' })),
                    core_1.state('collapsed', core_1.style({ transform: 'translateX(-95%)' })),
                    core_1.transition('collapsed => expanded', core_1.animate('400ms 200ms ease-in')),
                    core_1.transition('expanded => collapsed', core_1.animate('400ms 200ms ease-out')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], SlidePanelComponent);
    return SlidePanelComponent;
}());
exports.SlidePanelComponent = SlidePanelComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map