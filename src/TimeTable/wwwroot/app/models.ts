export namespace ViewModels {
    export class LoginModel {
        public Login: string;
        public Password: string;
        public Version: string;
        public RememberMe: boolean;
    }

    export class LoginResult {
        public Type: number;
        public ExtraMessage: string;
        public Token: string;
        public ExpirationDate: Date;
    }

    export class RegisterModel {
        public FullName: string;
        public UserName: string;
        public Email: string;
        public Password: string;
        public ResourceTable: string;
    }

    export class RegisterResult {
        public Result: number;
    }
}

export namespace LocalModels {
    export enum Page {
        None = 0,
        Login = 1,
        Calendar = 2
    }

    export class Storage {
        static Set(key: string, value: any) {
            localStorage.setItem(key, JSON.stringify(value));
        }

        static Get<T>(key: string): T {
            return JSON.parse(localStorage.getItem(key));
        }
    }

    export class SessionStorage {
        public Token: string;
        public ExpirationDate: Date;
    }
}

export namespace FormModels {
    export class LoginFormModel {
        public Login: string;
        public Password: string;
        public RememberMe: boolean;
    }
}