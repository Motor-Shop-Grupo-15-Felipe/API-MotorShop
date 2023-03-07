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
exports.recoveryPasswordController = void 0;
const class_transformer_1 = require("class-transformer");
const createRecoveryPassword_service_1 = require("../../services/login/createRecoveryPassword.service");
const recoveryPasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield (0, createRecoveryPassword_service_1.recoveryPasswordService)(id);
    return res.status(200).json((0, class_transformer_1.instanceToPlain)(user));
});
exports.recoveryPasswordController = recoveryPasswordController;
//# sourceMappingURL=createRecoveryPassword.controller.js.map