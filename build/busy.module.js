"use strict";
/**
 * @file Module: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
//import {JitCompilerFactory} from '@angular/compiler';
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var busy_directive_1 = require("./busy.directive");
var busy_service_1 = require("./busy.service");
var busy_backdrop_component_1 = require("./busy-backdrop.component");
var busy_component_1 = require("./busy.component");
var busy_config_1 = require("./busy-config");
// Workaround for Compiler in AOT
// https://github.com/angular/angular/issues/15510#issuecomment-294301758
// export function createJitCompiler() {
//     return new JitCompilerFactory([{useDebug: false, useJit: true}]).createCompiler();
// }
function createCompiler(compilerFactory) {
    return compilerFactory.createCompiler();
}
exports.createCompiler = createCompiler;
var ɵ0 = { useDebug: false, useJit: true };
exports.ɵ0 = ɵ0;
var BusyModule = /** @class */ (function () {
    function BusyModule() {
    }
    BusyModule.forRoot = function (config) {
        return {
            ngModule: BusyModule,
            providers: [
                { provide: busy_config_1.BusyConfig, useValue: config }
            ]
        };
    };
    BusyModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        busy_directive_1.BusyDirective,
                        busy_component_1.BusyComponent,
                        busy_backdrop_component_1.BusyBackdropComponent,
                    ],
                    providers: [
                        busy_service_1.BusyService,
                        { provide: core_1.COMPILER_OPTIONS, useValue: ɵ0, multi: true },
                        { provide: core_1.CompilerFactory, useClass: platform_browser_dynamic_1.JitCompilerFactory, deps: [core_1.COMPILER_OPTIONS] },
                        { provide: core_1.Compiler, useFactory: createCompiler, deps: [core_1.CompilerFactory] },
                    ],
                    exports: [busy_directive_1.BusyDirective],
                    entryComponents: [
                        busy_component_1.BusyComponent,
                        busy_backdrop_component_1.BusyBackdropComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    BusyModule.ctorParameters = function () { return []; };
    return BusyModule;
}());
exports.BusyModule = BusyModule;
//# sourceMappingURL=busy.module.js.map