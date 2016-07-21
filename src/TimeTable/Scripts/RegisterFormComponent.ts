import {Component} from "angular2/core";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";
import {ViewModels} from "./models";

@Component({
    selector: "tt-registerform",
    templateUrl: "/app/templates/registerform.template.html"
})
export class RegisterFormComponent {
    public registerModel = new ViewModels.RegisterModel();
    public passwordConfirm: string;
    public formModel: ControlGroup;
    public submitPending = false;

    constructor(fBuilder: FormBuilder) {
        this.formModel = fBuilder.group({
            FullName: ["", Validators.required],
            UserName: ["", Validators.required],
            Email: ["", Validators.required],
            Password: ["", Validators.required],
            PasswordConfirm: ["", Validators.required]
        });
    }
}
