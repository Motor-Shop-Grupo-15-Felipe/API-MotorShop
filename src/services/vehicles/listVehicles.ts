import AppDataSource from '../../data-source';
import { Vehicle } from '../../entities/vehicle.entity';

export const listVehicleService = async () => {
    const VehicleRepo = AppDataSource.getRepository(Vehicle);

    const vehicles = await VehicleRepo.find({ relations: { images: true } });

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
        }
    }
    )

    const carros = vehiclesResp.filter((vehicle) => vehicle.type === 'carro');
    const motos = vehicles.filter((vehicle) => vehicle.type === 'moto');

    return {carros, motos};
};
