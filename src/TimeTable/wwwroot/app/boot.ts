///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import { bootstrap }              from "angular2/platform/browser";
import { HTTP_PROVIDERS }         from "angular2/http";
import { AppComponent }           from "./app";
import { AuthService }            from "./services/auth.service";

bootstrap(AppComponent, [AuthService, HTTP_PROVIDERS]);
