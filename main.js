"use strict";
(self["webpackChunkto_do_list_app"] = self["webpackChunkto_do_list_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routingComponents": () => (/* binding */ routingComponents)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _components_tasks_task_card_task_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tasks/task-card/task-card.component */ 9739);
/* harmony import */ var _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/users/profile/profile.component */ 128);
/* harmony import */ var _components_users_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/users/log-in/log-in.component */ 9763);
/* harmony import */ var _components_tasks_task_dashboard_task_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tasks/task-dashboard/task-dashboard.component */ 1946);
/* harmony import */ var _components_users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users/sign-in/sign-in.component */ 1254);
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/side-nav/side-nav.component */ 5273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);









let routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _components_users_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__.LogInComponent
}, {
  path: 'sign-in',
  component: _components_users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__.SignInComponent
}, {
  path: 'nav',
  component: _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__.SideNavComponent
}, {
  path: 'tasks/:username',
  component: _components_tasks_task_dashboard_task_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.TaskDashboardComponent
}, {
  path: 'profile',
  component: _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();
const routingComponents = [_components_tasks_task_card_task_card_component__WEBPACK_IMPORTED_MODULE_0__.TaskCardComponent, _components_users_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__.LogInComponent, _components_tasks_task_dashboard_task_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.TaskDashboardComponent];

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _services_users_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/users/authentication.service */ 3317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 6322);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 6069);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 445);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 9314);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ 1884);
/* harmony import */ var _components_users_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/users/log-in/log-in.component */ 9763);
/* harmony import */ var _components_users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/users/sign-in/sign-in.component */ 1254);
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/side-nav/side-nav.component */ 5273);

















function AppComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 10)(1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.cashedUsername);
  }
}
function AppComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 11)(1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_ng_template_15_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Log off");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AppComponent_sign_in_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "sign-in", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("loggedIn", function AppComponent_sign_in_17_Template_sign_in_loggedIn_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.authorized($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AppComponent_log_in_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "log-in", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("loggedIn", function AppComponent_log_in_18_Template_log_in_loggedIn_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.authorized($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AppComponent_side_nav_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "side-nav");
  }
}
class AppComponent {
  constructor(_router, _authenticationService) {
    //this.pages = this._router.getCurrentNavigation().id;
    //localStorage.setItem("cashedUsername", '');
    this._router = _router;
    this._authenticationService = _authenticationService;
    this.cashedUsername = '';
    this.cashedEmail = '';
    this.cashedAvatar = '';
    this.routingComponents = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.routingComponents;
    this._router.events.subscribe(e => {
      this.cashedUsername = localStorage.getItem("cashedUsername");
      this.cashedEmail = localStorage.getItem("cashedEmail");
      this.cashedAvatar = localStorage.getItem("cashedAvatar");
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
        this.navigationIndex = e.url;
        console.log(e.url);
        console.log(this.cashedUsername);
        //initial redirect
        if ((this.cashedUsername == '' || !this.cashedUsername) && e.url != '/sign-in') {
          this.navigationIndex = '/home';
        }
        //if user is logged in (cashed) don't let him see login page
        else if (this.cashedUsername != '' && this.cashedUsername && e.url != '/tasks/' + this.cashedUsername && e.url != '/profile') {
          // window.addEventListener("beforeunload", function (e) {
          //   e.returnValue = "\o/";     // Gecko, Trident, Chrome 34+
          // });
          //this.navigationIndex = '/tasks/'+this.cashedUser;
          this._router.navigateByUrl(`/tasks/${this.cashedUsername}`);
        }
      }
    });
  }
  logout() {
    localStorage.setItem("cashedUsername", "");
    this._router.navigateByUrl(`/home`);
  }
  authorized(user) {
    //cash user to save login
    localStorage.setItem("cashedUsername", user.userName);
    localStorage.setItem("cashedEmail", user.email);
    localStorage.setItem("cashedPassword", user.password);
    this._router.navigateByUrl(`/tasks/${user.userName}`);
  }
  ngOnInit() {}
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_users_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 20,
  vars: 8,
  consts: [[1, "top"], [1, "top-title"], ["disableRipple", "true", "class", "top-menu", "mat-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["xPosition", "after", 1, "menu-list"], ["menu", "matMenu"], ["src", "/assets/avatar.png", "mat-card-avatar", "", "alt", "", 1, "example-header-image"], ["matMenuContent", ""], [3, "ngSwitch"], [3, "loggedIn", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["disableRipple", "true", "mat-button", "", 1, "top-menu", 3, "matMenuTriggerFor"], ["routerLink", "/profile", "mat-menu-item", "", 1, "top-btn"], [1, "top-icon"], ["mat-menu-item", "", 1, "top-btn", 3, "click"], [3, "loggedIn"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "mat-panel-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " TO-DO-LIST APPLICATION");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_button_3_Template, 5, 2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-menu", 3, 4)(6, "mat-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "uppercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-card-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AppComponent_ng_template_15_Template, 8, 0, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-nav-list", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AppComponent_sign_in_17_Template, 1, 0, "sign-in", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AppComponent_log_in_18_Template, 1, 0, "log-in", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AppComponent_side_nav_19_Template, 1, 0, "side-nav", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx._router.url == "/tasks/" + ctx.cashedUsername);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 6, ctx.cashedUsername));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.cashedEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx.navigationIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "/sign-in");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "/home");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchDefault, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardFooter, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatNavList, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionPanelTitle, _components_users_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__.LogInComponent, _components_users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__.SignInComponent, _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__.SideNavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.UpperCasePipe],
  styles: [".top[_ngcontent-%COMP%]  {\r\n\r\n  background: #76becf;\r\n  padding: 2px 30px;\r\n  border: 1px solid grey;\r\n  border-radius: 4px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.top-title[_ngcontent-%COMP%], .top-menu[_ngcontent-%COMP%]{\r\n\r\n  font-size: 2em;\r\n  text-shadow: grey 2px 2px;\r\n  color: white!important;\r\n}\r\n\r\n.top-menu[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  padding: 50px;\r\n  padding-right: 20px!important;\r\n  padding-left: 20px!important;\r\n  padding-bottom: 10px!important;\r\n}\r\n\r\n.top-icon[_ngcontent-%COMP%]{\r\n  color: #76becf;\r\n}\r\n\r\n.top-btn[_ngcontent-%COMP%]{\r\n  border-radius: 0;\r\n  background-color: #eee;\r\n}\r\n\r\n.top-menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 70px;\r\n  width: 70px;\r\n  padding-bottom: 30px; \r\n  filter: grayscale(100%);\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  max-height: 55px;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\n  filter: hue-rotate(-10deg);\r\n}\r\n\r\n.top[_ngcontent-%COMP%]    > #cdk-overlay-0[_ngcontent-%COMP%]{\r\n  width:400px!important;\r\n}\r\n\r\n\r\n@media(max-width: 700px) {\r\n    .top[_ngcontent-%COMP%]{\r\n        justify-content: center;\r\n        font-size: 6vw;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztFQUVFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0IsRUFDYSxxQkFBcUI7RUFDdEQsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOzs7QUFHQTtJQUNJO1FBQ0ksdUJBQXVCO1FBQ3ZCLGNBQWM7SUFDbEI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udG9wICB7XHJcblxyXG4gIGJhY2tncm91bmQ6ICM3NmJlY2Y7XHJcbiAgcGFkZGluZzogMnB4IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50b3AtdGl0bGUsIC50b3AtbWVudXtcclxuXHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgdGV4dC1zaGFkb3c6IGdyZXkgMnB4IDJweDtcclxuICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9wLW1lbnV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4IWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHghaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvcC1pY29ue1xyXG4gIGNvbG9yOiAjNzZiZWNmO1xyXG59XHJcblxyXG4udG9wLWJ0bntcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbi50b3AtbWVudSBpbWcge1xyXG4gIGhlaWdodDogNzBweDtcclxuICB3aWR0aDogNzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyAvKiBTYWZhcmkgNi4wIC0gOS4wICovXHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBtYXgtaGVpZ2h0OiA1NXB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGZpbHRlcjogaHVlLXJvdGF0ZSgtMTBkZWcpO1xyXG59XHJcblxyXG4udG9wID4gI2Nkay1vdmVybGF5LTB7XHJcbiAgd2lkdGg6NDAwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC50b3B7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiA2dnc7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _components_tasks_task_card_task_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tasks/task-card/task-card.component */ 9739);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _services_tasks_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/tasks/task.service */ 9145);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _components_users_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users/log-in/log-in.component */ 9763);
/* harmony import */ var _components_users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users/sign-in/sign-in.component */ 1254);
/* harmony import */ var _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/users/profile/profile.component */ 128);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ 6322);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ 9101);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/side-nav/side-nav.component */ 5273);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ 6069);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _components_tasks_task_dashboard_task_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tasks/task-dashboard/task-dashboard.component */ 1946);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 808);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ 8046);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ 6508);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/table */ 2124);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ 9314);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/expansion */ 1884);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ 8511);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/paginator */ 6907);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/grid-list */ 3574);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/chips */ 1031);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-bar */ 6297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ 6477);













































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_services_tasks_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService, {
    provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: {
      hasBackdrop: true
    }
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__.MatSidenavModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.DragDropModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOptionModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__.CdkTableModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenuModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__.MatExpansionModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__.MatPaginatorModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_32__.MatGridListModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__.MatChipsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__.MatProgressBarModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_components_tasks_task_dashboard_task_dashboard_component__WEBPACK_IMPORTED_MODULE_8__.AddTaskDialog, _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_tasks_task_card_task_card_component__WEBPACK_IMPORTED_MODULE_1__.TaskCardComponent, _components_users_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__.LogInComponent, _components_tasks_task_dashboard_task_dashboard_component__WEBPACK_IMPORTED_MODULE_8__.TaskDashboardComponent, _components_users_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__.LogInComponent, _components_users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__.SignInComponent, _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__.ProfileComponent, _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__.SideNavComponent, _components_tasks_task_dashboard_task_dashboard_component__WEBPACK_IMPORTED_MODULE_8__.TaskDashboardComponent, _components_tasks_task_card_task_card_component__WEBPACK_IMPORTED_MODULE_1__.DeleteTaskDialog, _components_tasks_task_card_task_card_component__WEBPACK_IMPORTED_MODULE_1__.EditTaskDialog, _components_tasks_task_card_task_card_component__WEBPACK_IMPORTED_MODULE_1__.TaskCardComponent, _components_users_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__.LogInComponent, _components_users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__.SignInComponent, _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__.DeleteUserDialog],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_35__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__.MatSidenavModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.DragDropModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOptionModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__.CdkTableModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenuModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__.MatExpansionModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__.MatPaginatorModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_32__.MatGridListModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__.MatChipsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__.MatProgressBarModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetComponentScope"](_components_tasks_task_dashboard_task_dashboard_component__WEBPACK_IMPORTED_MODULE_8__.TaskDashboardComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_36__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_36__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_36__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.CdkDragHandle, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__.MatPaginator, _components_tasks_task_card_task_card_component__WEBPACK_IMPORTED_MODULE_1__.TaskCardComponent], []);
_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetComponentScope"](_components_tasks_task_dashboard_task_dashboard_component__WEBPACK_IMPORTED_MODULE_8__.TaskDashboardComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_36__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_36__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_36__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.CdkDragHandle, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__.MatPaginator, _components_tasks_task_card_task_card_component__WEBPACK_IMPORTED_MODULE_1__.TaskCardComponent], []);

/***/ }),

/***/ 5273:
/*!***********************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavComponent": () => (/* binding */ SideNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _services_users_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/users/authentication.service */ 3317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 9101);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 6069);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 9941);








function SideNavComponent_mat_nav_list_3_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SideNavComponent_mat_nav_list_3_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SideNavComponent_mat_nav_list_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list", 7)(1, "mat-list-item", 8)(2, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SideNavComponent_mat_nav_list_3_mat_icon_3_Template, 2, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SideNavComponent_mat_nav_list_3_mat_icon_4_Template, 2, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const route_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", route_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, route_r2.split("/")[0]), " ");
  }
}
class SideNavComponent {
  constructor(_authenticationService, _routes) {
    this._authenticationService = _authenticationService;
    this._routes = _routes;
    this.hide = true;
    this.user = localStorage.getItem('cashedUsername');
    //remove default routes from array (slice first 4) + replace "tasks/:username" by tasks/this.user to focus correct route
    this.routes = [this._routes.config.slice(4)[0].path.split(':')[0] + this.user, this._routes.config.slice(4)[1].path];
    this.console = console;
  }
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) {
  return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_users_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
SideNavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SideNavComponent,
  selectors: [["side-nav"]],
  decls: 11,
  vars: 3,
  consts: [[1, "sidenav-container"], ["mode", "push", 1, "nav"], ["sidenav", ""], ["class", "nav-list", 4, "ngFor", "ngForOf"], [1, "content-container"], ["type", "button", "mat-button", "", 1, "nav-button", 3, "click"], [1, "nav-icon"], [1, "nav-list"], ["routerLinkActive", "focus", 1, "nav-item", 3, "routerLink"], ["routerLinkActive", "active", 1, "nav-header", 3, "ngSwitch"], ["class", "nav-icon", 4, "ngSwitchCase"]],
  template: function SideNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SideNavComponent_mat_nav_list_3_Template, 7, 7, "mat-nav-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-sidenav-content")(5, "div", 4)(6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideNavComponent_Template_button_click_6_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6)(8, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "apps");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.routes);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", _r0.opened);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe],
  styles: [".sidenav-container[_ngcontent-%COMP%] {\r\n    background: #eee;\r\n    height: 93%;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]{\r\n    min-width: 10%;\r\n}\r\n\r\n.nav-header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    color:grey;\r\n}\r\n\r\n.nav-icon[_ngcontent-%COMP%] {\r\n    position:relative;\r\n    top: 3px;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n    color: #76becf!important;\r\n}\r\n\r\n.focus[_ngcontent-%COMP%]{\r\n    border-left: 5px solid #76becf\r\n}\r\n\r\n.nav-button[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    background-color: white;\r\n    border-bottom-left-radius: 0;\r\n    border-top-left-radius: 0;\r\n    color: grey!important;\r\n}\r\n\r\n.open[_ngcontent-%COMP%]{\r\n    color: #76becf!important;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBoZWlnaHQ6IDkzJTtcclxufVxyXG5cclxuLm5hdntcclxuICAgIG1pbi13aWR0aDogMTAlO1xyXG59XHJcblxyXG4ubmF2LWhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOmdyZXk7XHJcbn1cclxuXHJcbi5uYXYtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDogM3B4O1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjNzZiZWNmIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvY3Vze1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNzZiZWNmXHJcbn1cclxuXHJcbi5uYXYtYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGNvbG9yOiBncmV5IWltcG9ydGFudDtcclxufVxyXG5cclxuLm9wZW57XHJcbiAgICBjb2xvcjogIzc2YmVjZiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 9739:
/*!*******************************************************************!*\
  !*** ./src/app/components/tasks/task-card/task-card.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteTaskDialog": () => (/* binding */ DeleteTaskDialog),
