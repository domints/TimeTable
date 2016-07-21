import {Component, ViewEncapsulation, OnInit} from "angular2/core";
import {LocalModels} from "./models";
import {LoginComponent} from "./LoginComponent";
import {CalendarComponent} from "./CalendarComponent";

@Component({
    selector: "tt-app",
    templateUrl: "/app/templates/app.template.html",
    directives: [LoginComponent, CalendarComponent]
})
export class AppComponent implements OnInit {
    public sessStorage: LocalModels.SessionStorage;
    public nowPage: LocalModels.Page;

    AppComponent() {
        this.nowPage = LocalModels.Page.Login;
    }

    ngOnInit(): void {
        this.sessStorage = LocalModels.Storage.Get<LocalModels.SessionStorage>("activeSession");
        if (this.sessStorage == null || this.sessStorage.ExpirationDate.getTime() < Date.now()) {
            this.nowPage = LocalModels.Page.Login;
        }
        else {
            this.nowPage = LocalModels.Page.Calendar;
        }
    }
}