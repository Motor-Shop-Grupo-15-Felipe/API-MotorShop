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
exports.vehicleDeleteController = exports.vehicleUpdateController = exports.vehicleListVehicleIdController = exports.listVehiclesController = exports.createVehicleController = void 0;
const createVehicle_1 = require("../../services/vehicles/createVehicle");
const listVehicleId_1 = __importDefault(require("../../services/vehicles/listVehicleId"));
const listVehicles_1 = require("../../services/vehicles/listVehicles");
const updateVehicle_1 = __importDefault(require("../../services/vehicles/updateVehicle"));
const deleteVehicle_1 = __importDefault(require("../../services/vehicles/deleteVehicle"));
const createVehicleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const userId = req.params.userId;
    data.userId = userId;
    const response = yield (0, createVehicle_1.createVehicleService)(data);
    return res.status(201).json(response);
});
exports.createVehicleController = createVehicleController;
const listVehiclesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, listVehicles_1.listVehicleService)();
    return res.status(200).json(response);
});
exports.listVehiclesController = listVehiclesController;
const vehicleListVehicleIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vehicleId = req.params.userId;
    const vehicle = yield (0, listVehicleId_1.default)(vehicleId);
    return res.status(200).json(vehicle);
});
exports.vehicleListVehicleIdController = vehicleListVehicleIdController;
const vehicleUpdateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vehicleId = req.params.vehicleId;
    const data = req.body;
    const vehicleUp = yield (0, updateVehicle_1.default)(vehicleId, data);
    return res.status(201).json(vehicleUp);
});
exports.vehicleUpdateController = vehicleUpdateController;
const vehicleDeleteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vehicleId = req.params.vehicleId;
    const softDelete = yield (0, deleteVehicle_1.default)(vehicleId);
    return res.status(204).send({
        softDelete
    });
});
exports.vehicleDeleteController = vehicleDeleteController;
//# sourceMappingURL=vehicles.controllers.js.map