/* harmony export */   "EditTaskDialog": () => (/* binding */ EditTaskDialog),
/* harmony export */   "TaskCardComponent": () => (/* binding */ TaskCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _services_tasks_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/tasks/task.service */ 9145);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 8511);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ 8046);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 6508);

















function TaskCardComponent_div_0_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TaskCardComponent_div_0_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "priority_high");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TaskCardComponent_div_0_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "low_priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TaskCardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1, 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TaskCardComponent_div_0_mat_icon_3_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TaskCardComponent_div_0_mat_icon_4_Template, 2, 0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TaskCardComponent_div_0_mat_icon_5_Template, 2, 0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskCardComponent_div_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.deleteTask());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskCardComponent_div_0_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.updateTask());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r0.task.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "high");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "low");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "#" + ctx_r0.task.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.task.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n", ctx_r0.task.description, "\n");
  }
}
const _c0 = "[_nghost-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.is-first[_nghost-%COMP%] {\r\n  border-top: 2px solid grey;\r\n  padding-top: 20px;\r\n}\r\n\r\n.is-last[_nghost-%COMP%] {\r\n  border-bottom: 2px solid grey;\r\n  padding-top: 20px;\r\n}\r\n\r\n.is-even[_nghost-%COMP%] {\r\n  background: lightgray;\r\n}\r\n\r\n.is-odd[_nghost-%COMP%] {\r\n  background: lightcyan;\r\n}\r\n\r\n.salmon-theme[_nghost-%COMP%]   .task-card[_ngcontent-%COMP%], .salmon-theme   [_nghost-%COMP%]   .task-card[_ngcontent-%COMP%] {\r\n  background: lightsalmon;\r\n}\r\n\r\n.delete[_ngcontent-%COMP%] {\r\n  margin-top: -3%;\r\n  right:12%;\r\n  padding-top: 5px;\r\n  background-color: white;\r\n  color: whitesmoke;\r\n  border: 0;\r\n  text-shadow: 0 0 2px red;\r\n}\r\n\r\n\r\n\r\n\r\n.task-card[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .task-priority[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%] {\r\n  overflow: clip;\r\n  margin: 40px;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n  padding: 20px;\r\n  box-shadow: 0 1px 16px 0 rgba(0, 0, 0, .2), 0 2px 8px 0 rgba(0, 0, 0, .14), 0 4px 8px -1px rgba(0, 0, 0, .12);\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%]{\r\n  color: grey;\r\n  font-size: 27px;\r\n  font-weight: bold;\r\n}\r\n\r\n.task-id[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n  font-size: 27px;\r\n  font-weight: bold;\r\n  color: #76becf;\r\n  text-shadow: grey 1px 0 1px;\r\n}\r\n\r\n.delete-message[_ngcontent-%COMP%] {\r\n  margin-top:15px;\r\n  font-size: 30px;\r\n}\r\n\r\n.add-buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.delete-btn[_ngcontent-%COMP%] {\r\n  background-color: darkred;\r\n}\r\n\r\n.leave[_ngcontent-%COMP%]{\r\n  background-color: grey;\r\n}\r\n\r\n.leave[_ngcontent-%COMP%], .delete-btn[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 20px;\r\n  margin-bottom: 20px;\r\n  margin-top:0;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .task-description[_ngcontent-%COMP%] {\r\n  max-width: 360px;\r\n  margin-top: 15px;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  font-size: 18px;\r\n  color: grey;\r\n  overflow: clip;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .task-description[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\n.task-card.beginner[_ngcontent-%COMP%] {\r\n  background: lightsalmon;\r\n}\r\n\r\n.task-priority[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .mobile-space[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90YXNrcy90YXNrLWNhcmQvdGFzay1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsd0JBQXdCO0FBQzFCOzs7OztBQUtBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw2R0FBNkc7QUFDL0c7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG46aG9zdC5pcy1maXJzdCB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZXk7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbjpob3N0LmlzLWxhc3Qge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG46aG9zdC5pcy1ldmVuIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbjpob3N0LmlzLW9kZCB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRjeWFuO1xyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5zYWxtb24tdGhlbWUpIC50YXNrLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0c2FsbW9uO1xyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICBtYXJnaW4tdG9wOiAtMyU7XHJcbiAgcmlnaHQ6MTIlO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMnB4IHJlZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLnRhc2stY2FyZCAuZGVsZXRle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnRhc2stY2FyZCAudGFzay1wcmlvcml0eXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi50YXNrLWNhcmQge1xyXG4gIG92ZXJmbG93OiBjbGlwO1xyXG4gIG1hcmdpbjogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMTZweCAwIHJnYmEoMCwgMCwgMCwgLjIpLCAwIDJweCA4cHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgNHB4IDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjEyKTtcclxufVxyXG5cclxuLnRhc2stY2FyZCAudGFzay10aXRsZXtcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50YXNrLWlkIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNzZiZWNmO1xyXG4gIHRleHQtc2hhZG93OiBncmV5IDFweCAwIDFweDtcclxufVxyXG5cclxuLmRlbGV0ZS1tZXNzYWdlIHtcclxuICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xyXG59XHJcblxyXG4ubGVhdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmxlYXZlLCAuZGVsZXRlLWJ0biB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLnRhc2stY2FyZCAudGFzay1kZXNjcmlwdGlvbiB7XHJcbiAgbWF4LXdpZHRoOiAzNjBweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogZ3JleTtcclxuICBvdmVyZmxvdzogY2xpcDtcclxufVxyXG5cclxuLnRhc2stY2FyZCAudGFzay1kZXNjcmlwdGlvbiBpbnB1dCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udGFzay1jYXJkLmJlZ2lubmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodHNhbG1vbjtcclxufVxyXG5cclxuLnRhc2stcHJpb3JpdHl7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLm1vYmlsZS1zcGFjZSB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */";
function EditTaskDialog_mat_error_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Changes!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class TaskCardComponent {
  constructor(_taskService, dialog) {
    this._taskService = _taskService;
    this.dialog = dialog;
    this.refreshTasks = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.window = window;
  }
  ngOnInit() {}
  deleteTask() {
    this.dialog.open(DeleteTaskDialog, {
      disableClose: true,
      data: {
        id: this.task.id
      }
    }).afterClosed().subscribe(() => {
      this.refreshTasks.emit();
    });
  }
  updateTask() {
    this.dialog.open(EditTaskDialog, {
      disableClose: true,
      data: this.task
    }).afterClosed().subscribe(() => {
      this.refreshTasks.emit();
    });
  }
}
TaskCardComponent.ɵfac = function TaskCardComponent_Factory(t) {
  return new (t || TaskCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tasks_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog));
};
TaskCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TaskCardComponent,
  selectors: [["task-card"]],
  inputs: {
    task: "task"
  },
  outputs: {
    refreshTasks: "refreshTasks"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "task-card", 4, "ngIf"], [1, "task-card"], ["container", ""], [1, "task-priority", 3, "ngSwitch"], ["style", "color: red", 4, "ngSwitchCase"], ["style", "color: orange", 4, "ngSwitchCase"], ["style", "color: green", 4, "ngSwitchCase"], ["mat-button-flat", "", 1, "delete", 3, "click"], ["href", "#", "onclick", "return false;", 1, "task-id", 3, "click"], [1, "task-title"], [1, "task-description"], [2, "color", "red"], [2, "color", "orange"], [2, "color", "green"]],
  template: function TaskCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TaskCardComponent_div_0_Template, 15, 7, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.task);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
  styles: [_c0]
});

class DeleteTaskDialog {
  constructor(dialogRef, data, _taskService, _snackBar) {
    this.dialogRef = dialogRef;
    this.data = data;
    this._taskService = _taskService;
    this._snackBar = _snackBar;
  }
  ngOnInit() {}
  ngOnDestroy() {
    if (this.deleteTask) {
      this.deleteTask.unsubscribe();
    }
  }
  onConfirm() {
    this.deleteTask = this._taskService.delete(this.data.id).subscribe(result => {
      let snackBarRef = this._snackBar.open(`Task #${this.data.id} Deleted`, 'Dismiss', {
        duration: 1000
      });
      console.log("TASK DELETED: ", result);
      this.onNoClick();
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
DeleteTaskDialog.ɵfac = function DeleteTaskDialog_Factory(t) {
  return new (t || DeleteTaskDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tasks_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
};
DeleteTaskDialog.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DeleteTaskDialog,
  selectors: [["delete-task-dialog"]],
  decls: 11,
  vars: 1,
  consts: [["mat-dialog-title", "", 1, "task-id"], ["mat-dialog-content", ""], [1, "delete-message"], ["mat-dialog-actions", "", 1, "add-buttons"], ["mat-button", "", 1, "delete-btn", 3, "click"], ["mat-button", "", 1, "leave", 3, "click"]],
  template: function DeleteTaskDialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Are you sure you want to delete this task?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteTaskDialog_Template_button_click_7_listener() {
        return ctx.onConfirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Delete Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteTaskDialog_Template_button_click_9_listener() {
        return ctx.onNoClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Go Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Deleting Task ", "#" + ctx.data.id, "");
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions],
  styles: [_c0]
});

class EditTaskDialog {
  constructor(dialogRef, data, _taskService, _snackBar) {
    this.dialogRef = dialogRef;
    this.data = data;
    this._taskService = _taskService;
    this._snackBar = _snackBar;
    //form definition & input validation
    this.task = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(5)),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10)),
      longDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10)),
      status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      //fetching username to create correct task data
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
      priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required)
    });
    this.disabled = false;
  }
  ngOnInit() {
    //get this user's latest task (+1 = current task number)
    // this.getLatest = this._taskService.findLatest('{"username":"Yassine"}')
    //   .subscribe(d => this.latestId = d+1);
  }
  ngOnDestroy() {
    if (this.updateTask) {
      this.updateTask.unsubscribe();
    }
    if (this.isUpdated) {
      this.isUpdated.unsubscribe();
    }
  }
  isDiff() {
    this.isUpdated = this._taskService.get(this.data.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(result => {
      console.log(JSON.stringify(result) === JSON.stringify(this.data));
      this.disabled = JSON.stringify(result) !== JSON.stringify(this.data);
    });
  }
  isValid() {
    return this.task.valid && this.disabled;
  }
  onSubmit() {
    this.updateTask = this._taskService.update(this.data.id, this.data).subscribe(result => {
      let snackBarRef = this._snackBar.open(`Task #${this.data.id} Updated`, 'Dismiss', {
        duration: 1000
      });
      console.log("THIS TASK HAS BEEN UPDATED: ", result);
    });
  }
  onNoClick() {
    //console.log(this.task);
    let dec = true;
    //if no changes no need to confirm
    if (this.disabled) {
      dec = window.confirm("Are you sure you want to leave? Any changes will not be saved!");
    }
    if (dec) {
      this.dialogRef.close();
    }
  }
}
EditTaskDialog.ɵfac = function EditTaskDialog_Factory(t) {
  return new (t || EditTaskDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tasks_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
};
EditTaskDialog.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: EditTaskDialog,
  selectors: [["edit-task-dialog"]],
  decls: 75,
  vars: 24,
  consts: [[1, "dialog"], ["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "content"], [1, "task-id"], [3, "formGroup", "change"], ["formControlName", "status", 3, "ngModel", "ngModelChange", "change"], ["color", "primary", "value", "TO DO"], ["color", "primary", "value", "DOING"], ["color", "primary", "value", "DONE"], [1, "text-input"], ["matInput", "", "formControlName", "title", "maxlength", "10", "placeholder", "Title", "required", "", 3, "ngModel", "ngModelChange"], ["title", ""], ["matInput", "", "formControlName", "description", "maxlength", "20", "placeholder", "Description", "required", "", 3, "ngModel", "ngModelChange"], ["description", ""], ["matInput", "", "formControlName", "longDescription", "maxlength", "100", "placeholder", "Long Description", "required", "", 3, "ngModel", "ngModelChange"], ["longDescription", ""], ["placeholder", "Priority", "formControlName", "priority", "required", "", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "high"], ["value", "medium"], ["value", "low"], [1, "task-time"], ["mat-dialog-actions", "", 1, "add-buttons"], ["type", "submit", "mat-button", "", 1, "confirm", 3, "disabled", "mat-dialog-close", "click"], [4, "ngIf"], ["mat-button", "", 1, "leave", 3, "click"]],
  template: function EditTaskDialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Updating Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "h4", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditTaskDialog_Template_form_change_6_listener() {
        return ctx.isDiff();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div")(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Status: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-radio-group", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditTaskDialog_Template_mat_radio_group_ngModelChange_10_listener($event) {
        return ctx.data.status = $event;
      })("change", function EditTaskDialog_Template_mat_radio_group_change_10_listener() {
        return ctx.isDiff();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-radio-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "TO DO");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-radio-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "DOING");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-radio-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "DONE");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Title: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field")(21, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditTaskDialog_Template_input_ngModelChange_21_listener($event) {
        return ctx.data.title = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Description: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-form-field")(30, "textarea", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditTaskDialog_Template_textarea_ngModelChange_30_listener($event) {
        return ctx.data.description = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Long Description: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-form-field")(39, "textarea", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditTaskDialog_Template_textarea_ngModelChange_39_listener($event) {
        return ctx.data.longDescription = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Priority: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-form-field")(48, "mat-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditTaskDialog_Template_mat_select_ngModelChange_48_listener($event) {
        return ctx.data.priority = $event;
      })("selectionChange", function EditTaskDialog_Template_mat_select_selectionChange_48_listener() {
        return ctx.isDiff();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "High");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Medium");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Low");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Required Selection ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 20)(58, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Created At: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 20)(64, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Last Updated At: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](68, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 21)(70, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditTaskDialog_Template_button_click_70_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Edit Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, EditTaskDialog_mat_error_72_Template, 2, 0, "mat-error", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditTaskDialog_Template_button_click_73_listener() {
        return ctx.onNoClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Go Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Task ", "#" + ctx.data.id, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.task);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.data.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (_r0.value == null ? null : _r0.value.length) || 0, "/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Minimum Required characters ", (_r0.value == null ? null : _r0.value.length) || 0, "/5 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.data.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (_r1.value == null ? null : _r1.value.length) || 0, "/20");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Minimum Required characters ", (_r1.value == null ? null : _r1.value.length) || 0, "/10 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.data.longDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (_r2.value == null ? null : _r2.value.length) || 0, "/100");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Minimum Required characters ", (_r2.value == null ? null : _r2.value.length) || 0, "/20 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.data.priority);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](62, 18, ctx.data.createdAt, "MMM, dd yyyy @ hh:mm a"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](68, 21, ctx.data.updatedAt, "MMM, dd yyyy @ hh:mm a"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isValid())("mat-dialog-close", ctx.task);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.disabled);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  styles: [".vl[_ngcontent-%COMP%] {\r\n    border:3px solid grey;\r\n    min-height: 30vh;\r\n}\r\n\r\n\r\n.add[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    left: 20px;\r\n    background-color: grey;\r\n    color:white;\r\n}\r\n.list[_ngcontent-%COMP%]{\r\n    border: solid 1px grey;\r\n    min-height: 60px;\r\n}\r\n\r\n.empty-label[_ngcontent-%COMP%] {\r\n    color: grey;\r\n    font-size: 2em;\r\n    padding-top: 10px;\r\n    text-align: center;\r\n    opacity: 0.2;\r\n}\r\n\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n    transition: transform 250ms;\r\n}\r\n\r\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n    opacity: 0.2;\r\n}\r\n.content[_ngcontent-%COMP%]{\r\n  overflow: visible;\r\n}\r\n\r\n.paginator[_ngcontent-%COMP%]{\r\n\r\n}\r\n\r\n.task-time[_ngcontent-%COMP%] {\r\n  padding-top:10px;\r\n}\r\n\r\n.cdk-drag-handle[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 110px;\r\n  bottom: 80px;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: grey;\r\n}\r\n\r\n.categories[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n    flex-wrap: wrap;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.category[_ngcontent-%COMP%] {\r\n    text-shadow: grey 2px 2px;\r\n    color:white;\r\n    text-align: center;\r\n    margin-top: 15px;\r\n    background: #76becf;\r\n    border: 2px solid grey;\r\n    border-radius: 4px;\r\n    padding: 2px 3px;\r\n    overflow: clip;\r\n}\r\n\r\n.column-category[_ngcontent-%COMP%], .list[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    min-width: 400px;\r\n    overflow: clip;\r\n}\r\n\r\n.column-category[_ngcontent-%COMP%]:hover   .category[_ngcontent-%COMP%]{\r\n    text-shadow: grey 5px 5px;\r\n    border: 3px groove grey;\r\n}\r\n\r\n.column-category[_ngcontent-%COMP%]:hover   .mat-mdc-card[_ngcontent-%COMP%]{\r\n    border: 3px groove grey;\r\n}\r\n\r\n.task-id[_ngcontent-%COMP%] {\r\n    color: #76becf;\r\n}\r\n\r\n.text-input[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.text-input[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.text-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.text-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n}\r\n\r\n.text-input[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\r\n    margin: 0 12px;\r\n}\r\n\r\n.add-buttons[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.confirm[_ngcontent-%COMP%] {\r\n    background-color:#76becf;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n\r\n.confirm[_ngcontent-%COMP%]:disabled {\r\n    background-color:aliceblue;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n\r\n.leave[_ngcontent-%COMP%] {\r\n    background-color:grey;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n\r\n.leave[_ngcontent-%COMP%], .confirm[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 870px) {\r\n    .vl[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .column-category[_ngcontent-%COMP%] {\r\n        margin-bottom: 30px;\r\n    }\r\n\r\n    .category[_ngcontent-%COMP%] {\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .column-category[_ngcontent-%COMP%], .list[_ngcontent-%COMP%] {\r\n        min-width: 350px;\r\n    }\r\n\r\n    .add[_ngcontent-%COMP%] {\r\n        z-index: 1;\r\n        position: sticky;\r\n        width: 150px;\r\n        left: 60%;\r\n    }\r\n\r\n\r\n}\r\n\r\n@media(min-width: 600px){\r\n  .dialog[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90YXNrcy90YXNrLWRhc2hib2FyZC90YXNrLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7OztBQUdBLHFDQUFxQztBQUNyQztJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFNBQVM7SUFDYjs7O0FBR0o7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi52bCB7XHJcbiAgICBib3JkZXI6M3B4IHNvbGlkIGdyZXk7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHZoO1xyXG59XHJcblxyXG5cclxuLmFkZCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbi5saXN0e1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5lbXB0eS1sYWJlbCB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG59XHJcbi5jb250ZW50e1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ucGFnaW5hdG9ye1xyXG5cclxufVxyXG5cclxuLnRhc2stdGltZSB7XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxufVxyXG5cclxuLmNkay1kcmFnLWhhbmRsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDExMHB4O1xyXG4gIGJvdHRvbTogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcyB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5jYXRlZ29yeSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogZ3JleSAycHggMnB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzc2YmVjZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAycHggM3B4O1xyXG4gICAgb3ZlcmZsb3c6IGNsaXA7XHJcbn1cclxuXHJcbi5jb2x1bW4tY2F0ZWdvcnksIC5saXN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogY2xpcDtcclxufVxyXG5cclxuLmNvbHVtbi1jYXRlZ29yeTpob3ZlciAuY2F0ZWdvcnl7XHJcbiAgICB0ZXh0LXNoYWRvdzogZ3JleSA1cHggNXB4O1xyXG4gICAgYm9yZGVyOiAzcHggZ3Jvb3ZlIGdyZXk7XHJcbn1cclxuXHJcbi5jb2x1bW4tY2F0ZWdvcnk6aG92ZXIgLm1hdC1tZGMtY2FyZHtcclxuICAgIGJvcmRlcjogM3B4IGdyb292ZSBncmV5O1xyXG59XHJcblxyXG4udGFzay1pZCB7XHJcbiAgICBjb2xvcjogIzc2YmVjZjtcclxufVxyXG5cclxuLnRleHQtaW5wdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50ZXh0LWlucHV0ID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRleHQtaW5wdXQgZm9ybSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udGV4dC1pbnB1dCBmb3JtID4gKiB7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4udGV4dC1pbnB1dCAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgMTJweDtcclxufVxyXG5cclxuLmFkZC1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLmNvbmZpcm0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNzZiZWNmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uY29uZmlybTpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmFsaWNlYmx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmxlYXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Z3JleTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmxlYXZlLCAuY29uZmlybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcbi8qICAgICAgbW9iaWxlL3NtYWxsIGRpc3BsYXkgICAgICAgICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NzBweCkge1xyXG4gICAgLnZsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tY2F0ZWdvcnkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tY2F0ZWdvcnksIC5saXN0IHtcclxuICAgICAgICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGQge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgbGVmdDogNjAlO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDYwMHB4KXtcclxuICAuZGlhbG9nIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 1946:
/*!*****************************************************************************!*\
  !*** ./src/app/components/tasks/task-dashboard/task-dashboard.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTaskDialog": () => (/* binding */ AddTaskDialog),
/* harmony export */   "TaskDashboardComponent": () => (/* binding */ TaskDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 808);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _services_tasks_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/tasks/task.service */ 9145);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 8511);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ 8046);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 6508);















function TaskDashboardComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Empty list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TaskDashboardComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 22)(3, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function TaskDashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDragDropped", function TaskDashboardComponent_div_12_Template_div_cdkDragDropped_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const task_r9 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.editTask($event, task_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "task-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("refreshTasks", function TaskDashboardComponent_div_12_Template_task_card_refreshTasks_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.refreshTasks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TaskDashboardComponent_div_12_div_2_Template, 4, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("task", task_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.window.innerWidth < 700);
  }
}
function TaskDashboardComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Empty list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TaskDashboardComponent_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 22)(3, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function TaskDashboardComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDragDropped", function TaskDashboardComponent_div_20_Template_div_cdkDragDropped_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const task_r14 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.editTask($event, task_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "task-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("refreshTasks", function TaskDashboardComponent_div_20_Template_task_card_refreshTasks_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.refreshTasks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TaskDashboardComponent_div_20_div_2_Template, 4, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r14 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("task", task_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.window.innerWidth < 700);
  }
}
function TaskDashboardComponent_p_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Empty list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TaskDashboardComponent_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 22)(3, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function TaskDashboardComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDragDropped", function TaskDashboardComponent_div_28_Template_div_cdkDragDropped_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const task_r19 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.editTask($event, task_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "task-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("refreshTasks", function TaskDashboardComponent_div_28_Template_task_card_refreshTasks_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.refreshTasks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TaskDashboardComponent_div_28_div_2_Template, 4, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r19 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("task", task_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.window.innerWidth < 700);
  }
}
const _c0 = function () {
  return ["mat-headline-3", "category"];
};
const _c1 = function (a0, a1) {
  return [a0, a1];
};
const _c2 = function () {
  return [3, 6];
};
const _c3 = ".vl[_ngcontent-%COMP%] {\r\n    border:3px solid grey;\r\n    min-height: 30vh;\r\n}\r\n\r\n\r\n.add[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    left: 20px;\r\n    background-color: grey;\r\n    color:white;\r\n}\r\n.list[_ngcontent-%COMP%]{\r\n    border: solid 1px grey;\r\n    min-height: 60px;\r\n}\r\n\r\n.empty-label[_ngcontent-%COMP%] {\r\n    color: grey;\r\n    font-size: 2em;\r\n    padding-top: 10px;\r\n    text-align: center;\r\n    opacity: 0.2;\r\n}\r\n\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n    transition: transform 250ms;\r\n}\r\n\r\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n    opacity: 0.2;\r\n}\r\n.content[_ngcontent-%COMP%]{\r\n  overflow: visible;\r\n}\r\n\r\n.paginator[_ngcontent-%COMP%]{\r\n\r\n}\r\n\r\n.task-time[_ngcontent-%COMP%] {\r\n  padding-top:10px;\r\n}\r\n\r\n.cdk-drag-handle[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 110px;\r\n  bottom: 80px;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: grey;\r\n}\r\n\r\n.categories[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n    flex-wrap: wrap;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.category[_ngcontent-%COMP%] {\r\n    text-shadow: grey 2px 2px;\r\n    color:white;\r\n    text-align: center;\r\n    margin-top: 15px;\r\n    background: #76becf;\r\n    border: 2px solid grey;\r\n    border-radius: 4px;\r\n    padding: 2px 3px;\r\n    overflow: clip;\r\n}\r\n\r\n.column-category[_ngcontent-%COMP%], .list[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    min-width: 400px;\r\n    overflow: clip;\r\n}\r\n\r\n.column-category[_ngcontent-%COMP%]:hover   .category[_ngcontent-%COMP%]{\r\n    text-shadow: grey 5px 5px;\r\n    border: 3px groove grey;\r\n}\r\n\r\n.column-category[_ngcontent-%COMP%]:hover   .mat-mdc-card[_ngcontent-%COMP%]{\r\n    border: 3px groove grey;\r\n}\r\n\r\n.task-id[_ngcontent-%COMP%] {\r\n    color: #76becf;\r\n}\r\n\r\n.text-input[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.text-input[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.text-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.text-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n}\r\n\r\n.text-input[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\r\n    margin: 0 12px;\r\n}\r\n\r\n.add-buttons[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.confirm[_ngcontent-%COMP%] {\r\n    background-color:#76becf;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n\r\n.confirm[_ngcontent-%COMP%]:disabled {\r\n    background-color:aliceblue;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n\r\n.leave[_ngcontent-%COMP%] {\r\n    background-color:grey;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n\r\n.leave[_ngcontent-%COMP%], .confirm[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 870px) {\r\n    .vl[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .column-category[_ngcontent-%COMP%] {\r\n        margin-bottom: 30px;\r\n    }\r\n\r\n    .category[_ngcontent-%COMP%] {\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .column-category[_ngcontent-%COMP%], .list[_ngcontent-%COMP%] {\r\n        min-width: 350px;\r\n    }\r\n\r\n    .add[_ngcontent-%COMP%] {\r\n        z-index: 1;\r\n        position: sticky;\r\n        width: 150px;\r\n        left: 60%;\r\n    }\r\n\r\n\r\n}\r\n\r\n@media(min-width: 600px){\r\n  .dialog[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90YXNrcy90YXNrLWRhc2hib2FyZC90YXNrLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7OztBQUdBLHFDQUFxQztBQUNyQztJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFNBQVM7SUFDYjs7O0FBR0o7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi52bCB7XHJcbiAgICBib3JkZXI6M3B4IHNvbGlkIGdyZXk7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHZoO1xyXG59XHJcblxyXG5cclxuLmFkZCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbi5saXN0e1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5lbXB0eS1sYWJlbCB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG59XHJcbi5jb250ZW50e1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ucGFnaW5hdG9ye1xyXG5cclxufVxyXG5cclxuLnRhc2stdGltZSB7XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxufVxyXG5cclxuLmNkay1kcmFnLWhhbmRsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDExMHB4O1xyXG4gIGJvdHRvbTogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcyB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5jYXRlZ29yeSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogZ3JleSAycHggMnB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzc2YmVjZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAycHggM3B4O1xyXG4gICAgb3ZlcmZsb3c6IGNsaXA7XHJcbn1cclxuXHJcbi5jb2x1bW4tY2F0ZWdvcnksIC5saXN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogY2xpcDtcclxufVxyXG5cclxuLmNvbHVtbi1jYXRlZ29yeTpob3ZlciAuY2F0ZWdvcnl7XHJcbiAgICB0ZXh0LXNoYWRvdzogZ3JleSA1cHggNXB4O1xyXG4gICAgYm9yZGVyOiAzcHggZ3Jvb3ZlIGdyZXk7XHJcbn1cclxuXHJcbi5jb2x1bW4tY2F0ZWdvcnk6aG92ZXIgLm1hdC1tZGMtY2FyZHtcclxuICAgIGJvcmRlcjogM3B4IGdyb292ZSBncmV5O1xyXG59XHJcblxyXG4udGFzay1pZCB7XHJcbiAgICBjb2xvcjogIzc2YmVjZjtcclxufVxyXG5cclxuLnRleHQtaW5wdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50ZXh0LWlucHV0ID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRleHQtaW5wdXQgZm9ybSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udGV4dC1pbnB1dCBmb3JtID4gKiB7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4udGV4dC1pbnB1dCAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgMTJweDtcclxufVxyXG5cclxuLmFkZC1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLmNvbmZpcm0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNzZiZWNmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uY29uZmlybTpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmFsaWNlYmx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmxlYXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Z3JleTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmxlYXZlLCAuY29uZmlybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcbi8qICAgICAgbW9iaWxlL3NtYWxsIGRpc3BsYXkgICAgICAgICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NzBweCkge1xyXG4gICAgLnZsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tY2F0ZWdvcnkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tY2F0ZWdvcnksIC5saXN0IHtcclxuICAgICAgICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGQge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgbGVmdDogNjAlO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDYwMHB4KXtcclxuICAuZGlhbG9nIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */";
class TaskDashboardComponent {
  handlePageEvent(e) {
    console.log(e.pageIndex);
    this.limit = e.pageSize;
    this.index = e.pageIndex;
    this.getAllTasks();
  }
  constructor(_taskService, dialog, route, _snackBar) {
    this._taskService = _taskService;
    this.dialog = dialog;
    this.route = route;
    this._snackBar = _snackBar;
    this.todo = [];
    this.inProgress = [];
    this.done = [];
    this.allTasks = [];
    this.limit = 6;
    this.index = 0;
    this.showEmpty = true;
    this.window = window;
    this.ondragenter = ondragenter;
    this.getAllTasks();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      console.log(this.username);
    });
    this.getAllTasks();
  }
  hidingEmpty() {
    this.showEmpty = false;
  }
  getAllTasks() {
    this.getTasks = this._taskService.getAll().subscribe(data => {
      this.allTasks = data.filter(d => d.username == this.username);
      console.log('todo', this.todo.length);
      console.log('inprogress', this.inProgress.length);
      console.log('done', this.done);
      this.todo = data.filter(d => d.status == 'TO DO' && d.username == this.username);
      this.inProgress = data.filter(d => d.status == 'DOING' && d.username == this.username);
      this.done = data.filter(d => d.status == 'DONE' && d.username == this.username);
      this.todo = data.filter(d => d.status == 'TO DO' && d.username == this.username).slice(this.limit == 3 ? this.todo.length <= 1 ? 0 : -1 - this.index : this.todo.length <= 2 ? 0 : -2 - this.index * 2, this.limit === 3 ? this.todo.length - this.index : this.todo.length - this.index * 2);
      this.inProgress = data.filter(d => d.status == 'DOING' && d.username == this.username).slice(this.limit === 3 ? this.inProgress.length <= 1 ? 0 : -1 - this.index : this.inProgress.length <= 2 ? 0 : -2 - this.index * 2, this.limit === 3 ? this.inProgress.length - this.index : this.inProgress.length - this.index * 2);
      this.done = data.filter(d => d.status == 'DONE' && d.username == this.username).slice(this.limit === 3 ? this.done.length <= 1 ? 0 : -1 - this.index : this.done.length <= 2 ? 0 : -2 - this.index * 2, this.limit === 3 ? this.done.length - this.index : this.done.length - this.index * 2);
    });
  }
  ngOnDestroy() {
    if (this.getTasks) {
      this.getTasks.unsubscribe();
    }
    if (this.dialogRef) {
      this.dialogRef.unsubscribe();
    }
    if (this.sub) {
      this.dialogRef.unsubscribe();
    }
  }
  editTask(event, task) {
    console.log("came from here : " + event.previousContainer.id);
    console.log("came to here : " + event.container.id);
    if (event.previousContainer !== event.container) {
      let snackBarRef = this._snackBar.open(`Task #${task.id} Updated`, 'Dismiss', {
        duration: 1000
      });
      this.sub = this._taskService.update(task.id, '{"status":"' + event.container.id + '"}').subscribe(() => {
        this.getAllTasks();
      });
    }
  }
  refreshTasks() {
    this.getAllTasks();
  }
  drop(event) {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    this.showEmpty = true;
  }
  openDialog() {
    this.dialogRef = this.dialog.open(AddTaskDialog, {
      data: {
        username: this.username
      },
      disableClose: true
    }).afterClosed().subscribe(() => {
      this.getAllTasks();
    });
  }
}
TaskDashboardComponent.ɵfac = function TaskDashboardComponent_Factory(t) {
  return new (t || TaskDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tasks_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
};
TaskDashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TaskDashboardComponent,
  selectors: [["task-dashboard"]],
  decls: 30,
  vars: 31,
  consts: [["mat-button", "", 1, "add", 3, "click"], [1, "dashboard"], [1, "categories"], [1, "column-category"], [3, "ngClass"], ["cdkDropList", "", "id", "TO DO", 1, "list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped", "cdkDropListEntered"], ["todoList", "cdkDropList"], ["class", "empty-label", 4, "ngIf"], ["cdkDrag", "", 3, "cdkDragDropped", 4, "ngFor", "ngForOf"], [1, "vl"], ["cdkDropList", "", "id", "DOING", 1, "list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped", "cdkDropListEntered"], ["inProgressList", "cdkDropList"], ["cdkDropList", "", "id", "DONE", 1, "list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped", "cdkDropListEntered"], ["doneList", "cdkDropList"], ["class", "drag", "cdkDrag", "", 3, "cdkDragDropped", 4, "ngFor", "ngForOf"], ["aria-label", "Select page", 1, "paginator", 3, "length", "pageSize", "pageSizeOptions", "page"], [1, "empty-label"], ["cdkDrag", "", 3, "cdkDragDropped"], [1, "task", 3, "task", "refreshTasks"], ["class", "drag-handle", "cdkDragHandle", "", 4, "ngIf"], ["cdkDragHandle", "", 1, "drag-handle"], ["width", "24px", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"], ["d", "M0 0h24v24H0z", "fill", "none"], ["cdkDrag", "", 1, "drag", 3, "cdkDragDropped"]],
  template: function TaskDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskDashboardComponent_Template_button_click_0_listener() {
        return ctx.openDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Add Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1)(5, "div", 2)(6, "div", 3)(7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "To do");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function TaskDashboardComponent_Template_mat_card_cdkDropListDropped_9_listener($event) {
        return ctx.drop($event);
      })("cdkDropListEntered", function TaskDashboardComponent_Template_mat_card_cdkDropListEntered_9_listener() {
        return ctx.hidingEmpty();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TaskDashboardComponent_p_11_Template, 2, 0, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TaskDashboardComponent_div_12_Template, 3, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3)(15, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Doing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-card", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function TaskDashboardComponent_Template_mat_card_cdkDropListDropped_17_listener($event) {
        return ctx.drop($event);
      })("cdkDropListEntered", function TaskDashboardComponent_Template_mat_card_cdkDropListEntered_17_listener() {
        return ctx.hidingEmpty();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, TaskDashboardComponent_p_19_Template, 2, 0, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, TaskDashboardComponent_div_20_Template, 3, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3)(23, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Done");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-card", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function TaskDashboardComponent_Template_mat_card_cdkDropListDropped_25_listener($event) {
        return ctx.drop($event);
      })("cdkDropListEntered", function TaskDashboardComponent_Template_mat_card_cdkDropListEntered_25_listener() {
        return ctx.hidingEmpty();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, TaskDashboardComponent_p_27_Template, 2, 0, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, TaskDashboardComponent_div_28_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-paginator", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function TaskDashboardComponent_Template_mat_paginator_page_29_listener($event) {
        return ctx.handlePageEvent($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx.todo)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](19, _c1, _r6, _r3));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.todo.length === 0 && ctx.showEmpty);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.todo);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx.inProgress)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](23, _c1, _r0, _r6));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.inProgress.length === 0 && ctx.showEmpty);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.inProgress);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx.done)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](27, _c1, _r0, _r3));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.done.length === 0 && ctx.showEmpty);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.done);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx.allTasks.length)("pageSize", 6)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c2));
    }
  },
  styles: [_c3]
});

