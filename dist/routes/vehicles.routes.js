"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehiclesRoutes = void 0;
const express_1 = require("express");
const vehicles_controllers_1 = require("../controllers/vehicle/vehicles.controllers");
const routes = (0, express_1.Router)();
const vehiclesRoutes = () => {
    routes.post('/:userId', vehicles_controllers_1.createVehicleController);
    routes.get('', vehicles_controllers_1.listVehiclesController);
    routes.get('/:userId', vehicles_controllers_1.vehicleListVehicleIdController);
    routes.patch('/:vehicleId', vehicles_controllers_1.vehicleUpdateController);
    routes.delete('/:vehicleId', vehicles_controllers_1.vehicleDeleteController);
    return routes;
};
exports.vehiclesRoutes = vehiclesRoutes;
//# sourceMappingURL=vehicles.routes.js.map