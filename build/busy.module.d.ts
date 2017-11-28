/**
 * @file Module: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */
import { Compiler, CompilerFactory } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { BusyConfig } from './busy-config';
export declare function createCompiler(compilerFactory: CompilerFactory): Compiler;
export declare class BusyModule {
    static forRoot(config: BusyConfig): ModuleWithProviders;
}
