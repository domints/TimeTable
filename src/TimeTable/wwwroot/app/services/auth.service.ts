import { Http, Response } from "angular2/http";
import { Injectable, Inject } from "angular2/core";
import { Observable, Subscriber }     from "rxjs/Rx";

import { ViewModels }     from "../models";
import { Addr }           from "./addresses";

@Injectable()
export class AuthService {
    constructor(@Inject(Http) private http: Http) { }

    Login(model: ViewModels.LoginModel): Observable<ViewModels.LoginResult> {
        return this.http.post(Addr.Auth.Login, JSON.stringify(model))
            .map(this.extractData)
            .catch(this.handleError);
    }

    Register(model: ViewModels.RegisterModel): Observable<ViewModels.RegisterResult> {
        return this.http.post(Addr.Auth.Register, JSON.stringify(model))
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}