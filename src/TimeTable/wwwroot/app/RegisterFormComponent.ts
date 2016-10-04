import { Component, EventEmitter, Inject, Output } from "angular2/core";
import { ControlGroup, FormBuilder, Validators } from "angular2/common";
import { ViewModels } from "./models";
import { Path } from "./services/path.service";
import { AuthService } from "./services/auth.service";

@Component({
    providers: [AuthService],
    selector: "tt-registerform",
    templateUrl: "/app/templates/registerform.template.html"
})
export class RegisterFormComponent {
    @Output() showError = new EventEmitter<string>();
    @Output() hideError = new EventEmitter();
    @Output() showOk = new EventEmitter<string>();
    @Output() hideOk = new EventEmitter();

    public registerModel = new ViewModels.RegisterModel();
    public passwordConfirm: string;
    public formModel: ControlGroup;
    public submitPending = false;
    public authService: AuthService;

    constructor( @Inject(FormBuilder) fBuilder: FormBuilder, @Inject(AuthService) authSvc: AuthService) {
        this.formModel = fBuilder.group({
            FullName: ["", Validators.required],
            UserName: ["", Validators.required],
            Email: ["", Validators.required],
            Password: ["", Validators.required],
            PasswordConfirm: ["", Validators.required]
        });

        this.authService = authSvc;
    }

    onRegister(event) {
        this.submitPending = true;

        this.registerModel.Email = this.formModel.controls['Email'].value;
        this.registerModel.Password = this.formModel.controls['Password'].value;
        this.registerModel.UserName = this.formModel.controls['UserName'].value;
        this.registerModel.FullName = this.formModel.controls['FullName'].value;
        var params = Path.GetParams();
        if (params.containsKey("resource")) {
            this.registerModel.ResourceTable = params["resource"];
        }
        else {
            this.registerModel.ResourceTable = null;
        }

        this.authService.Register(this.registerModel);

        event.preventDefault();
        return false;
    }
}
