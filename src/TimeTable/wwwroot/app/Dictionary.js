"use strict";
var MyDictionary = (function () {
    function MyDictionary(init) {
        this._keys = new Array();
        this._values = new Array();
        for (var x = 0; x < init.length; x++) {
            this[init[x].key] = init[x].value;
            this._keys.push(init[x].key);
            this._values.push(init[x].value);
        }
    }
    MyDictionary.prototype.add = function (key, value) {
        this[key] = value;
        this._keys.push(key);
        this._values.push(value);
    };
    MyDictionary.prototype.remove = function (key) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
        delete this[key];
    };
    MyDictionary.prototype.keys = function () {
        return this._keys;
    };
    MyDictionary.prototype.values = function () {
        return this._values;
    };
    MyDictionary.prototype.containsKey = function (key) {
        if (typeof this[key] === "undefined") {
            return false;
        }
        return true;
    };
    return MyDictionary;
}());
exports.MyDictionary = MyDictionary;

//# sourceMappingURL=Dictionary.js.map
