import {Component} from "angular2/core";
import {ViewModels, FormModels} from "./models";
// import {AuthService} from './AuthService';

@Component({
    selector: "tt-loginform",
    templateUrl: "/app/templates/loginform.template.html"
})
export class LoginFormComponent {
    public loginModel = new ViewModels.LoginModel();
    public formModel = new FormModels.LoginFormModel();
    public submitPending = false;

    constructor() {
        this.loginModel.Version = "0.1";
    }    
}
