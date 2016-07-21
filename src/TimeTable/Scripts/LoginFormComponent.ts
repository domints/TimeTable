import {Component} from "angular2/core";
import {Control, ControlGroup, FormBuilder, Validators} from "angular2/common";
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
            login: new Control("", Validators.required),
            password: new Control(this.loginModel.Password, Validators.required),
            rememberMe: new Control(false)
        });
    }

    onLogin(event) {
        this.submitPending = true;

        this.loginModel.Login = this.formModel.controls['login'].value;
        this.loginModel.Password = this.formModel.controls['password'].value;
        this.loginModel.RememberMe = this.formModel.controls['rememberMe'].value;
        console.log(this.loginModel);
        this.submitPending = false;
        event.preventDefault();
        return false;
    }
}
