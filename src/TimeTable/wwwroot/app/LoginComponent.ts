import {Component} from "angular2/core";
import {ViewModels} from "./models";
import {LoginFormComponent} from "./LoginFormComponent";
import {RegisterFormComponent} from "./RegisterFormComponent";
// import {AuthService} from './AuthService';

@Component({
    selector: "tt-login",
    templateUrl: "/app/templates/login.template.html",
    directives: [LoginFormComponent, RegisterFormComponent]
})
export class LoginComponent {

}
