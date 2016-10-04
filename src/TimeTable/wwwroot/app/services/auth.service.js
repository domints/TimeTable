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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var http_1 = require("angular2/http");
var core_1 = require("angular2/core");
var Rx_1 = require("rxjs/Rx");
var addresses_1 = require("./addresses");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.Login = function (model) {
        return this.http.post(addresses_1.Addr.Auth.Login, JSON.stringify(model))
            .map(this.extractData)
            .catch(this.handleError);
    };
    AuthService.prototype.Register = function (model) {
        return this.http.post(addresses_1.Addr.Auth.Register, JSON.stringify(model))
            .map(this.extractData)
            .catch(this.handleError);
    };
    AuthService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    AuthService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=auth.service.js.map
