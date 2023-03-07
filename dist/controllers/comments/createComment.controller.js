"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCommentController = void 0;
const createComment_service_1 = require("../../services/comments/createComment.service");
const createCommentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = req.body.comment;
    const { id } = req.user;
    const vehicleId = req.params.id;
    const newComment = yield (0, createComment_service_1.createCommentService)({ comment, vehicleId, id });
    return res.status(201).json(newComment);
});
exports.createCommentController = createCommentController;
//# sourceMappingURL=createComment.controller.js.map