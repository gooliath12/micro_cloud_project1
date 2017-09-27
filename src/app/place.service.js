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
var withCookieOptions = new http_1.RequestOptions({ withCredentials: true });
var PlaceService = (function () {
    function PlaceService(http) {
        this.http = http;
        this.placesUrl = 'http://addressservice-env.qyspwjiw5j.us-east-1.elasticbeanstalk.com/Addresses/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    PlaceService.prototype.getPlaces = function () {
        return this.http.get(this.placesUrl)
            .toPromise()
            .then(function (response) {
            // console.log(response.json().Items);
            return response.json().data;
        })
            .catch(this.handleError);
    };
    PlaceService.prototype.getplace = function (id) {
        var url = this.placesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PlaceService.prototype.update = function (place) {
        var url = this.placesUrl + "/" + place.id;
        return this.http
            .put(url, JSON.stringify(place), { headers: this.headers })
            .toPromise()
            .then(function () { return place; })
            .catch(this.handleError);
    };
    PlaceService.prototype.create = function (place) {
        console.log(place);
        return this.http
            .post(this.placesUrl, JSON.stringify(place), { headers: this.headers })
            .toPromise()
            .then(function () { return place; })
            .catch(this.handleError);
    };
    PlaceService.prototype.del = function (id) {
        var url = this.placesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    PlaceService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return PlaceService;
}());
PlaceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PlaceService);
exports.PlaceService = PlaceService;
//# sourceMappingURL=place.service.js.map