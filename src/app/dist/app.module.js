"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var emploi_service_1 = require("src/services/emploi.service");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("./app-routing.module");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var emploi_component_1 = require("./emploi/emploi.component");
var emploi1_component_1 = require("./emploi1/emploi1.component");
var animations_1 = require("@angular/platform-browser/animations");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                emploi_component_1.EmploiComponent,
                emploi1_component_1.Emploi1Component
            ],
            imports: [
                platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpClientModule, router_1.RouterModule, FormsModuleRouterModule, CommonModule, animations_1.BrowserAnimationsModule, ToastrModule.forRoot(), forms_1.ReactiveFormsModule, ng_bootstrap_1.NgbModule,
            ],
            providers: [emploi_service_1.EmploiService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
