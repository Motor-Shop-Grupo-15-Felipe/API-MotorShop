"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRoutes = void 0;
const express_1 = require("express");
const createComment_controller_1 = require("../controllers/comments/createComment.controller");
const listComments_controller_1 = require("../controllers/comments/listComments.controller");
const authToken_middleware_1 = require("../middlewares/authToken.middleware");
const routes = (0, express_1.Router)();
const commentsRoutes = () => {
    routes.post("/:id", authToken_middleware_1.authTokenMiddleware, createComment_controller_1.createCommentController);
    routes.get("/:id", listComments_controller_1.listCommentVehicleController);
    return routes;
};
exports.commentsRoutes = commentsRoutes;
//# sourceMappingURL=comments.routes.js.map