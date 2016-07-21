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
var common_1 = require("angular2/common");
var models_1 = require("./models");
// import {AuthService} from './AuthService';
var LoginFormComponent = (function () {
    function LoginFormComponent(fBuilder) {
        this.loginModel = new models_1.ViewModels.LoginModel();
        this.submitPending = false;
        this.loginModel.Version = "0.1";
        this.formModel = fBuilder.group({
            login: new common_1.Control("", common_1.Validators.required),
            password: new common_1.Control(this.loginModel.Password, common_1.Validators.required),
            rememberMe: new common_1.Control(false)
        });
    }
    LoginFormComponent.prototype.onLogin = function (event) {
        this.submitPending = true;
        this.loginModel.Login = this.formModel.controls['login'].value;
        this.loginModel.Password = this.formModel.controls['password'].value;
        this.loginModel.RememberMe = this.formModel.controls['rememberMe'].value;
        console.log(this.loginModel);
        this.submitPending = false;
        event.preventDefault();
        return false;
    };
    LoginFormComponent = __decorate([
        core_1.Component({
            selector: "tt-loginform",
            templateUrl: "/app/templates/loginform.template.html"
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;

//# sourceMappingURL=LoginFormComponent.js.map
