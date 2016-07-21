import {Component} from "angular2/core";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";
import {ViewModels, FormModels} from "./models";
// import {AuthService} from './AuthService';

@Component({
    selector: "tt-loginform",
    templateUrl: "/app/templates/loginform.template.html"
})
export class LoginFormComponent {
    public loginModel = new ViewModels.LoginModel();
    public formModel: ControlGroup;
    public submitPending = false;

    constructor(fBuilder:FormBuilder) {
        this.loginModel.Version = "0.1";
        this.formModel = fBuilder.group({
            login: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    onLogin(event) {
        //this.submitPending = true;
        alert("submitujesz");

        this.submitPending = !this.submitPending;
        event.preventDefault();
        return false;
    }
}
