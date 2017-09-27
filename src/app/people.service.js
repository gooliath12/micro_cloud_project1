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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var PeopleService = (function () {
    function PeopleService(http) {
        this.http = http;
        this.peopleUrl = 'api/people';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    PeopleService.prototype.getPeoples = function () {
        return this.http.get(this.peopleUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PeopleService.prototype.getpeople = function (id) {
        var url = this.peopleUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PeopleService.prototype.update = function (people) {
        var url = this.peopleUrl + "/" + people.id;
        return this.http
            .put(url, JSON.stringify(people), { headers: this.headers })
            .toPromise()
            .then(function () { return people; })
            .catch(this.handleError);
    };
    PeopleService.prototype.create = function (people) {
        console.log(people);
        return this.http
            .post(this.peopleUrl, JSON.stringify(people), { headers: this.headers })
            .toPromise()
            .then(function () { return people; })
            .catch(this.handleError);
    };
    PeopleService.prototype.del = function (id) {
        var url = this.peopleUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    PeopleService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return PeopleService;
}());
PeopleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PeopleService);
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map