"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var common_1 = require("angular2/common");
var models_1 = require("./models");
var RegisterFormComponent = (function () {
    function RegisterFormComponent(fBuilder) {
        this.registerModel = new models_1.ViewModels.RegisterModel();
        this.submitPending = false;
        this.formModel = fBuilder.group({
            FullName: ["", common_1.Validators.required],
            UserName: ["", common_1.Validators.required],
            Email: ["", common_1.Validators.required],
            Password: ["", common_1.Validators.required],
            PasswordConfirm: ["", common_1.Validators.required]
        });
    }
    RegisterFormComponent = __decorate([
        core_1.Component({
            selector: "tt-registerform",
            templateUrl: "/app/templates/registerform.template.html"
        })
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());
exports.RegisterFormComponent = RegisterFormComponent;