class AddTaskDialog {
  constructor(dialogRef, data, _taskService, _snackBar) {
    this.dialogRef = dialogRef;
    this.data = data;
    this._taskService = _taskService;
    this._snackBar = _snackBar;
    //form definition & input validation
    this.task = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(5)),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10)),
      longDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10)),
      status: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('TO DO', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      //fetching username to create correct task data
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data.username)
    });
  }
  ngOnInit() {
    //get this user's latest task (+1 = current task number)
    console.log(this.data.username);
    this.getLatest = this._taskService.findLatest(`{"username":"${this.data.username}"}`).subscribe(d => this.latestId = d.length + 1);
  }
  ngOnDestroy() {
    if (this.getLatest) {
      this.getLatest.unsubscribe();
    }
    if (this.createTask) {
      this.createTask.unsubscribe();
    }
  }
  isValid() {
    return this.task.valid;
  }
  onSubmit() {
    this.createTask = this._taskService.create(this.task.value).subscribe(result => {
      let snackBarRef = this._snackBar.open(`Task #${result.id} Created`, 'Dismiss', {
        duration: 1000
      });
      console.log("THIS TASK HAS BEEN CREATED: ", result);
    });
  }
  onNoClick() {
    //console.log(this.task);
    let dec = window.confirm("Are you sure you want to leave? Any changes will not be saved!");
    if (dec) {
      this.dialogRef.close();
    }
  }
}
AddTaskDialog.ɵfac = function AddTaskDialog_Factory(t) {
  return new (t || AddTaskDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tasks_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
};
AddTaskDialog.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AddTaskDialog,
  selectors: [["add-task-dialog"]],
  decls: 54,
  vars: 10,
  consts: [[1, "dialog"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "task-id"], [3, "formGroup"], ["formControlName", "status"], ["color", "primary", "value", "TO DO"], ["color", "primary", "value", "DOING"], ["color", "primary", "value", "DONE"], [1, "text-input"], ["matInput", "", "formControlName", "title", "maxlength", "10", "placeholder", "Title", "required", ""], ["title", ""], ["matInput", "", "formControlName", "description", "maxlength", "20", "placeholder", "Description", "required", ""], ["description", ""], ["matInput", "", "formControlName", "longDescription", "maxlength", "100", "placeholder", "Long Description", "required", ""], ["lonDescription", ""], ["placeholder", "Priority", "formControlName", "priority", "required", ""], ["value", "high"], ["value", "medium"], ["value", "low"], ["mat-dialog-actions", "", 1, "add-buttons"], ["type", "submit", "mat-button", "", 1, "confirm", 3, "disabled", "mat-dialog-close", "click"], ["mat-button", "", 1, "leave", 3, "click"]],
  template: function AddTaskDialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create a Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "h4", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4)(7, "div")(8, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Status: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-radio-group", 5)(11, "mat-radio-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "TO DO");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-radio-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "DOING");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-radio-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "DONE");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9)(18, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "textarea", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "textarea", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-form-field")(40, "mat-select", 16)(41, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "High");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Medium");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Low");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Required Selection ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 20)(50, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddTaskDialog_Template_button_click_50_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Add Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddTaskDialog_Template_button_click_52_listener() {
        return ctx.onNoClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Go Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Creating Task ", "#" + ctx.latestId, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.task);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (_r0.value == null ? null : _r0.value.length) || 0, "/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Minimum Required characters ", (_r0.value == null ? null : _r0.value.length) || 0, "/5 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (_r1.value == null ? null : _r1.value.length) || 0, "/20");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Minimum Required characters ", (_r1.value == null ? null : _r1.value.length) || 0, "/10 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (_r2.value == null ? null : _r2.value.length) || 0, "/100");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Minimum Required characters ", (_r2.value == null ? null : _r2.value.length) || 0, "/20 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isValid())("mat-dialog-close", ctx.task);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect],
  styles: [_c3]
});


/***/ }),

/***/ 9763:
/*!*************************************************************!*\
  !*** ./src/app/components/users/log-in/log-in.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogInComponent": () => (/* binding */ LogInComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _services_users_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/users/authentication.service */ 3317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 3677);











