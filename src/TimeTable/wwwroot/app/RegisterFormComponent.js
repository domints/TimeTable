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
var core_1 = require("angular2/core");
var common_1 = require("angular2/common");
var models_1 = require("./models");
var path_service_1 = require("./services/path.service");
var auth_service_1 = require("./services/auth.service");
var RegisterFormComponent = (function () {
    function RegisterFormComponent(fBuilder, authSvc) {
        this.showError = new core_1.EventEmitter();
        this.hideError = new core_1.EventEmitter();
        this.showOk = new core_1.EventEmitter();
        this.hideOk = new core_1.EventEmitter();
        this.registerModel = new models_1.ViewModels.RegisterModel();
        this.submitPending = false;
        this.formModel = fBuilder.group({
            FullName: ["", common_1.Validators.required],
            UserName: ["", common_1.Validators.required],
            Email: ["", common_1.Validators.required],
            Password: ["", common_1.Validators.required],
            PasswordConfirm: ["", common_1.Validators.required]
        });
        this.authService = authSvc;
    }
    RegisterFormComponent.prototype.onRegister = function (event) {
        this.submitPending = true;
        this.registerModel.Email = this.formModel.controls['Email'].value;
        this.registerModel.Password = this.formModel.controls['Password'].value;
        this.registerModel.UserName = this.formModel.controls['UserName'].value;
        this.registerModel.FullName = this.formModel.controls['FullName'].value;
        var params = path_service_1.Path.GetParams();
        if (params.containsKey("resource")) {
            this.registerModel.ResourceTable = params["resource"];
        }
        else {
            this.registerModel.ResourceTable = null;
        }
        this.authService.Register(this.registerModel);
        event.preventDefault();
        return false;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RegisterFormComponent.prototype, "showError", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RegisterFormComponent.prototype, "hideError", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RegisterFormComponent.prototype, "showOk", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RegisterFormComponent.prototype, "hideOk", void 0);
    RegisterFormComponent = __decorate([
        core_1.Component({
            providers: [auth_service_1.AuthService],
            selector: "tt-registerform",
            templateUrl: "/app/templates/registerform.template.html"
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(auth_service_1.AuthService)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.AuthService])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());
exports.RegisterFormComponent = RegisterFormComponent;

//# sourceMappingURL=RegisterFormComponent.js.map
