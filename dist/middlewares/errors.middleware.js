"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrorMiddleware = void 0;
const appError_1 = require("../errors/appError");
const handleErrorMiddleware = (error, req, res, next) => {
    if (error instanceof appError_1.AppError) {
        return res.status(error.statusCode).json({
            message: error.message,
        });
    }
    console.log(error);
    return res.status(500).json({
        message: "Internal server error",
    });
};
exports.handleErrorMiddleware = handleErrorMiddleware;
//# sourceMappingURL=errors.middleware.js.map