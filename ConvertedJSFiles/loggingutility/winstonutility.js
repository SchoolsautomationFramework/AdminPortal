"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.logger = winston_1.createLogger({
        level: 'info',
        format: winston_1.format.simple(),
        transports: [
            // - Write to all logs with level `info` and above to `combined.log`
            new winston_1.transports.File({ filename: 'combined.log' }),
            // - Write all logs error (and above) to Console/terminal
            new winston_1.transports.Console()
        ]
    });
    return Logger;
}());
exports.Logger = Logger;
