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
exports.createCommentService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const comment_entity_1 = require("../../entities/comment.entity");
const user_entity_1 = require("../../entities/user.entity");
const vehicle_entity_1 = require("../../entities/vehicle.entity");
const createCommentService = ({ id, 
//id é o id do usuario
vehicleId, comment, }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(user_entity_1.User);
    const vehicleRepository = data_source_1.default.getRepository(vehicle_entity_1.Vehicle);
    const commentRepository = data_source_1.default.getRepository(comment_entity_1.Comment);
    const user = yield userRepository.findOneBy({ id: id });
    //id é o id do usuario
    if (!user) {
        throw new Error(`User does not exist`);
    }
    const vehicle = yield vehicleRepository.findOneBy({ id: vehicleId });
    if (!vehicle) {
        throw new Error(`Vehicle does not exist`);
    }
    const newComment = commentRepository.create({
        comment: comment,
        user: user,
        vehicle: vehicle,
    });
    yield commentRepository.save(newComment);
    return newComment;
});
exports.createCommentService = createCommentService;
//# sourceMappingURL=createComment.service.js.map