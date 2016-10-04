"use strict";
var Addr;
(function (Addr) {
    var Auth = (function () {
        function Auth() {
        }
        Auth.base = "api/auth/";
        Auth.Login = Auth.base + "login";
        Auth.Logout = Auth.base + "logout";
        Auth.Register = Auth.base + "register";
        return Auth;
    }());
    Addr.Auth = Auth;
})(Addr = exports.Addr || (exports.Addr = {}));

//# sourceMappingURL=addresses.js.map
