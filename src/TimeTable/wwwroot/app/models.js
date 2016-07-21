"use strict";
var ViewModels;
(function (ViewModels) {
    var LoginModel = (function () {
        function LoginModel() {
        }
        return LoginModel;
    }());
    ViewModels.LoginModel = LoginModel;
    var LoginResult = (function () {
        function LoginResult() {
        }
        return LoginResult;
    }());
    ViewModels.LoginResult = LoginResult;
    var RegisterModel = (function () {
        function RegisterModel() {
        }
        return RegisterModel;
    }());
    ViewModels.RegisterModel = RegisterModel;
    var RegisterResult = (function () {
        function RegisterResult() {
        }
        return RegisterResult;
    }());
    ViewModels.RegisterResult = RegisterResult;
})(ViewModels = exports.ViewModels || (exports.ViewModels = {}));
var LocalModels;
(function (LocalModels) {
    (function (Page) {
        Page[Page["None"] = 0] = "None";
        Page[Page["Login"] = 1] = "Login";
        Page[Page["Calendar"] = 2] = "Calendar";
    })(LocalModels.Page || (LocalModels.Page = {}));
    var Page = LocalModels.Page;
    var Storage = (function () {
        function Storage() {
        }
        Storage.Set = function (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        };
        Storage.Get = function (key) {
            return JSON.parse(localStorage.getItem(key));
        };
        return Storage;
    }());
    LocalModels.Storage = Storage;
    var SessionStorage = (function () {
        function SessionStorage() {
        }
        return SessionStorage;
    }());
    LocalModels.SessionStorage = SessionStorage;
})(LocalModels = exports.LocalModels || (exports.LocalModels = {}));
var FormModels;
(function (FormModels) {
    var LoginFormModel = (function () {
        function LoginFormModel() {
        }
        return LoginFormModel;
    }());
    FormModels.LoginFormModel = LoginFormModel;
})(FormModels = exports.FormModels || (exports.FormModels = {}));
//# sourceMappingURL=models.js.map