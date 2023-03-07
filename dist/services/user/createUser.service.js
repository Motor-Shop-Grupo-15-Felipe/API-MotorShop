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
exports.createUserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const data_source_1 = __importDefault(require("../../data-source"));
const address_entity_1 = require("../../entities/address.entity");
const user_entity_1 = require("../../entities/user.entity");
const appError_1 = require("../../errors/appError");
const createUserService = ({ name, birthDate, image, email, phone, password, cpf, isSeller, bio, address, }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(user_entity_1.User);
    const addressRepository = data_source_1.default.getRepository(address_entity_1.Address);
    const userAlreadyExists = yield userRepository.findOneBy({ cpf });
    const emailAlreadyRegistered = yield userRepository.findOneBy({ email });
    if (userAlreadyExists || emailAlreadyRegistered) {
        throw new appError_1.AppError('Usuário já cadastrado!', 400);
    }
    const hashedPassword = yield (0, bcryptjs_1.hash)(password, 10);
    if (isSeller) {
        const newSeller = userRepository.create({
            name,
            email,
            cpf,
            birthDate,
            image,
            phone,
            password: hashedPassword,
            isSeller: true,
            bio,
        });
        const newAddress = addressRepository.create(Object.assign({}, address));
        yield addressRepository.save(newAddress);
        newSeller.address = newAddress;
        yield userRepository.save(newSeller);
        return newSeller;
    }
    const normalUser = userRepository.create({
        name,
        email,
        cpf,
        birthDate,
        phone,
        password: hashedPassword,
        bio,
        image,
    });
    const newAddress = addressRepository.create(Object.assign({}, address));
    yield addressRepository.save(newAddress);
    yield userRepository.save(normalUser);
    normalUser.address = newAddress;
    return normalUser;
});
exports.createUserService = createUserService;
//# sourceMappingURL=createUser.service.js.map