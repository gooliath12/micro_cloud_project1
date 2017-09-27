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
var people_service_1 = require("./people.service");
var PeopleInputComponent = (function () {
    function PeopleInputComponent(peopleService) {
        this.peopleService = peopleService;
        this.requestData = { id: '11111', firstName: 'aaa', lastName: 'bbb' };
    }
    PeopleInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.peopleService.getPeoples().then(function (people) { return _this.responseData = people; });
    };
    PeopleInputComponent.prototype.onAdd = function () {
        var _this = this;
        this.requestData.id = this.requestData.id.trim();
        if (!this.requestData.id) {
            return;
        }
        this.peopleService.create(this.requestData).then(function () {
            _this.peopleService.getPeoples().then(function (people) {
                _this.responseData = people;
                console.log(_this.responseData);
            });
        });
    };
    PeopleInputComponent.prototype.onUpdate = function () {
        var _this = this;
        this.peopleService.update(this.requestData).then(function () {
            _this.peopleService.getPeoples().then(function (people) { return _this.responseData = people; });
        });
    };
    PeopleInputComponent.prototype.onQuery = function () {
        var _this = this;
        this.peopleService.getpeople(this.requestData.id).then(function (people) { return _this.responseData = [people]; });
    };
    PeopleInputComponent.prototype.onDelete = function () {
        var _this = this;
        this.peopleService.del(this.requestData.id).then(function () {
            _this.peopleService.getPeoples().then(function (people) { return _this.responseData = people; });
        });
    };
    return PeopleInputComponent;
}());
PeopleInputComponent = __decorate([
    core_1.Component({
        selector: 'people-input',
        template: "\n  <input [(ngModel)]=\"requestData.id\" peopleholder=\"ID\"/>\n  <input [(ngModel)]=\"requestData.country\" peopleholder=\"Country\">\n  <input [(ngModel)]=\"requestData.company\" peopleholder=\"Company Name\">\n  <div>\n    <button (click)=\"onAdd()\"> Add </button>\n    <button (click)=\"onUpdate()\"> Update </button>\n    <button (click)=\"onQuery()\"> Query </button>\n    <button (click)=\"onDelete()\"> Delete </button>\n  </div>\n  <people-display [responseData]=\"responseData\"></people-display>\n  ",
    }),
    __metadata("design:paramtypes", [people_service_1.PeopleService])
], PeopleInputComponent);
exports.PeopleInputComponent = PeopleInputComponent;
//# sourceMappingURL=people-input.component.js.map