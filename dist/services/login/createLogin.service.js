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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoginService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_entity_1 = require("../../entities/user.entity");
const appError_1 = require("../../errors/appError");
const createLoginService = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(user_entity_1.User);
    const user = yield userRepository.findOneBy({ email });
    if ((user === null || user === void 0 ? void 0 : user.isActive) == false) {
        throw new appError_1.AppError("Esse usuário está inativo!", 400);
    }
    if (!user) {
        throw new appError_1.AppError("Email ou senha inválidos!", 401);
    }
    if (!user.isActive) {
        throw new appError_1.AppError("Usuário inválido!", 401);
    }
    const checkPassword = yield (0, bcryptjs_1.compare)(password, user.password);
    if (!checkPassword) {
        throw new appError_1.AppError("Email ou senha inválidos!", 403);
    }
    const token = jsonwebtoken_1.default.sign({
        isActive: user.isActive,
        id: user.id,
    }, process.env.JWT_SECRET, {
        subject: user.id,
        expiresIn: "2h",
    });
    return token;
});
exports.createLoginService = createLoginService;
//# sourceMappingURL=createLogin.service.js.map