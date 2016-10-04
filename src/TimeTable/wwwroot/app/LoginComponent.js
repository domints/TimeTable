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
var core_1 = require("angular2/core");
var collapse_1 = require("./collapse");
var LoginFormComponent_1 = require("./LoginFormComponent");
var RegisterFormComponent_1 = require("./RegisterFormComponent");
var LoginComponent = (function () {
    function LoginComponent() {
        this.errorMessage = "err";
        this.errorPanel = false;
        this.okMessage = "ok";
        this.okPanel = false;
    }
    LoginComponent.prototype.showError = function (msg) {
        this.errorMessage = msg;
        this.errorPanel = true;
    };
    LoginComponent.prototype.hideError = function () {
        this.errorMessage = "";
        this.errorPanel = false;
    };
    LoginComponent.prototype.showOk = function (msg) {
        this.okMessage = "";
        this.okPanel = true;
    };
    LoginComponent.prototype.hideOk = function () {
        this.okMessage = "";
        this.okPanel = false;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "tt-login",
            templateUrl: "/app/templates/login.template.html",
            directives: [LoginFormComponent_1.LoginFormComponent, RegisterFormComponent_1.RegisterFormComponent, collapse_1.Collapse]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=LoginComponent.js.map