function LogInComponent_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " The username and password were not recognised ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class LogInComponent {
  constructor(_authenticationService) {
    this._authenticationService = _authenticationService;
    this.invalid = false;
    this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[^\\.\\s][\\w\\-]+(\\.[\\w\\-]+)*@([\\w-]+\\.)+[\\w-]{2,}$')),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required)
    });
    this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.signedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  reset() {
    this.invalid = false;
  }
  logIn(user) {
    this.loggedIn.emit(user);
  }
  signIn() {
    this.signedIn.emit();
  }
  checkUser() {
    this.getUser = this._authenticationService.get(this.user.value.email).subscribe(res => {
      if (this.user.value.password === res?.password) {
        this.logIn(res);
      } else {
        this.invalid = true;
      }
    });
  }
  ngOnInit() {}
  ngOnDestroy() {
    // this.getUser.unsubscribe();
  }
}
LogInComponent.ɵfac = function LogInComponent_Factory(t) {
  return new (t || LogInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_users_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
};
LogInComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LogInComponent,
  selectors: [["log-in"]],
  outputs: {
    loggedIn: "loggedIn",
    signedIn: "signedIn"
  },
  decls: 57,
  vars: 2,
  consts: [[1, "login-container"], [1, "login-eyes"], [1, "hit-area"], ["id", "a-1", 1, "hitbox"], ["id", "a-2", 1, "hitbox"], ["id", "a-3", 1, "hitbox"], ["id", "a-4", 1, "hitbox"], ["id", "a-5", 1, "hitbox"], ["id", "b-1", 1, "hitbox"], ["id", "b-2", 1, "hitbox"], ["id", "b-3", 1, "hitbox"], ["id", "b-4", 1, "hitbox"], ["id", "b-5", 1, "hitbox"], ["id", "c-1", 1, "hitbox"], ["id", "c-2", 1, "hitbox"], ["id", "c-3", 1, "hitbox"], ["id", "c-4", 1, "hitbox"], ["id", "c-5", 1, "hitbox"], ["id", "d-1", 1, "hitbox"], ["id", "d-2", 1, "hitbox"], ["id", "d-3", 1, "hitbox"], ["id", "d-4", 1, "hitbox"], ["id", "d-5", 1, "hitbox"], ["id", "e-1", 1, "hitbox"], ["id", "e-2", 1, "hitbox"], ["id", "e-3", 1, "hitbox"], ["id", "e-4", 1, "hitbox"], ["id", "e-5", 1, "hitbox"], [1, "eye"], [1, "pupil"], [1, "eyelid"], [1, "login"], [1, "login-card"], [1, "login-field"], [2, "text-align", "center", 3, "formGroup", "change"], [1, "title"], ["class", "login-error", "style", "padding-bottom: 20px", 4, "ngIf"], [1, "full-width-input"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "required", ""], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "password", "required", ""], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "login-btn", 3, "click"], ["routerLink", "/sign-in", 1, "sign-in", 3, "click"], [1, "login-error", 2, "padding-bottom", "20px"]],
  template: function LogInComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "div", 14)(15, "div", 15)(16, "div", 16)(17, "div", 17)(18, "div", 18)(19, "div", 19)(20, "div", 20)(21, "div", 21)(22, "div", 22)(23, "div", 23)(24, "div", 24)(25, "div", 25)(26, "div", 26)(27, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 30)(33, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-card", 31)(35, "div", 32)(36, "mat-card-content", 33)(37, "form", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LogInComponent_Template_form_change_37_listener() {
        return ctx.reset();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h2", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Log In");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, LogInComponent_mat_error_40_Template, 2, 0, "mat-error", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div")(42, "mat-form-field", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Please provide a valid email address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div")(47, "mat-form-field", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Please provide a valid password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogInComponent_Template_button_click_51_listener() {
        return ctx.checkUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Don't have an account? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogInComponent_Template_a_click_55_listener() {
        return ctx.signIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Sign In");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.user);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton],
  styles: [".login-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  vertical-align: center;\r\n  \r\n}\r\n\r\n.full-width-input[_ngcontent-%COMP%], .password-input[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.password-input[_ngcontent-%COMP%]{\r\n  padding-bottom: 15%;\r\n}\r\n\r\n\r\n.login-image[_ngcontent-%COMP%]{\r\n  border-radius: 0.9rem !important;\r\n  width: 500px;\r\n  box-shadow: 0 2px 15px -3px rgba(0,0,0,.07), 0 10px 20px -2px rgba(0,0,0,.04) !important;\r\n}\r\n\r\n.login-card[_ngcontent-%COMP%]{\r\n  width: 500px;\r\n  background: hsla(0, 0%, 100%, 0.55);\r\n  -webkit-backdrop-filter: blur(30px);\r\n          backdrop-filter: blur(30px);\r\n  border-radius: 10px;\r\n  margin-left: -100px;\r\n  margin-top: 30px;\r\n}\r\n\r\n\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  color:grey;\r\n}\r\n.login[_ngcontent-%COMP%], .login-eyes[_ngcontent-%COMP%]{\r\n  flex:0 1;\r\n  box-shadow: unset;\r\n  margin-top: 80px;\r\n}\r\n\r\n.login-eyes[_ngcontent-%COMP%] {\r\n  background-image: url(\"https://images-platform.99static.com/KlEcm6nL2ufed2mmvsVTqaodXGU=/53x42:967x956/500x500/top/smart/99designs-contests-attachments/64/64602/attachment_64602258\");\r\n}\r\n\r\n.login-field[_ngcontent-%COMP%]{\r\n  flex-direction: row;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: -10px;\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin-bottom: 50px;\r\n  background-color: #76becf!important;\r\n}\r\n\r\nsign-in[_ngcontent-%COMP%]:focus-visible {\r\n  color: #76becf;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .login-field[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n  }\r\n}\r\n\r\n\r\n\r\n.hit-area[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 500px;\r\n  height: 500px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.hitbox[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 100px;\r\n  float:left;\r\n}\r\n\r\n\r\n\r\n.eye[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  left: 23%;\r\n  top: 24%;\r\n  background-color: white;\r\n  pointer-events: none;\r\n  border: 3px solid #76becf;\r\n}\r\n\r\n.eye[_ngcontent-%COMP%]    + .eye[_ngcontent-%COMP%] {\r\n  left: 52%;\r\n}\r\n\r\n.pupil[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  background-color: grey;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin-left: -10px;\r\n  margin-top: -10px;\r\n  transition: all .5s ease;\r\n}\r\n\r\n.eyelid[_ngcontent-%COMP%] {\r\n  border: 5px solid #76becf;\r\n  border-radius: 100%;\r\n  width: 100px;\r\n  height: 20px;\r\n  background-color: #76becf;\r\n  position: absolute;\r\n  left: 23%;\r\n  top: 24%;\r\n  pointer-events: none;\r\n  -webkit-animation-name: blink;\r\n  -webkit-animation-duration: 4.5s;\r\n  -webkit-animation-iteration-count: infinite;\r\n  -webkit-animation-timing-function: linear;\r\n  -webkit-animation-direction: alternate;\r\n  -webkit-animation-delay: 1s;\r\n  -webkit-transition: all .5s ease;\r\n}\r\n\r\n.eyelid[_ngcontent-%COMP%]    + .eyelid[_ngcontent-%COMP%] {\r\n  left: 52%;\r\n}\r\n\r\n.hitbox[_ngcontent-%COMP%]:hover    ~ .eyelid[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-10deg);\r\n}\r\n\r\n.hitbox[_ngcontent-%COMP%]:hover    ~ .eyelid[_ngcontent-%COMP%]:nth-of-type(2n+1) {\r\n  -webkit-transform: rotate(10deg);\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eyelid[_ngcontent-%COMP%] {\r\n  -webkit-transform:  rotate(15deg);\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eyelid[_ngcontent-%COMP%]:nth-of-type(2n+1) {\r\n  -webkit-transform: rotate(-15deg);\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]   .pupil[_ngcontent-%COMP%] {\r\n  background-color: red;\r\n}\r\n\r\n#a-1[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(60deg) translate(-30px);\r\n}\r\n\r\n#a-2[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(80deg) translate(-30px);\r\n}\r\n\r\n#a-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(90deg) translate(-30px);\r\n}\r\n\r\n#a-4[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(100deg) translate(-30px);\r\n}\r\n\r\n#a-5[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(120deg) translate(-30px);\r\n}\r\n\r\n#b-1[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(50deg) translate(-25px);\r\n}\r\n\r\n#b-2[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(70deg) translate(-25px);\r\n}\r\n\r\n#b-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(90deg) translate(-25px);\r\n}\r\n\r\n#b-4[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(110deg) translate(-25px);\r\n}\r\n\r\n#b-5[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(130deg) translate(-25px);\r\n}\r\n\r\n#c-1[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(-25px);\r\n}\r\n\r\n#c-2[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(-10px);\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(20px);\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]:nth-of-type(2n+1)    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(-20px);\r\n}\r\n\r\n#c-4[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(10px);\r\n}\r\n\r\n#c-5[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(25px);\r\n}\r\n\r\n#d-1[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-50deg) translate(-25px);\r\n}\r\n\r\n#d-2[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-70deg) translate(-25px);\r\n}\r\n\r\n#d-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-90deg) translate(-25px);\r\n}\r\n\r\n#d-4[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-110deg) translate(-25px);\r\n}\r\n\r\n#d-5[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-130deg) translate(-25px);\r\n}\r\n\r\n#e-1[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-40deg) translate(-30px);\r\n}\r\n\r\n#e-2[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-60deg) translate(-30px);\r\n}\r\n\r\n#e-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-80deg) translate(-30px);\r\n}\r\n\r\n#e-4[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-100deg) translate(-30px);\r\n}\r\n\r\n#e-5[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-120deg) translate(-30px);\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2Vycy9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osd0ZBQXdGO0FBQzFGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOzs7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUNBO0VBQ0UsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzTEFBc0w7QUFDeEw7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7O0FBR0EsYUFBYTtBQUNiO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtBQUNaOzs7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsMkNBQTJDO0VBQzNDLHlDQUF5QztFQUN6QyxzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRCIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAvKnJpZ2h0OjEwJTsqL1xyXG59XHJcblxyXG4uZnVsbC13aWR0aC1pbnB1dCAsLnBhc3N3b3JkLWlucHV0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtaW5wdXR7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1JTtcclxufVxyXG5cclxuXHJcbi5sb2dpbi1pbWFnZXtcclxuICBib3JkZXItcmFkaXVzOiAwLjlyZW0gIWltcG9ydGFudDtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTVweCAtM3B4IHJnYmEoMCwwLDAsLjA3KSwgMCAxMHB4IDIwcHggLTJweCByZ2JhKDAsMCwwLC4wNCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ2luLWNhcmR7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNTUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuXHJcblxyXG4udGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBjb2xvcjpncmV5O1xyXG59XHJcbi5sb2dpbiwubG9naW4tZXllc3tcclxuICBmbGV4OjAgMTtcclxuICBib3gtc2hhZG93OiB1bnNldDtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4ubG9naW4tZXllcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbWFnZXMtcGxhdGZvcm0uOTlzdGF0aWMuY29tL0tsRWNtNm5MMnVmZWQybW12c1ZUcWFvZFhHVT0vNTN4NDI6OTY3eDk1Ni81MDB4NTAwL3RvcC9zbWFydC85OWRlc2lnbnMtY29udGVzdHMtYXR0YWNobWVudHMvNjQvNjQ2MDIvYXR0YWNobWVudF82NDYwMjI1OFwiKTtcclxufVxyXG5cclxuLmxvZ2luLWZpZWxke1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuLmxvZ2luLWJ0bntcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NmJlY2YhaW1wb3J0YW50O1xyXG59XHJcblxyXG5zaWduLWluOmZvY3VzLXZpc2libGUge1xyXG4gIGNvbG9yOiAjNzZiZWNmO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAubG9naW4tZmllbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qICAgRVlFUyAgICovXHJcbi5oaXQtYXJlYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uaGl0Ym94IHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG5cclxuXHJcbi5leWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbGVmdDogMjMlO1xyXG4gIHRvcDogMjQlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICM3NmJlY2Y7XHJcbn1cclxuXHJcbi5leWUgKyAuZXllIHtcclxuICBsZWZ0OiA1MiU7XHJcbn1cclxuXHJcbi5wdXBpbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxufVxyXG5cclxuLmV5ZWxpZCB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgIzc2YmVjZjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2YmVjZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjMlO1xyXG4gIHRvcDogMjQlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJsaW5rO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0LjVzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG59XHJcblxyXG4uZXllbGlkICsgLmV5ZWxpZCB7XHJcbiAgbGVmdDogNTIlO1xyXG59XHJcblxyXG4uaGl0Ym94OmhvdmVyIH4gLmV5ZWxpZCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG59XHJcblxyXG4uaGl0Ym94OmhvdmVyIH4gLmV5ZWxpZDpudGgtb2YtdHlwZSgybisxKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XHJcbn1cclxuXHJcbiNjLTM6aG92ZXIgfiAuZXllbGlkIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogIHJvdGF0ZSgxNWRlZyk7XHJcbn1cclxuXHJcbiNjLTM6aG92ZXIgfiAuZXllbGlkOm50aC1vZi10eXBlKDJuKzEpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbn1cclxuXHJcbiNjLTM6aG92ZXIgfiAuZXllIC5wdXBpbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4jYS0xOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZykgdHJhbnNsYXRlKC0zMHB4KTtcclxufVxyXG5cclxuI2EtMjpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoODBkZWcpIHRyYW5zbGF0ZSgtMzBweCk7XHJcbn1cclxuXHJcbiNhLTM6aG92ZXIgfiAuZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoLTMwcHgpO1xyXG59XHJcblxyXG4jYS00OmhvdmVyIH4uZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwMGRlZykgdHJhbnNsYXRlKC0zMHB4KTtcclxufVxyXG5cclxuI2EtNTpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKSB0cmFuc2xhdGUoLTMwcHgpO1xyXG59XHJcblxyXG4jYi0xOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1MGRlZykgdHJhbnNsYXRlKC0yNXB4KTtcclxufVxyXG5cclxuI2ItMjpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzBkZWcpIHRyYW5zbGF0ZSgtMjVweCk7XHJcbn1cclxuXHJcbiNiLTM6aG92ZXIgfiAuZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoLTI1cHgpO1xyXG59XHJcblxyXG4jYi00OmhvdmVyIH4uZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDExMGRlZykgdHJhbnNsYXRlKC0yNXB4KTtcclxufVxyXG5cclxuI2ItNTpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKSB0cmFuc2xhdGUoLTI1cHgpO1xyXG59XHJcblxyXG4jYy0xOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoLTI1cHgpO1xyXG59XHJcblxyXG4jYy0yOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoLTEwcHgpO1xyXG59XHJcblxyXG4jYy0zOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoMjBweCk7XHJcbn1cclxuXHJcbiNjLTM6aG92ZXIgfiAuZXllOm50aC1vZi10eXBlKDJuKzEpID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZSgtMjBweCk7XHJcbn1cclxuXHJcbiNjLTQ6aG92ZXIgfi5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgdHJhbnNsYXRlKDEwcHgpO1xyXG59XHJcblxyXG4jYy01OmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoMjVweCk7XHJcbn1cclxuXHJcbiNkLTE6aG92ZXIgfiAuZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC01MGRlZykgdHJhbnNsYXRlKC0yNXB4KTtcclxufVxyXG5cclxuI2QtMjpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTcwZGVnKSB0cmFuc2xhdGUoLTI1cHgpO1xyXG59XHJcblxyXG4jZC0zOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZSgtMjVweCk7XHJcbn1cclxuXHJcbiNkLTQ6aG92ZXIgfi5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTExMGRlZykgdHJhbnNsYXRlKC0yNXB4KTtcclxufVxyXG5cclxuI2QtNTpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZykgdHJhbnNsYXRlKC0yNXB4KTtcclxufVxyXG5cclxuI2UtMTpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKSB0cmFuc2xhdGUoLTMwcHgpO1xyXG59XHJcblxyXG4jZS0yOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpIHRyYW5zbGF0ZSgtMzBweCk7XHJcbn1cclxuXHJcbiNlLTM6aG92ZXIgfiAuZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC04MGRlZykgdHJhbnNsYXRlKC0zMHB4KTtcclxufVxyXG5cclxuI2UtNDpob3ZlciB+LmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTAwZGVnKSB0cmFuc2xhdGUoLTMwcHgpO1xyXG59XHJcblxyXG4jZS01OmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKSB0cmFuc2xhdGUoLTMwcHgpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 128:
/*!***************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteUserDialog": () => (/* binding */ DeleteUserDialog),
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _services_users_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/users/authentication.service */ 3317);
/* harmony import */ var _services_tasks_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/tasks/task.service */ 9145);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ 3574);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 6297);

















