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
exports.listCommentVehicleController = void 0;
const listComments_service_1 = require("../../services/comments/listComments.service");
const listCommentVehicleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vehicleId = req.params.id;
    const comments = yield (0, listComments_service_1.listCommentsVehicleService)(vehicleId);
    return res.status(200).json(comments);
});
exports.listCommentVehicleController = listCommentVehicleController;
//# sourceMappingURL=listComments.controller.js.map