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
var Dictionary_1 = require("../Dictionary");
var Path = (function () {
    function Path() {
    }
    Path.GetParams = function () {
        if (typeof this.m_paramsLoaded === "undefined" || !this.m_paramsLoaded) {
            var first = "";
            if (location.search.charAt(0) == "?") {
                first = location.search.slice(1);
            }
            else {
                first = location.search;
            }
            var params = first.split("&");
            var ret_1 = new Dictionary_1.MyDictionary(new Array());
            params.forEach(function (val, i, arr) {
                var spl = val.split("=");
                var k = spl[0];
                var v = "";
                if (spl.length > 1) {
                    v = spl[1];
                }
                ret_1.add(k, v);
            });
            this.m_params = ret_1;
            this.m_paramsLoaded = true;
            return ret_1;
        }
        else {
            return this.m_params;
        }
    };
    Path = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Path);
    return Path;
}());
exports.Path = Path;

//# sourceMappingURL=path.service.js.map
