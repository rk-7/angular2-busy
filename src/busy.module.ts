/**
 * @file Module: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

//import {Compiler, COMPILER_OPTIONS, CompilerFactory} from '@angular/core';
//import {JitCompilerFactory} from '@angular/platform-browser-dynamic';

import {BusyDirective} from './busy.directive';
import {BusyService} from './busy.service';
import {BusyBackdropComponent} from './busy-backdrop.component';
import {BusyComponent} from './busy.component';
import {BusyConfig} from './busy-config';

// Workaround for Compiler in AOT
// https://github.com/angular/angular/issues/15510#issuecomment-294301758
// export function createJitCompiler() {
//     return new JitCompilerFactory([{useDebug: false, useJit: true}]).createCompiler();
// }

// export function createCompiler(compilerFactory: CompilerFactory) {
//     return compilerFactory.createCompiler();
//   }

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BusyDirective,
        BusyComponent,
        BusyBackdropComponent
    ],
    providers: [
        BusyService,
        // {provide: COMPILER_OPTIONS, useValue: {useDebug: false, useJit: true}, multi: true},
        // {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
        // {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]},
    ],
    exports: [BusyDirective],
    entryComponents: [
        BusyComponent,
        BusyBackdropComponent
    ]
})
export class BusyModule {
    static forRoot(config: BusyConfig): ModuleWithProviders {
        return {
            ngModule: BusyModule,
            providers: [
                {provide: BusyConfig, useValue: config}
            ]
        };
    }
}
