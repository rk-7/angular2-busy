"use strict";
/**
 * @file Component: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var promise_tracker_service_1 = require("./promise-tracker.service");
var inactiveStyle = animations_1.style({
    opacity: 0,
    transform: 'translateY(-40px)'
});
var timing = '.3s ease';
;
var BusyComponent = /** @class */ (function () {
    function BusyComponent(tracker
        //,private compiler: Compiler
    ) {
        this.tracker = tracker;
    }
    BusyComponent.prototype.ngDoCheck = function () {
        if (this.message === this.lastMessage) {
            return;
        }
        this.lastMessage = this.message;
        //this.clearDynamicTemplateCache();
        //this.createDynamicTemplate();
    };
    BusyComponent.prototype.ngOnDestroy = function () {
        //this.clearDynamicTemplateCache();
    };
    // createDynamicTemplate() {
    //     const {template, message} = this;
    //     @Component({template})
    //     class TemplateComponent {
    //         message: string = message;
    //     }
    //     @NgModule({
    //         declarations: [TemplateComponent],
    //         entryComponents: [TemplateComponent]
    //     })
    //     class TemplateModule {}
    //     this.TemplateComponent = TemplateComponent;
    //     this.nmf = this.compiler.compileModuleSync(TemplateModule);
    // }
    // clearDynamicTemplateCache() {
    //     if (!this.nmf) {
    //         return;
    //     }
    //     this.compiler.clearCacheFor(this.nmf.moduleType);
    //     this.nmf = null;
    // }
    // createDynamicTemplate() {
    //     const {template, message} = this;
    //     @Component({template})
    //     class TemplateComponent {
    //         message: string = message;
    //     }
    //     @NgModule({
    //         declarations: [TemplateComponent],
    //         entryComponents: [TemplateComponent]
    //     })
    //     class TemplateModule {}
    //     this.TemplateComponent = TemplateComponent;
    //     this.nmf = this.compiler.compileModuleSync(TemplateModule);
    // }
    // clearDynamicTemplateCache() {
    //     if (!this.nmf) {
    //         return;
    //     }
    //     this.compiler.clearCacheFor(this.nmf.moduleType);
    //     this.nmf = null;
    // }
    BusyComponent.prototype.isActive = 
    // createDynamicTemplate() {
    //     const {template, message} = this;
    //     @Component({template})
    //     class TemplateComponent {
    //         message: string = message;
    //     }
    //     @NgModule({
    //         declarations: [TemplateComponent],
    //         entryComponents: [TemplateComponent]
    //     })
    //     class TemplateModule {}
    //     this.TemplateComponent = TemplateComponent;
    //     this.nmf = this.compiler.compileModuleSync(TemplateModule);
    // }
    // clearDynamicTemplateCache() {
    //     if (!this.nmf) {
    //         return;
    //     }
    //     this.compiler.clearCacheFor(this.nmf.moduleType);
    //     this.nmf = null;
    // }
    function () {
        return this.tracker.isActive();
    };
    BusyComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-busy',
                    template: "\n        <div [class]=\"wrapperClass\" *ngIf=\"isActive()\" @flyInOut>\n            <!-- <ng-container *ngComponentOutlet=\"TemplateComponent; ngModuleFactory: nmf;\"></ng-container> -->\n            <div class=\"ng-busy-default-wrapper\">\n                <div class=\"ng-busy-default-sign\">\n                    <div class=\"ng-busy-default-spinner\">\n                        <div class=\"bar1\"></div>\n                        <div class=\"bar2\"></div>\n                        <div class=\"bar3\"></div>\n                        <div class=\"bar4\"></div>\n                        <div class=\"bar5\"></div>\n                        <div class=\"bar6\"></div>\n                        <div class=\"bar7\"></div>\n                        <div class=\"bar8\"></div>\n                        <div class=\"bar9\"></div>\n                        <div class=\"bar10\"></div>\n                        <div class=\"bar11\"></div>\n                        <div class=\"bar12\"></div>\n                    </div>\n                    <div class=\"ng-busy-default-text\">{{message}}</div>\n                </div>\n            </div>\n        </div>\n    ",
                    animations: [
                        animations_1.trigger('flyInOut', [
                            animations_1.transition('void => *', [
                                inactiveStyle,
                                animations_1.animate(timing)
                            ]),
                            animations_1.transition('* => void', [
                                animations_1.animate(timing, inactiveStyle)
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    BusyComponent.ctorParameters = function () { return [
        { type: promise_tracker_service_1.PromiseTrackerService, },
    ]; };
    return BusyComponent;
}());
exports.BusyComponent = BusyComponent;
//# sourceMappingURL=busy.component.js.map