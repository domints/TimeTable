"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var animation_builder_1 = require('angular2/src/animate/animation_builder');
var Collapse = (function () {
    function Collapse(animationBuilder, _element) {
        this._element = _element;
        this.duration = 500;
        this._animation = animationBuilder.css();
    }
    Collapse.prototype.ngOnChanges = function (changes) {
        if (changes.collapse) {
            if (this.collapse) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    };
    Collapse.prototype.hide = function () {
        this._baseSequence
            .setFromStyles({
            height: this._element.nativeElement.scrollHeight + 'px',
            overflow: 'hidden'
        })
            .setToStyles({
            height: '0',
            paddingTop: '0',
            paddingBottom: '0'
        });
        var a = this._animation.start(this._element.nativeElement);
        a.onComplete(function () {
            a.removeClasses(['in']); // rapid change will leave in
            a.addClasses(['collapse']);
        });
    };
    Collapse.prototype.show = function () {
        var _this = this;
        this._animation
            .setDuration(0)
            .addClass('in')
            .setFromStyles({
            overflow: 'hidden'
        })
            .setToStyles({
            paddingTop: '',
            paddingBottom: ''
        })
            .start(this._element.nativeElement)
            .onComplete(function () {
            var a = _this._baseSequence
                .setFromStyles({
                height: '0'
            })
                .setToStyles({
                height: _this._element.nativeElement.scrollHeight + 'px'
            })
                .start(_this._element.nativeElement);
            a.onComplete(function () { return a.addClasses(['collapse', 'in']); });
        });
    };
    Object.defineProperty(Collapse.prototype, "_elementHeight", {
        get: function () {
            var el = this._element.nativeElement;
            var height = el.offsetHeight;
            var style = getComputedStyle(el);
            height += parseInt(style.marginTop) + parseInt(style.marginBottom);
            return height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collapse.prototype, "_baseSequence", {
        get: function () {
            return this._animation
                .setDuration(this.duration)
                .removeClass('collapse')
                .removeClass('in')
                .addAnimationClass('collapsing');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Collapse.prototype, "duration", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Collapse.prototype, "collapse", void 0);
    Collapse = __decorate([
        core_1.Directive({
            selector: '[collapse]',
            host: {
                '[attr.aria-expanded]': '!collapse',
                '[attr.aria-hidden]': 'collapse'
            }
        }), 
        __metadata('design:paramtypes', [animation_builder_1.AnimationBuilder, core_1.ElementRef])
    ], Collapse);
    return Collapse;
}());
exports.Collapse = Collapse;

//# sourceMappingURL=collapse.js.map
