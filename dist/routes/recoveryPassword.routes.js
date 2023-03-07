"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recoveryPasswordRoutes = void 0;
const express_1 = require("express");
const createRecoveryPassword_controller_1 = require("../controllers/login/createRecoveryPassword.controller");
const routes = (0, express_1.Router)();
const recoveryPasswordRoutes = () => {
    routes.post("/:id", createRecoveryPassword_controller_1.recoveryPasswordController);
    return routes;
};
exports.recoveryPasswordRoutes = recoveryPasswordRoutes;
//# sourceMappingURL=recoveryPassword.routes.js.map