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
var place_service_1 = require("./place.service");
var PlaceInputComponent = (function () {
    function PlaceInputComponent(placeService) {
        this.placeService = placeService;
        this.requestData = { id: '11111', country: 'aaa', company: 'bbb' };
    }
    PlaceInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.placeService.getPlaces().then(function (places) { return _this.responseData = places; });
    };
    PlaceInputComponent.prototype.onAdd = function () {
        var _this = this;
        this.requestData.id = this.requestData.id.trim();
        if (!this.requestData.id) {
            return;
        }
        this.placeService.create(this.requestData).then(function () {
            _this.placeService.getPlaces().then(function (places) {
                _this.responseData = places;
                console.log(_this.responseData);
            });
        });
    };
    PlaceInputComponent.prototype.onUpdate = function () {
        var _this = this;
        this.placeService.update(this.requestData).then(function () {
            _this.placeService.getPlaces().then(function (places) { return _this.responseData = places; });
        });
    };
    PlaceInputComponent.prototype.onQuery = function () {
        var _this = this;
        this.placeService.getplace(this.requestData.id).then(function (place) { return _this.responseData = [place]; });
    };
    PlaceInputComponent.prototype.onDelete = function () {
        var _this = this;
        this.placeService.del(this.requestData.id).then(function () {
            _this.placeService.getPlaces().then(function (places) { return _this.responseData = places; });
        });
    };
    return PlaceInputComponent;
}());
PlaceInputComponent = __decorate([
    core_1.Component({
        selector: 'place-input',
        template: "\n  <input [(ngModel)]=\"requestData.id\" placeholder=\"ID\"/>\n  <input [(ngModel)]=\"requestData.country\" placeholder=\"Country\">\n  <input [(ngModel)]=\"requestData.company\" placeholder=\"Company Name\">\n  <div>\n    <button (click)=\"onAdd()\"> Add </button>\n    <button (click)=\"onUpdate()\"> Update </button>\n    <button (click)=\"onQuery()\"> Query </button>\n    <button (click)=\"onDelete()\"> Delete </button>\n  </div>\n  <place-display [responseData]=\"responseData\"></place-display>\n  ",
    }),
    __metadata("design:paramtypes", [place_service_1.PlaceService])
], PlaceInputComponent);
exports.PlaceInputComponent = PlaceInputComponent;
//# sourceMappingURL=place-input.component.js.map