function ProfileComponent_h2_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Account Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_h2_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Edit Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_mat_hint_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", (_r2.value == null ? null : _r2.value.length) || 0, "/10");
  }
}
function ProfileComponent_mat_error_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Minimum Required characters ", (_r2.value == null ? null : _r2.value.length) || 0, "/5 ");
  }
}
function ProfileComponent_mat_error_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please provide a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_mat_error_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Minimum 8 chars in total.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_mat_error_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * At least two letters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_mat_error_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * At least two digits or symbols.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_79_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Passwords do not Match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Confirm Password: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_79_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.hide2 = !ctx_r17.hide2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProfileComponent_div_79_mat_error_9_Template, 2, 0, "mat-error", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r10.hide2 ? "password" : "text")("readonly", !ctx_r10.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r10.hide2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.hide2 ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.edit);
  }
}
function ProfileComponent_button_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_button_81_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.editUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r11.disabled || !ctx_r11.user.valid);
  }
}
function ProfileComponent_mat_error_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Changes!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_button_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_button_84_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.logOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Log Off");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_button_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_button_85_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Delete User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = ".overview[_ngcontent-%COMP%] {\r\n  margin-left: 10%;\r\n\r\n}\r\n\r\n.edit-profile[_ngcontent-%COMP%]{\r\n  width: 80px;\r\n  filter: hue-rotate(200deg);\r\n}\r\n\r\nmat-grid-tile[_ngcontent-%COMP%] {\r\n  overflow: visible;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  background-color: #eee!important;\r\n  color: grey!important;\r\n  justify-content: center;\r\n  padding: 40px!important;\r\n  font-size: 6em;\r\n  font-weight: bolder!important;\r\n}\r\n\r\n.progress[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.task-id[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n  font-size: 27px;\r\n  font-weight: bold;\r\n  color: #76becf;\r\n  text-shadow: grey 1px 0 1px;\r\n}\r\n\r\n.delete-message[_ngcontent-%COMP%] {\r\n  margin-top:15px;\r\n  font-size: 30px;\r\n}\r\n\r\n.add-buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.password-input[_ngcontent-%COMP%]{\r\n  padding-bottom: 20%;\r\n}\r\n\r\n.show[_ngcontent-%COMP%]{\r\n  margin-top: 0;\r\n}\r\n\r\n.delete-btn[_ngcontent-%COMP%] {\r\n  background-color: darkred;\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%]{\r\n  background-color: #76becf!important;\r\n}\r\n\r\n.leave[_ngcontent-%COMP%]{\r\n  background-color: grey;\r\n}\r\n\r\n.leave[_ngcontent-%COMP%], .delete-btn[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 20px;\r\n  margin-bottom: 20px;\r\n  margin-top:0;\r\n}\r\n\r\n.overview[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/avatar.png\");\r\n  background-size: 600px;\r\n  background-repeat: no-repeat;\r\n  background-position-y: -80px;\r\n  background-position-x: -50px;\r\n  margin-top: 20%;\r\n  border-top-right-radius: 100px;\r\n  border-top-left-radius: 100px;\r\n  filter: hue-rotate(-10deg);\r\n}\r\n\r\n\r\n.hit-area[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 500px;\r\n  height: 500px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.hitbox[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 100px;\r\n  float:left;\r\n}\r\n\r\n\r\n\r\n.eye[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  left: 23%;\r\n  top: 24%;\r\n  background-color: white;\r\n  pointer-events: none;\r\n  border: 3px solid #34a9df;\r\n}\r\n\r\n.eye[_ngcontent-%COMP%]    + .eye[_ngcontent-%COMP%] {\r\n  left: 55%;\r\n}\r\n\r\n.pupil[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  background-color: grey;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin-left: -10px;\r\n  margin-top: -10px;\r\n  transition: all .5s ease;\r\n}\r\n\r\n.eyelid[_ngcontent-%COMP%] {\r\n  border: 5px solid #34a9df;\r\n  border-radius: 100%;\r\n  width: 100px;\r\n  height: 20px;\r\n  background-color: #34a9df;\r\n  position: absolute;\r\n  left: 23%;\r\n  top: 24%;\r\n  pointer-events: none;\r\n  -webkit-animation-name: blink;\r\n  -webkit-animation-duration: 4.5s;\r\n  -webkit-animation-iteration-count: infinite;\r\n  -webkit-animation-timing-function: linear;\r\n  -webkit-animation-direction: alternate;\r\n  -webkit-animation-delay: 1s;\r\n  -webkit-transition: all .5s ease;\r\n}\r\n\r\n.eyelid[_ngcontent-%COMP%]    + .eyelid[_ngcontent-%COMP%] {\r\n  left: 54.5%;\r\n}\r\n\r\n.hitbox[_ngcontent-%COMP%]:hover    ~ .eyelid[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-10deg);\r\n}\r\n\r\n.hitbox[_ngcontent-%COMP%]:hover    ~ .eyelid[_ngcontent-%COMP%]:nth-of-type(2n+1) {\r\n  -webkit-transform: rotate(10deg);\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eyelid[_ngcontent-%COMP%] {\r\n  -webkit-transform:  rotate(15deg);\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eyelid[_ngcontent-%COMP%]:nth-of-type(2n+1) {\r\n  -webkit-transform: rotate(-15deg);\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]   .pupil[_ngcontent-%COMP%] {\r\n  background-color: red;\r\n}\r\n\r\n#a-1[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(60deg) translate(-30px);\r\n}\r\n\r\n#a-2[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(80deg) translate(-30px);\r\n}\r\n\r\n#a-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(90deg) translate(-30px);\r\n}\r\n\r\n#a-4[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(100deg) translate(-30px);\r\n}\r\n\r\n#a-5[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(120deg) translate(-30px);\r\n}\r\n\r\n#b-1[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(50deg) translate(-25px);\r\n}\r\n\r\n#b-2[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(70deg) translate(-25px);\r\n}\r\n\r\n#b-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(90deg) translate(-25px);\r\n}\r\n\r\n#b-4[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(110deg) translate(-25px);\r\n}\r\n\r\n#b-5[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(130deg) translate(-25px);\r\n}\r\n\r\n#c-1[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(-25px);\r\n}\r\n\r\n#c-2[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(-10px);\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(20px);\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]:nth-of-type(2n+1)    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(-20px);\r\n}\r\n\r\n#c-4[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(10px);\r\n}\r\n\r\n#c-5[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(25px);\r\n}\r\n\r\n#d-1[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-50deg) translate(-25px);\r\n}\r\n\r\n#d-2[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-70deg) translate(-25px);\r\n}\r\n\r\n#d-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-90deg) translate(-25px);\r\n}\r\n\r\n#d-4[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-110deg) translate(-25px);\r\n}\r\n\r\n#d-5[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-130deg) translate(-25px);\r\n}\r\n\r\n#e-1[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-40deg) translate(-30px);\r\n}\r\n\r\n#e-2[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-60deg) translate(-30px);\r\n}\r\n\r\n#e-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-80deg) translate(-30px);\r\n}\r\n\r\n#e-4[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-100deg) translate(-30px);\r\n}\r\n\r\n#e-5[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-120deg) translate(-30px);\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2Vycy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QiwwQkFBMEI7QUFDNUI7O0FBRUEsYUFBYTtBQUNiO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtBQUNaOzs7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsMkNBQTJDO0VBQzNDLHlDQUF5QztFQUN6QyxzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRCIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVydmlldyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuXHJcbn1cclxuXHJcbi5lZGl0LXByb2ZpbGV7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgZmlsdGVyOiBodWUtcm90YXRlKDIwMGRlZyk7XHJcbn1cclxuXHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlIWltcG9ydGFudDtcclxuICBjb2xvcjogZ3JleSFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDBweCFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiA2ZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlciFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzc3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWlkIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNzZiZWNmO1xyXG4gIHRleHQtc2hhZG93OiBncmV5IDFweCAwIDFweDtcclxufVxyXG5cclxuLmRlbGV0ZS1tZXNzYWdlIHtcclxuICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5wYXNzd29yZC1pbnB1dHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjAlO1xyXG59XHJcblxyXG4uc2hvd3tcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcclxufVxyXG5cclxuLmxvZ2luLWJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzZiZWNmIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxlYXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5sZWF2ZSwgLmRlbGV0ZS1idG4ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbi5vdmVydmlldyBtYXQtY2FyZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2F2YXRhci5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA2MDBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTgwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtNTBweDtcclxuICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMHB4O1xyXG4gIGZpbHRlcjogaHVlLXJvdGF0ZSgtMTBkZWcpO1xyXG59XHJcblxyXG4vKiAgIEVZRVMgICAqL1xyXG4uaGl0LWFyZWEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmhpdGJveCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgZmxvYXQ6bGVmdDtcclxufVxyXG5cclxuXHJcblxyXG4uZXllIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGxlZnQ6IDIzJTtcclxuICB0b3A6IDI0JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMzRhOWRmO1xyXG59XHJcblxyXG4uZXllICsgLmV5ZSB7XHJcbiAgbGVmdDogNTUlO1xyXG59XHJcblxyXG4ucHVwaWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5leWVsaWQge1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICMzNGE5ZGY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNGE5ZGY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDIzJTtcclxuICB0b3A6IDI0JTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBibGluaztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNC41cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxufVxyXG5cclxuLmV5ZWxpZCArIC5leWVsaWQge1xyXG4gIGxlZnQ6IDU0LjUlO1xyXG59XHJcblxyXG4uaGl0Ym94OmhvdmVyIH4gLmV5ZWxpZCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG59XHJcblxyXG4uaGl0Ym94OmhvdmVyIH4gLmV5ZWxpZDpudGgtb2YtdHlwZSgybisxKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XHJcbn1cclxuXHJcbiNjLTM6aG92ZXIgfiAuZXllbGlkIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogIHJvdGF0ZSgxNWRlZyk7XHJcbn1cclxuXHJcbiNjLTM6aG92ZXIgfiAuZXllbGlkOm50aC1vZi10eXBlKDJuKzEpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbn1cclxuXHJcbiNjLTM6aG92ZXIgfiAuZXllIC5wdXBpbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4jYS0xOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZykgdHJhbnNsYXRlKC0zMHB4KTtcclxufVxyXG5cclxuI2EtMjpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoODBkZWcpIHRyYW5zbGF0ZSgtMzBweCk7XHJcbn1cclxuXHJcbiNhLTM6aG92ZXIgfiAuZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoLTMwcHgpO1xyXG59XHJcblxyXG4jYS00OmhvdmVyIH4uZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwMGRlZykgdHJhbnNsYXRlKC0zMHB4KTtcclxufVxyXG5cclxuI2EtNTpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKSB0cmFuc2xhdGUoLTMwcHgpO1xyXG59XHJcblxyXG4jYi0xOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1MGRlZykgdHJhbnNsYXRlKC0yNXB4KTtcclxufVxyXG5cclxuI2ItMjpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzBkZWcpIHRyYW5zbGF0ZSgtMjVweCk7XHJcbn1cclxuXHJcbiNiLTM6aG92ZXIgfiAuZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoLTI1cHgpO1xyXG59XHJcblxyXG4jYi00OmhvdmVyIH4uZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDExMGRlZykgdHJhbnNsYXRlKC0yNXB4KTtcclxufVxyXG5cclxuI2ItNTpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKSB0cmFuc2xhdGUoLTI1cHgpO1xyXG59XHJcblxyXG4jYy0xOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoLTI1cHgpO1xyXG59XHJcblxyXG4jYy0yOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoLTEwcHgpO1xyXG59XHJcblxyXG4jYy0zOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoMjBweCk7XHJcbn1cclxuXHJcbiNjLTM6aG92ZXIgfiAuZXllOm50aC1vZi10eXBlKDJuKzEpID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZSgtMjBweCk7XHJcbn1cclxuXHJcbiNjLTQ6aG92ZXIgfi5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgdHJhbnNsYXRlKDEwcHgpO1xyXG59XHJcblxyXG4jYy01OmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoMjVweCk7XHJcbn1cclxuXHJcbiNkLTE6aG92ZXIgfiAuZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC01MGRlZykgdHJhbnNsYXRlKC0yNXB4KTtcclxufVxyXG5cclxuI2QtMjpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTcwZGVnKSB0cmFuc2xhdGUoLTI1cHgpO1xyXG59XHJcblxyXG4jZC0zOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZSgtMjVweCk7XHJcbn1cclxuXHJcbiNkLTQ6aG92ZXIgfi5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTExMGRlZykgdHJhbnNsYXRlKC0yNXB4KTtcclxufVxyXG5cclxuI2QtNTpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZykgdHJhbnNsYXRlKC0yNXB4KTtcclxufVxyXG5cclxuI2UtMTpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKSB0cmFuc2xhdGUoLTMwcHgpO1xyXG59XHJcblxyXG4jZS0yOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpIHRyYW5zbGF0ZSgtMzBweCk7XHJcbn1cclxuXHJcbiNlLTM6aG92ZXIgfiAuZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC04MGRlZykgdHJhbnNsYXRlKC0zMHB4KTtcclxufVxyXG5cclxuI2UtNDpob3ZlciB+LmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTAwZGVnKSB0cmFuc2xhdGUoLTMwcHgpO1xyXG59XHJcblxyXG4jZS01OmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKSB0cmFuc2xhdGUoLTMwcHgpO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */";
class ProfileComponent {
  constructor(_authenticationService, _taskService, _router, dialog) {
    this._authenticationService = _authenticationService;
    this._taskService = _taskService;
    this._router = _router;
    this.dialog = dialog;
    this.edit = false;
    this.disabled = false;
    this.hide1 = true;
    this.hide2 = true;
    this.username = '';
    this.email = '';
    this.password = '';
    this.todo = [];
    this.inProgress = [];
    this.done = [];
    this.allTasks = [];
    this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.username, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[^\\.\\s][\\w\\-]+(\\.[\\w\\-]+)*@([\\w-]+\\.)+[\\w-]{2,}$')),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.password, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(?=.*[a-z].*[a-z])(?=.*[!"#...\\d].*[!"#...\\d]).{8,}$')),
      confirmedPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.password, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
    });
  }
  ngOnInit() {
    this.username = localStorage.getItem("cashedUsername");
    this.email = localStorage.getItem("cashedEmail");
    this.password = localStorage.getItem("cashedPassword");
    this.getAllTasks();
    this.getUser();
  }
  enableEdit() {
    this.edit = !this.edit;
  }
  getUser() {
    this.isUpdated = this._authenticationService.get(this.user.value.email).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(result => {
      this.userP = result;
    });
  }
  getAllTasks() {
    this.getTasks = this._taskService.getAll().subscribe(data => {
      this.allTasks = data.filter(d => d.username == this.username);
      this.todo = data.filter(d => d.status == 'TO DO' && d.username == this.username);
      this.inProgress = data.filter(d => d.status == 'DOING' && d.username == this.username);
      this.done = data.filter(d => d.status == 'DONE' && d.username == this.username);
    });
  }
  editUser() {
    if (this.user.valid) {
      this.updateUser = this._authenticationService.create(this.user.value).subscribe(res => {
        localStorage.setItem("cashedUsername", res.userName);
        localStorage.setItem("cashedEmail", res.email);
        localStorage.setItem("cashedPassword", res.password);
        this.username = res.userName;
        this.email = res.email;
        this.password = res.password;
        window.location.reload();
      });
    }
  }
  isDiff() {
    this.isUpdated = this._authenticationService.get(this.user.value.email).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(result => {
      this.disabled = result.userName !== this.username || result.email !== this.email || result.password !== this.password;
    });
  }
  logOut() {
    localStorage.setItem("cashedUsername", "");
    this._router.navigateByUrl(`/home`);
  }
  remove() {
    this.dialog.open(DeleteUserDialog, {
      disableClose: true,
      data: this.userP
    }).afterOpened().subscribe(() => {
      console.log(this.userP);
    });
  }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_users_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_tasks_task_service__WEBPACK_IMPORTED_MODULE_1__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["profile"]],
  decls: 113,
  vars: 33,
  consts: [[1, "profile"], [1, "profile-content"], ["cols", "2", "rowHeight", "2:1.5", 1, "content"], [1, "overview"], [1, "mat-headline-3", "header"], [1, "hit-area"], ["id", "a-1", 1, "hitbox"], ["id", "a-2", 1, "hitbox"], ["id", "a-3", 1, "hitbox"], ["id", "a-4", 1, "hitbox"], ["id", "a-5", 1, "hitbox"], ["id", "b-1", 1, "hitbox"], ["id", "b-2", 1, "hitbox"], ["id", "b-3", 1, "hitbox"], ["id", "b-4", 1, "hitbox"], ["id", "b-5", 1, "hitbox"], ["id", "c-1", 1, "hitbox"], ["id", "c-2", 1, "hitbox"], ["id", "c-3", 1, "hitbox"], ["mat-button", "", 3, "click"], ["alt", "", "src", "/assets/nose.jpeg", 1, "edit-profile"], [2, "text-align", "center", "margin-right", "8px", "color", "red"], ["id", "c-4", 1, "hitbox"], ["id", "c-5", 1, "hitbox"], ["id", "d-1", 1, "hitbox"], ["id", "d-2", 1, "hitbox"], ["id", "d-3", 1, "hitbox"], ["id", "d-4", 1, "hitbox"], ["id", "d-5", 1, "hitbox"], ["id", "e-1", 1, "hitbox"], ["id", "e-2", 1, "hitbox"], ["id", "e-3", 1, "hitbox"], ["id", "e-4", 1, "hitbox"], ["id", "e-5", 1, "hitbox"], [1, "eye"], [1, "pupil"], [1, "eyelid"], [1, "login"], [1, "login-card"], [1, "login-field"], [1, "sign-form", 3, "formGroup", "change"], ["class", "title", 4, "ngIf"], [1, "full-width-input"], ["matInput", "", "placeholder", "Username", "maxlength", "10", "formControlName", "userName", "required", "", 3, "readonly", "ngModel", "ngModelChange"], ["userName", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "required", "", 3, "readonly", "ngModel", "ngModelChange"], [1, "password-input"], ["matInput", "", "type", "password", "placeholder", "************", "formControlName", "password", "required", "", 3, "type", "readonly", "ngModel", "ngModelChange"], ["firstPassword", ""], ["mat-icon-button", "", "matSuffix", "", 1, "show", 3, "click"], [2, "display", "flex", "justify-content", "space-between"], ["type", "submit", "class", "login-btn", "mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["style", "padding-top: 25px;", 4, "ngIf"], ["type", "submit", "mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["cols", "1", "rowHeight", "2:1"], [1, "info"], ["cols", "3", "rowHeight", "2:1"], ["color", "warn", "mode", "determinate", 3, "value"], [1, "progress"], [1, "title"], ["matInput", "", "show-hide-input", "", "type", "password", "placeholder", "************", "formControlName", "confirmedPassword", 3, "type", "readonly"], ["secondPassword", ""], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "login-btn", 3, "disabled", "click"], [2, "padding-top", "25px"], ["type", "submit", "mat-raised-button", "", "color", "warn", 3, "click"], [1, "top-icon"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-grid-list", 2)(3, "mat-grid-tile", 3)(4, "mat-grid-tile-header", 4)(5, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card")(8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 18)(22, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_22_listener() {
        return ctx.enableEdit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 21)(25, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "keyboard_arrow_up");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "div", 22)(28, "div", 23)(29, "div", 24)(30, "div", 25)(31, "div", 26)(32, "div", 27)(33, "div", 28)(34, "div", 29)(35, "div", 30)(36, "div", 31)(37, "div", 32)(38, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "div", 36)(44, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-grid-tile")(46, "div")(47, "mat-card", 37)(48, "div", 38)(49, "mat-card-content", 39)(50, "form", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProfileComponent_Template_form_change_50_listener() {
        return ctx.isDiff();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, ProfileComponent_h2_51_Template, 2, 0, "h2", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, ProfileComponent_h2_52_Template, 2, 0, "h2", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div")(54, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Username: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "mat-form-field", 42)(57, "input", 43, 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_57_listener($event) {
        return ctx.username = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, ProfileComponent_mat_hint_59_Template, 2, 1, "mat-hint", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, ProfileComponent_mat_error_60_Template, 2, 1, "mat-error", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div")(62, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Email: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "mat-form-field", 42)(65, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_65_listener($event) {
        return ctx.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, ProfileComponent_mat_error_66_Template, 2, 0, "mat-error", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div")(68, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Password: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "mat-form-field", 47)(71, "input", 48, 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_71_listener($event) {
        return ctx.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_73_listener() {
        return ctx.hide1 = !ctx.hide1;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, ProfileComponent_mat_error_76_Template, 2, 0, "mat-error", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, ProfileComponent_mat_error_77_Template, 2, 0, "mat-error", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, ProfileComponent_mat_error_78_Template, 2, 0, "mat-error", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, ProfileComponent_div_79_Template, 10, 6, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, ProfileComponent_button_81_Template, 2, 1, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, ProfileComponent_mat_error_82_Template, 2, 0, "mat-error", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](84, ProfileComponent_button_84_Template, 4, 0, "button", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, ProfileComponent_button_85_Template, 4, 0, "button", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "mat-grid-list", 55)(87, "mat-card", 56)(88, "mat-grid-list", 57)(89, "mat-grid-tile")(90, "div")(91, "mat-card-title")(92, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Tasks To Do");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "mat-progress-bar", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "mat-card-content", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "mat-grid-tile")(98, "div")(99, "mat-card-title")(100, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Tasks in Progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "mat-progress-bar", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "mat-card-content", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "mat-grid-tile")(106, "div")(107, "mat-card-title")(108, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Finished Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "mat-progress-bar", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "mat-card-content", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.user);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx.edit)("ngModel", ctx.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx.edit)("ngModel", ctx.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide1 ? "password" : "text")("readonly", !ctx.edit)("ngModel", ctx.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide1 ? "visibility_off" : "visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.disabled && ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.edit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.todo.length / ctx.allTasks.length * 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.todo.length, " out of ", ctx.allTasks.length, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.inProgress.length / ctx.allTasks.length * 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.inProgress.length, " out of ", ctx.allTasks.length, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.done.length / ctx.allTasks.length * 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.done.length, " out of ", ctx.allTasks.length, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridTile, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridTileText, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridTileHeaderCssMatStyler, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBar],
  styles: [_c0]
});

