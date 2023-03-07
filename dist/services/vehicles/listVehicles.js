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
exports.listVehicleService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const vehicle_entity_1 = require("../../entities/vehicle.entity");
const listVehicleService = () => __awaiter(void 0, void 0, void 0, function* () {
    const VehicleRepo = data_source_1.default.getRepository(vehicle_entity_1.Vehicle);
    const vehicles = yield VehicleRepo.find({ relations: { images: true } });
    const vehiclesResp = vehicles.map((vehicle) => {
        return {
            id: vehicle.id,
            title: vehicle.title,
            description: vehicle.description,
            km: vehicle.km,
            year: vehicle.year,
            images: vehicle.images,
            comments: vehicle.comments,
            isActive: vehicle.isActive,
            type: vehicle.type
        };
    });
    const carros = vehiclesResp.filter((vehicle) => vehicle.type === 'carro');
    const motos = vehicles.filter((vehicle) => vehicle.type === 'moto');
    return { carros, motos };
});
exports.listVehicleService = listVehicleService;
//# sourceMappingURL=listVehicles.js.map