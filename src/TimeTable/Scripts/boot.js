"use strict";
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
var browser_1 = require("angular2/platform/browser");
var http_1 = require("angular2/http");
var app_1 = require("./app");
var auth_service_1 = require("./services/auth.service");
browser_1.bootstrap(app_1.AppComponent, [auth_service_1.AuthService, http_1.HTTP_PROVIDERS]);
