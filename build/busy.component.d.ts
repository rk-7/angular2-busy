/**
 * @file Component: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */
import { DoCheck, OnDestroy } from '@angular/core';
import { PromiseTrackerService } from './promise-tracker.service';
export interface IBusyContext {
    message: string;
}
export declare class BusyComponent implements DoCheck, OnDestroy {
    private tracker;
    TemplateComponent: any;
    private nmf;
    wrapperClass: string;
    template: string;
    message: string;
    private lastMessage;
    constructor(tracker: PromiseTrackerService);
    ngDoCheck(): void;
    ngOnDestroy(): void;
    isActive(): boolean;
}
