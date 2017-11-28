"use strict";
/**
 * @file Service: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var busy_config_1 = require("./busy-config");
var BusyService = /** @class */ (function () {
    function BusyService(config) {
        this.config = config || new busy_config_1.BusyConfig();
    }
    BusyService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    BusyService.ctorParameters = function () { return [
        { type: busy_config_1.BusyConfig, decorators: [{ type: core_1.Optional },] },
    ]; };
    return BusyService;
}());
exports.BusyService = BusyService;
//# sourceMappingURL=busy.service.js.map