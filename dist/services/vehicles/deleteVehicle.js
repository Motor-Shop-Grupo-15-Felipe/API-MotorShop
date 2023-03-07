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
const data_source_1 = __importDefault(require("../../data-source"));
const vehicle_entity_1 = require("../../entities/vehicle.entity");
const appError_1 = require("../../errors/appError");
const deleteVehicleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const VehicleRepo = data_source_1.default.getRepository(vehicle_entity_1.Vehicle);
    const vehicles = yield VehicleRepo.findOneBy({ id });
    if (!(vehicles === null || vehicles === void 0 ? void 0 : vehicles.isActive)) {
        throw new appError_1.AppError("Annoucement already deactived", 409);
    }
    vehicles.isActive = false;
    yield VehicleRepo.save(vehicles);
    return false;
});
exports.default = deleteVehicleService;
//# sourceMappingURL=deleteVehicle.js.map