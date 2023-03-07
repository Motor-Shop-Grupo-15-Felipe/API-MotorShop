"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const users_routes_1 = require("./users.routes");
const login_routes_1 = require("./login.routes");
const vehicles_routes_1 = require("./vehicles.routes");
const comments_routes_1 = require("./comments.routes");
const recoveryPassword_routes_1 = require("./recoveryPassword.routes");
const appRoutes = (app) => {
    app.use("/users", (0, users_routes_1.usersRoutes)());
    app.use("/ads", (0, vehicles_routes_1.vehiclesRoutes)());
    app.use("/login", (0, login_routes_1.loginRoutes)());
    app.use("/recovery-password", (0, recoveryPassword_routes_1.recoveryPasswordRoutes)());
    app.use("/comments", (0, comments_routes_1.commentsRoutes)());
};
exports.appRoutes = appRoutes;
//# sourceMappingURL=index.js.map