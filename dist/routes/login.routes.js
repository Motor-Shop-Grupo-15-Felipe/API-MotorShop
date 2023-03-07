"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const express_1 = require("express");
const createLogin_controller_1 = require("../controllers/login/createLogin.controller");
// import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
// import { loginDoctorSchema } from "../../schemas/login.schema"
const routes = (0, express_1.Router)();
const loginRoutes = () => {
    routes.post("", createLogin_controller_1.createLoginController);
    return routes;
};
exports.loginRoutes = loginRoutes;
//# sourceMappingURL=login.routes.js.map