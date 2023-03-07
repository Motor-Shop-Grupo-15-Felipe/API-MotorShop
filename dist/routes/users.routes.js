"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const createUser_controller_1 = require("../controllers/user/createUser.controller");
const listOneUser_controller_1 = require("../controllers/user/listOneUser.controller");
const listUsers_controller_1 = require("../controllers/user/listUsers.controller");
const softDeleteUser_controller_1 = require("../controllers/user/softDeleteUser.controller");
const updateUser_controller_1 = require("../controllers/user/updateUser.controller");
const routes = (0, express_1.Router)();
const usersRoutes = () => {
    routes.post("", createUser_controller_1.createUserController);
    routes.get("", listUsers_controller_1.listUsersController);
    routes.get("/:id", listOneUser_controller_1.listOneUserController);
    routes.patch("/:id", updateUser_controller_1.updateUserController);
    routes.delete("/:id", softDeleteUser_controller_1.softDeleteUserController);
    return routes;
};
exports.usersRoutes = usersRoutes;
//# sourceMappingURL=users.routes.js.map