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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data-source"));
const images_entity_1 = require("../../entities/images.entity");
const vehicle_entity_1 = require("../../entities/vehicle.entity");
const updateVehicleService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const VehicleRepo = data_source_1.default.getRepository(vehicle_entity_1.Vehicle);
    const ImageRepo = data_source_1.default.getRepository(images_entity_1.Images);
    const { images } = data, restData = __rest(data, ["images"]);
    const vehicleFound = VehicleRepo.findOneBy({
        id: id,
    });
    if (!vehicleFound) {
        throw new Error("Vehicle not found");
    }
    yield VehicleRepo.update(id, Object.assign({}, restData));
    if (images) {
        images.map((image) => __awaiter(void 0, void 0, void 0, function* () {
            const img = image;
            const vehicleImg = ImageRepo.create({
                image: image,
            });
            yield ImageRepo.save(vehicleImg);
            if (images.length + 1 === images.length) {
                return yield VehicleRepo.findOne({
                    where: {
                        id: id,
                    },
                });
            }
        }));
    }
    const VehicleResponse = yield VehicleRepo.findOneBy({ id });
    if (VehicleResponse) {
        const vehiclesResp = {
            id: VehicleResponse.id,
            title: VehicleResponse.title,
            description: VehicleResponse.description,
            km: VehicleResponse.km,
            year: VehicleResponse.year,
            images: VehicleResponse.images,
            comments: VehicleResponse.comments,
            isActive: VehicleResponse.isActive,
            type: VehicleResponse.type,
        };
        return vehiclesResp;
    }
});
exports.default = updateVehicleService;
//# sourceMappingURL=updateVehicle.js.map