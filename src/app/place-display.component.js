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
var core_1 = require("@angular/core");
var PlaceDisplayComponent = (function () {
    function PlaceDisplayComponent() {
    }
    return PlaceDisplayComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PlaceDisplayComponent.prototype, "responseStatus", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PlaceDisplayComponent.prototype, "responseData", void 0);
PlaceDisplayComponent = __decorate([
    core_1.Component({
        selector: 'place-display',
        template: "\n    <div *ngIf='responseStatus'>\n        responseStatus\n    </div>\n    <ul *ngIf='responseData'>\n        <li *ngFor=\"let row of responseData\">\n            <div>{{row.Address_id}}  {{row.City}}  {{row.Country}}</div>\n        </li>\n    </ul>\n  ",
    })
], PlaceDisplayComponent);
exports.PlaceDisplayComponent = PlaceDisplayComponent;
//# sourceMappingURL=place-display.component.js.map