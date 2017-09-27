"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var place_input_component_1 = require("./place-input.component");
var place_display_component_1 = require("./place-display.component");
var place_service_1 = require("./place.service");
var people_input_component_1 = require("./people-input.component");
var people_display_component_1 = require("./people-display.component");
var people_service_1 = require("./people.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            // InMemoryWebApiModule.forRoot(InMemoryDataService),
            router_1.RouterModule.forRoot([
                {
                    path: 'placeinput',
                    component: place_input_component_1.PlaceInputComponent
                },
                {
                    path: 'people',
                    component: people_input_component_1.PeopleInputComponent
                }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            place_input_component_1.PlaceInputComponent,
            place_display_component_1.PlaceDisplayComponent,
            people_input_component_1.PeopleInputComponent,
            people_display_component_1.PeopleDisplayComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [place_service_1.PlaceService, people_service_1.PeopleService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map