class DeleteUserDialog {
  constructor(dialogRef, data, _authenticationService, _router) {
    this.dialogRef = dialogRef;
    this.data = data;
    this._authenticationService = _authenticationService;
    this._router = _router;
  }
  onConfirm() {
    this.deleteUser = this._authenticationService.delete(this.data.id).subscribe(res => {
      console.log('User Deleted!', res);
      localStorage.setItem("cashedUsername", "");
      this._router.navigateByUrl(`/home`);
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
DeleteUserDialog.ɵfac = function DeleteUserDialog_Factory(t) {
  return new (t || DeleteUserDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_users_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
DeleteUserDialog.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DeleteUserDialog,
  selectors: [["delete-user-dialog"]],
  decls: 11,
  vars: 1,
  consts: [["mat-dialog-title", "", 1, "task-id"], ["mat-dialog-content", ""], [1, "delete-message"], ["mat-dialog-actions", "", 1, "add-buttons"], ["mat-button", "", 1, "delete-btn", 3, "click"], ["mat-button", "", 1, "leave", 3, "click"]],
  template: function DeleteUserDialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Are you sure you want to delete your account?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeleteUserDialog_Template_button_click_7_listener() {
        return ctx.onConfirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Delete Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeleteUserDialog_Template_button_click_9_listener() {
        return ctx.onNoClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Go Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Deleting User ", ctx.data.userName, "");
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions],
  styles: [_c0]
});


/***/ }),

/***/ 1254:
/*!***************************************************************!*\
  !*** ./src/app/components/users/sign-in/sign-in.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _services_users_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/users/authentication.service */ 3317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _services_tasks_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/tasks/task.service */ 9145);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 9941);













function SignInComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please provide a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SignInComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email Already Exists ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class SignInComponent {
  constructor(_authenticationService, _router, _taskService) {
    this._authenticationService = _authenticationService;
    this._router = _router;
    this._taskService = _taskService;
    this.hide1 = true;
    this.hide2 = true;
    this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    //form definition & input validation
    this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[^\\.\\s][\\w\\-]+(\\.[\\w\\-]+)*@([\\w-]+\\.)+[\\w-]{2,}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(?=.*[a-z].*[a-z])(?=.*[!"#...\\d].*[!"#...\\d]).{8,}$')),
      confirmedPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
    }, {
      validators: [this.userExists('email'), this.matchValidator('password', 'confirmedPassword')]
    });
    this.alreadyExists = false;
  }
  matchValidator(controlName, matchingControlName) {
    return abstractControl => {
      const control = abstractControl.get(controlName);
      const matchingControl = abstractControl.get(matchingControlName);
      if (matchingControl.errors && !matchingControl.errors?.['confirmedValidator']) {
        return null;
      }
      if (control.value !== matchingControl.value) {
        const error = {
          confirmedValidator: 'Passwords do not match.'
        };
        matchingControl.setErrors(error);
        return error;
      } else {
        matchingControl.setErrors(null);
        return null;
      }
    };
  }
  userExists(controlName) {
    return abstractControl => {
      const control = abstractControl.get(controlName);
      if (control.errors && !control.errors?.['existsValidator']) {
        return null;
      }
      if (this.alreadyExists) {
        const error = {
          existsValidator: 'Email already Exists.'
        };
        control.setErrors(error);
        return error;
      } else {
        control.setErrors(null);
        return null;
      }
    };
  }
  retrieve() {
    this.getUser = this._authenticationService.get(this.user.value.email).subscribe(res => {
      this.alreadyExists = res != undefined;
      console.log(this.alreadyExists);
    });
  }
  onSubmit() {
    if (this.user.valid && !this.alreadyExists) {
      this.createUser = this._authenticationService.create(this.user.value).subscribe(res => {
        this.loggedIn.emit(this.user.value);
      });
    }
  }
  ngOnDestroy() {
    if (this.createUser) {
      this.createUser.unsubscribe();
    }
    // this.getTasks.unsubscribe();
  }

  ngOnInit() {}
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) {
  return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_users_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_tasks_task_service__WEBPACK_IMPORTED_MODULE_1__.TaskService));
};
SignInComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SignInComponent,
  selectors: [["sign-in"]],
  outputs: {
    loggedIn: "loggedIn"
  },
  decls: 52,
  vars: 14,
  consts: [[1, "login-container"], [1, "login"], [1, "login-card"], [1, "login-field"], [1, "sign-form", 3, "formGroup", "change"], [1, "title"], [1, "full-width-input"], ["matInput", "", "placeholder", "Username", "maxlength", "10", "formControlName", "userName", "required", ""], ["userName", ""], ["matInput", "", "placeholder", "Email", "formControlName", "email", "required", ""], [4, "ngIf"], [1, "password-input"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "password", "required", "", 3, "type"], ["firstPassword", ""], ["mat-icon-button", "", "matSuffix", "", 1, "show", 3, "click"], ["matInput", "", "type", "password", "placeholder", "Confirm Password", "formControlName", "confirmedPassword", "required", "", 3, "type"], ["secondPassword", ""], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "login-btn", 3, "disabled", "click"]],
  template: function SignInComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "mat-card-content", 3)(4, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SignInComponent_Template_form_change_4_listener() {
        return ctx.retrieve();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Sign In");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Username: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div")(18, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Email: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SignInComponent_mat_error_22_Template, 2, 0, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SignInComponent_mat_error_23_Template, 2, 0, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div")(25, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Password: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_30_listener() {
        return ctx.hide1 = !ctx.hide1;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " * Minimum 8 chars in total.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " * At least two letters.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " * At least two digits or symbols.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div")(40, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Confirm Password: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_45_listener() {
        return ctx.hide2 = !ctx.hide2;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Passwords do not Match ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_50_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Create Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.user);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", (_r0.value == null ? null : _r0.value.length) || 0, "/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Minimum Required characters ", (_r0.value == null ? null : _r0.value.length) || 0, "/5 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.alreadyExists);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alreadyExists);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide1 ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide1 ? "visibility_off" : "visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide2 ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide2 ? "visibility_off" : "visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.user.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon],
  styles: [".glasses[_ngcontent-%COMP%] {\r\n  z-index: 1;\r\n  position: absolute;\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  left: 23%;\r\n  top: 24%;\r\n  background-image: linear-gradient(black, grey);\r\n  pointer-events: none;\r\n  border: 3px solid black;\r\n}\r\n\r\n.glasses[_ngcontent-%COMP%]    + .glasses[_ngcontent-%COMP%] {\r\n  left: 52%;\r\n}\r\n\r\n.middle-temple[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 200px;\r\n  height: 10px;\r\n  left: 27%;\r\n  top: 34%;\r\n  background-color: black;\r\n  pointer-events: none;\r\n}\r\n\r\n.login-card[_ngcontent-%COMP%]{\r\n  overflow: visible;\r\n}\r\n\r\n.temple[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 200px;\r\n  height: 10px;\r\n  top: 34%;\r\n  -webkit-transform:  rotate(-5deg);\r\n  background-color: black;\r\n  pointer-events: none;\r\n}\r\n\r\n.temple[_ngcontent-%COMP%]    + .temple[_ngcontent-%COMP%] {\r\n  -webkit-transform:  rotate(5deg);\r\n  left: 60%;\r\n}\r\n\r\n.sign-form[_ngcontent-%COMP%]{\r\n}\r\n\r\n.show[_ngcontent-%COMP%]{\r\n  margin-top: 0;\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]   .pupil[_ngcontent-%COMP%] {\r\n  z-index: 2;\r\n  box-shadow: 10px 10px 5px darkred inset;\r\n  mix-blend-mode: darken;\r\n  background-color: red;\r\n}\r\n.login-card[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/avatar.png\")!important;\r\n  background-size: 250px!important;\r\n  background-blend-mode: lighten;\r\n  width: 500px;\r\n  background: hsla(0, 0%, 100%, 0.55);\r\n  -webkit-backdrop-filter: blur(10px)!important;\r\n          backdrop-filter: blur(10px)!important;\r\n  border-radius: 10px;\r\n  margin-top:-50px!important;\r\n}\r\n.login-eyes[_ngcontent-%COMP%] {\r\n\r\n  height: 100%;\r\n  justify-content: center;\r\n  filter: blur(1px);\r\n  -webkit-filter: blur(1px);\r\n}\r\n\r\n.pupil[_ngcontent-%COMP%] {\r\n  z-index: 2;\r\n  box-shadow: 10px 10px 5px darkred inset;\r\n  mix-blend-mode: darken;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  background-color: grey;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin-left: -10px;\r\n  transition: all .5s ease;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2Vycy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLDhDQUE4QztFQUM5QyxvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osUUFBUTtFQUNSLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFNBQVM7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVDQUF1QztFQUN2QyxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxREFBcUQ7RUFDckQsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLDZDQUFxQztVQUFyQyxxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1QjtBQUNBOztFQUVFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix1Q0FBdUM7RUFDdkMsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5nbGFzc2VzIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbGVmdDogMjMlO1xyXG4gIHRvcDogMjQlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChibGFjaywgZ3JleSk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5nbGFzc2VzICsgLmdsYXNzZXMge1xyXG4gIGxlZnQ6IDUyJTtcclxufVxyXG5cclxuLm1pZGRsZS10ZW1wbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGxlZnQ6IDI3JTtcclxuICB0b3A6IDM0JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmxvZ2luLWNhcmR7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbi50ZW1wbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIHRvcDogMzQlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiAgcm90YXRlKC01ZGVnKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnRlbXBsZSArIC50ZW1wbGUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiAgcm90YXRlKDVkZWcpO1xyXG4gIGxlZnQ6IDYwJTtcclxufVxyXG5cclxuLnNpZ24tZm9ybXtcclxufVxyXG5cclxuLnNob3d7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuI2MtMzpob3ZlciB+IC5leWUgLnB1cGlsIHtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggZGFya3JlZCBpbnNldDtcclxuICBtaXgtYmxlbmQtbW9kZTogZGFya2VuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG4ubG9naW4tY2FyZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2F2YXRhci5wbmdcIikhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjUwcHghaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZDogaHNsYSgwLCAwJSwgMTAwJSwgMC41NSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6LTUwcHghaW1wb3J0YW50O1xyXG59XHJcbi5sb2dpbi1leWVzIHtcclxuXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZpbHRlcjogYmx1cigxcHgpO1xyXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDFweCk7XHJcbn1cclxuXHJcbi5wdXBpbCB7XHJcbiAgei1pbmRleDogMjtcclxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IGRhcmtyZWQgaW5zZXQ7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IGRhcmtlbjtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */", ".login-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  vertical-align: center;\r\n  \r\n}\r\n\r\n.full-width-input[_ngcontent-%COMP%], .password-input[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.password-input[_ngcontent-%COMP%]{\r\n  padding-bottom: 15%;\r\n}\r\n\r\n\r\n.login-image[_ngcontent-%COMP%]{\r\n  border-radius: 0.9rem !important;\r\n  width: 500px;\r\n  box-shadow: 0 2px 15px -3px rgba(0,0,0,.07), 0 10px 20px -2px rgba(0,0,0,.04) !important;\r\n}\r\n\r\n.login-card[_ngcontent-%COMP%]{\r\n  width: 500px;\r\n  background: hsla(0, 0%, 100%, 0.55);\r\n  -webkit-backdrop-filter: blur(30px);\r\n          backdrop-filter: blur(30px);\r\n  border-radius: 10px;\r\n  margin-left: -100px;\r\n  margin-top: 30px;\r\n}\r\n\r\n\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  color:grey;\r\n}\r\n.login[_ngcontent-%COMP%], .login-eyes[_ngcontent-%COMP%]{\r\n  flex:0 1;\r\n  box-shadow: unset;\r\n  margin-top: 80px;\r\n}\r\n\r\n.login-eyes[_ngcontent-%COMP%] {\r\n  background-image: url(\"https://images-platform.99static.com/KlEcm6nL2ufed2mmvsVTqaodXGU=/53x42:967x956/500x500/top/smart/99designs-contests-attachments/64/64602/attachment_64602258\");\r\n}\r\n\r\n.login-field[_ngcontent-%COMP%]{\r\n  flex-direction: row;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: -10px;\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin-bottom: 50px;\r\n  background-color: #76becf!important;\r\n}\r\n\r\nsign-in[_ngcontent-%COMP%]:focus-visible {\r\n  color: #76becf;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .login-field[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n  }\r\n}\r\n\r\n\r\n\r\n.hit-area[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 500px;\r\n  height: 500px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.hitbox[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 100px;\r\n  float:left;\r\n}\r\n\r\n\r\n\r\n.eye[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  left: 23%;\r\n  top: 24%;\r\n  background-color: white;\r\n  pointer-events: none;\r\n  border: 3px solid #76becf;\r\n}\r\n\r\n.eye[_ngcontent-%COMP%]    + .eye[_ngcontent-%COMP%] {\r\n  left: 52%;\r\n}\r\n\r\n.pupil[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  background-color: grey;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin-left: -10px;\r\n  margin-top: -10px;\r\n  transition: all .5s ease;\r\n}\r\n\r\n.eyelid[_ngcontent-%COMP%] {\r\n  border: 5px solid #76becf;\r\n  border-radius: 100%;\r\n  width: 100px;\r\n  height: 20px;\r\n  background-color: #76becf;\r\n  position: absolute;\r\n  left: 23%;\r\n  top: 24%;\r\n  pointer-events: none;\r\n  -webkit-animation-name: blink;\r\n  -webkit-animation-duration: 4.5s;\r\n  -webkit-animation-iteration-count: infinite;\r\n  -webkit-animation-timing-function: linear;\r\n  -webkit-animation-direction: alternate;\r\n  -webkit-animation-delay: 1s;\r\n  -webkit-transition: all .5s ease;\r\n}\r\n\r\n.eyelid[_ngcontent-%COMP%]    + .eyelid[_ngcontent-%COMP%] {\r\n  left: 52%;\r\n}\r\n\r\n.hitbox[_ngcontent-%COMP%]:hover    ~ .eyelid[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-10deg);\r\n}\r\n\r\n.hitbox[_ngcontent-%COMP%]:hover    ~ .eyelid[_ngcontent-%COMP%]:nth-of-type(2n+1) {\r\n  -webkit-transform: rotate(10deg);\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eyelid[_ngcontent-%COMP%] {\r\n  -webkit-transform:  rotate(15deg);\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eyelid[_ngcontent-%COMP%]:nth-of-type(2n+1) {\r\n  -webkit-transform: rotate(-15deg);\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]   .pupil[_ngcontent-%COMP%] {\r\n  background-color: red;\r\n}\r\n\r\n#a-1[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(60deg) translate(-30px);\r\n}\r\n\r\n#a-2[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(80deg) translate(-30px);\r\n}\r\n\r\n#a-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(90deg) translate(-30px);\r\n}\r\n\r\n#a-4[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(100deg) translate(-30px);\r\n}\r\n\r\n#a-5[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(120deg) translate(-30px);\r\n}\r\n\r\n#b-1[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(50deg) translate(-25px);\r\n}\r\n\r\n#b-2[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(70deg) translate(-25px);\r\n}\r\n\r\n#b-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(90deg) translate(-25px);\r\n}\r\n\r\n#b-4[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(110deg) translate(-25px);\r\n}\r\n\r\n#b-5[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(130deg) translate(-25px);\r\n}\r\n\r\n#c-1[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(-25px);\r\n}\r\n\r\n#c-2[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(-10px);\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(20px);\r\n}\r\n\r\n#c-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]:nth-of-type(2n+1)    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(-20px);\r\n}\r\n\r\n#c-4[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(10px);\r\n}\r\n\r\n#c-5[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(0deg) translate(25px);\r\n}\r\n\r\n#d-1[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-50deg) translate(-25px);\r\n}\r\n\r\n#d-2[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-70deg) translate(-25px);\r\n}\r\n\r\n#d-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-90deg) translate(-25px);\r\n}\r\n\r\n#d-4[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-110deg) translate(-25px);\r\n}\r\n\r\n#d-5[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-130deg) translate(-25px);\r\n}\r\n\r\n#e-1[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-40deg) translate(-30px);\r\n}\r\n\r\n#e-2[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-60deg) translate(-30px);\r\n}\r\n\r\n#e-3[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-80deg) translate(-30px);\r\n}\r\n\r\n#e-4[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-100deg) translate(-30px);\r\n}\r\n\r\n#e-5[_ngcontent-%COMP%]:hover    ~ .eye[_ngcontent-%COMP%]    > .pupil[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-120deg) translate(-30px);\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2Vycy9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osd0ZBQXdGO0FBQzFGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOzs7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUNBO0VBQ0UsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzTEFBc0w7QUFDeEw7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7O0FBR0EsYUFBYTtBQUNiO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtBQUNaOzs7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsMkNBQTJDO0VBQzNDLHlDQUF5QztFQUN6QyxzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRCIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAvKnJpZ2h0OjEwJTsqL1xyXG59XHJcblxyXG4uZnVsbC13aWR0aC1pbnB1dCAsLnBhc3N3b3JkLWlucHV0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtaW5wdXR7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1JTtcclxufVxyXG5cclxuXHJcbi5sb2dpbi1pbWFnZXtcclxuICBib3JkZXItcmFkaXVzOiAwLjlyZW0gIWltcG9ydGFudDtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTVweCAtM3B4IHJnYmEoMCwwLDAsLjA3KSwgMCAxMHB4IDIwcHggLTJweCByZ2JhKDAsMCwwLC4wNCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ2luLWNhcmR7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNTUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuXHJcblxyXG4udGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBjb2xvcjpncmV5O1xyXG59XHJcbi5sb2dpbiwubG9naW4tZXllc3tcclxuICBmbGV4OjAgMTtcclxuICBib3gtc2hhZG93OiB1bnNldDtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4ubG9naW4tZXllcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbWFnZXMtcGxhdGZvcm0uOTlzdGF0aWMuY29tL0tsRWNtNm5MMnVmZWQybW12c1ZUcWFvZFhHVT0vNTN4NDI6OTY3eDk1Ni81MDB4NTAwL3RvcC9zbWFydC85OWRlc2lnbnMtY29udGVzdHMtYXR0YWNobWVudHMvNjQvNjQ2MDIvYXR0YWNobWVudF82NDYwMjI1OFwiKTtcclxufVxyXG5cclxuLmxvZ2luLWZpZWxke1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuLmxvZ2luLWJ0bntcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NmJlY2YhaW1wb3J0YW50O1xyXG59XHJcblxyXG5zaWduLWluOmZvY3VzLXZpc2libGUge1xyXG4gIGNvbG9yOiAjNzZiZWNmO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAubG9naW4tZmllbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qICAgRVlFUyAgICovXHJcbi5oaXQtYXJlYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uaGl0Ym94IHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG5cclxuXHJcbi5leWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbGVmdDogMjMlO1xyXG4gIHRvcDogMjQlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICM3NmJlY2Y7XHJcbn1cclxuXHJcbi5leWUgKyAuZXllIHtcclxuICBsZWZ0OiA1MiU7XHJcbn1cclxuXHJcbi5wdXBpbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxufVxyXG5cclxuLmV5ZWxpZCB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgIzc2YmVjZjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2YmVjZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjMlO1xyXG4gIHRvcDogMjQlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJsaW5rO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0LjVzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG59XHJcblxyXG4uZXllbGlkICsgLmV5ZWxpZCB7XHJcbiAgbGVmdDogNTIlO1xyXG59XHJcblxyXG4uaGl0Ym94OmhvdmVyIH4gLmV5ZWxpZCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG59XHJcblxyXG4uaGl0Ym94OmhvdmVyIH4gLmV5ZWxpZDpudGgtb2YtdHlwZSgybisxKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XHJcbn1cclxuXHJcbiNjLTM6aG92ZXIgfiAuZXllbGlkIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogIHJvdGF0ZSgxNWRlZyk7XHJcbn1cclxuXHJcbiNjLTM6aG92ZXIgfiAuZXllbGlkOm50aC1vZi10eXBlKDJuKzEpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbn1cclxuXHJcbiNjLTM6aG92ZXIgfiAuZXllIC5wdXBpbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4jYS0xOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZykgdHJhbnNsYXRlKC0zMHB4KTtcclxufVxyXG5cclxuI2EtMjpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoODBkZWcpIHRyYW5zbGF0ZSgtMzBweCk7XHJcbn1cclxuXHJcbiNhLTM6aG92ZXIgfiAuZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoLTMwcHgpO1xyXG59XHJcblxyXG4jYS00OmhvdmVyIH4uZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwMGRlZykgdHJhbnNsYXRlKC0zMHB4KTtcclxufVxyXG5cclxuI2EtNTpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKSB0cmFuc2xhdGUoLTMwcHgpO1xyXG59XHJcblxyXG4jYi0xOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1MGRlZykgdHJhbnNsYXRlKC0yNXB4KTtcclxufVxyXG5cclxuI2ItMjpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzBkZWcpIHRyYW5zbGF0ZSgtMjVweCk7XHJcbn1cclxuXHJcbiNiLTM6aG92ZXIgfiAuZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoLTI1cHgpO1xyXG59XHJcblxyXG4jYi00OmhvdmVyIH4uZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDExMGRlZykgdHJhbnNsYXRlKC0yNXB4KTtcclxufVxyXG5cclxuI2ItNTpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKSB0cmFuc2xhdGUoLTI1cHgpO1xyXG59XHJcblxyXG4jYy0xOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoLTI1cHgpO1xyXG59XHJcblxyXG4jYy0yOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoLTEwcHgpO1xyXG59XHJcblxyXG4jYy0zOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoMjBweCk7XHJcbn1cclxuXHJcbiNjLTM6aG92ZXIgfiAuZXllOm50aC1vZi10eXBlKDJuKzEpID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZSgtMjBweCk7XHJcbn1cclxuXHJcbiNjLTQ6aG92ZXIgfi5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgdHJhbnNsYXRlKDEwcHgpO1xyXG59XHJcblxyXG4jYy01OmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoMjVweCk7XHJcbn1cclxuXHJcbiNkLTE6aG92ZXIgfiAuZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC01MGRlZykgdHJhbnNsYXRlKC0yNXB4KTtcclxufVxyXG5cclxuI2QtMjpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTcwZGVnKSB0cmFuc2xhdGUoLTI1cHgpO1xyXG59XHJcblxyXG4jZC0zOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZSgtMjVweCk7XHJcbn1cclxuXHJcbiNkLTQ6aG92ZXIgfi5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTExMGRlZykgdHJhbnNsYXRlKC0yNXB4KTtcclxufVxyXG5cclxuI2QtNTpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZykgdHJhbnNsYXRlKC0yNXB4KTtcclxufVxyXG5cclxuI2UtMTpob3ZlciB+IC5leWUgPiAucHVwaWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKSB0cmFuc2xhdGUoLTMwcHgpO1xyXG59XHJcblxyXG4jZS0yOmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpIHRyYW5zbGF0ZSgtMzBweCk7XHJcbn1cclxuXHJcbiNlLTM6aG92ZXIgfiAuZXllID4gLnB1cGlsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC04MGRlZykgdHJhbnNsYXRlKC0zMHB4KTtcclxufVxyXG5cclxuI2UtNDpob3ZlciB+LmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTAwZGVnKSB0cmFuc2xhdGUoLTMwcHgpO1xyXG59XHJcblxyXG4jZS01OmhvdmVyIH4gLmV5ZSA+IC5wdXBpbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKSB0cmFuc2xhdGUoLTMwcHgpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 9145:
/*!************************************************!*\
  !*** ./src/app/services/tasks/task.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskService": () => (/* binding */ TaskService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3765);


const headers = {
  'Content-Type': 'application/json'
};
const baseUrl = 'http://localhost:9000/api/tasks';
class TaskService {
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(baseUrl);
  }
  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data) {
    return this.http.post(baseUrl, data);
  }
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data, {
      headers
    });
  }
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll() {
    return this.http.delete(baseUrl);
  }
  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
  findLatest(username) {
    return this.http.put(`${baseUrl}/latest`, username, {
      headers
    });
  }
  findForUser(username) {
    return this.http.put(baseUrl, username, {
      headers
    });
  }
}
TaskService.ɵfac = function TaskService_Factory(t) {
  return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
TaskService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: TaskService,
  factory: TaskService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 3317:
/*!**********************************************************!*\
  !*** ./src/app/services/users/authentication.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3765);


const headers = {
  'Content-Type': 'application/json'
};
const baseUrl = 'http://localhost:9000/api/users';
class AuthenticationService {
  constructor(http) {
    this.http = http;
  }
  get(email) {
    return this.http.get(`${baseUrl}/${email}`);
  }
  create(data) {
    return this.http.post(baseUrl, data);
  }
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data, {
      headers
    });
  }
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
  return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
AuthenticationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AuthenticationService,
  factory: AuthenticationService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map