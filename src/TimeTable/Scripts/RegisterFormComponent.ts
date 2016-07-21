import {Component} from "angular2/core";
import {ViewModels} from "./models";

@Component({
    selector: "tt-registerform",
    templateUrl: "/app/templates/registerform.template.html"
})
export class RegisterFormComponent {
    public registerModel = new ViewModels.RegisterModel();
    public passwordConfirm: string;
}
