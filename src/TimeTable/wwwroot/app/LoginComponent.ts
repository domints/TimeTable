import {Component, Directive, Renderer, HostListener, ViewChildren, ElementRef} from "angular2/core";
import {ViewModels} from "./models";
import {Collapse} from "./collapse";
import {LoginFormComponent} from "./LoginFormComponent";
import {RegisterFormComponent} from "./RegisterFormComponent";

@Component({
    selector: "tt-login",
    templateUrl: "/app/templates/login.template.html",
    directives: [LoginFormComponent, RegisterFormComponent, Collapse]
})
export class LoginComponent {
    public errorPanel: boolean;
    public errorMessage: string;
    public okPanel: boolean;
    public okMessage: string;

    constructor() {
        this.errorMessage = "err";
        this.errorPanel = false;
        this.okMessage = "ok";
        this.okPanel = false;
    }

    showError(msg: string) {
        this.errorMessage = msg;
        this.errorPanel = true;
    }

    hideError() {
        this.errorMessage = "";
        this.errorPanel = false;
    }

    showOk(msg: string) {
        this.okMessage = "";
        this.okPanel = true;
    }

    hideOk() {
        this.okMessage = "";
        this.okPanel = false;
    }
}
