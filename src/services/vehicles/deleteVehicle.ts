import AppDataSource from "../../data-source"
import { Vehicle } from "../../entities/vehicle.entity"
import { AppError } from "../../errors/appError"

const deleteVehicleService = async (id: string) => {
    const VehicleRepo = AppDataSource.getRepository(Vehicle)

    const vehicles = await VehicleRepo.findOneBy({ id })
    
    if (!vehicles?.isActive) {
        throw new AppError( "Annoucement already deactived", 409)
    }

    vehicles!.isActive = false

    await VehicleRepo.save(vehicles!)

    return false
}

export default deleteVehicleService