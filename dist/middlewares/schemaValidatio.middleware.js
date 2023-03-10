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
exports.schemaValidation = void 0;
const schemaValidation = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const data = req.body;
        const validate = yield schema.validate(data, {
            abortEarly: false,
            stripUnknown: true,
        });
        req.body = validate;
        next();
    }
    catch (error) {
        return res.status(400).json({
            message: (_a = error.errors) === null || _a === void 0 ? void 0 : _a.join(", "),
        });
    }
});
exports.schemaValidation = schemaValidation;
//# sourceMappingURL=schemaValidatio.middleware.js.map