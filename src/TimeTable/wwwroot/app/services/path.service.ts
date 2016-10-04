import { Injectable }     from "angular2/core";

import { LocalModels }    from "../models";
import { MyDictionary }   from "../Dictionary";

@Injectable()
export class Path {
    private static m_params: MyDictionary<string>;
    private static m_paramsLoaded: boolean;

    public static GetParams(): MyDictionary<string> {
        if (typeof this.m_paramsLoaded === "undefined" || !this.m_paramsLoaded) {
            let first = "";
            if (location.search.charAt(0) == "?") {
                first = location.search.slice(1);
            }
            else {
                first = location.search;
            }

            let params = first.split("&");
            let ret = new MyDictionary<string>(new Array());
            params.forEach((val, i, arr) => {
                let spl = val.split("=");
                let k = spl[0];
                let v = "";
                if (spl.length > 1) {
                    v = spl[1];
                }
                ret.add(k, v);
            });

            this.m_params = ret;
            this.m_paramsLoaded = true;
            return ret;
        }
        else {
            return this.m_params;
        }
    }
}