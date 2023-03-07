"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const yup = __importStar(require("yup"));
const yup_password_1 = __importDefault(require("yup-password"));
(0, yup_password_1.default)(yup);
exports.userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    cpf: yup.string().min(11).max(11).required(),
    password: yup
        .string()
        .min(8, "A senha deve conter no mínimo oito caracteres!")
        // .minUppercase(1, "A senha deve conter pelo menos uma letra maiúscula!")
        // .minNumbers(1, "A senha deve conter pelo menos um número!")
        .required(),
    address: yup.object().shape({
        street: yup.string(),
        number: yup.string(),
        complement: yup.string(),
        cep: yup.string(),
        city: yup.string(),
        state: yup.string()
    }),
    birthDate: yup.string(),
    phone: yup.string(),
    image: yup.string(),
    bio: yup.string(),
    isActive: yup.boolean(),
    isSeller: yup.boolean(),
});
//# sourceMappingURL=user.schema.js.map