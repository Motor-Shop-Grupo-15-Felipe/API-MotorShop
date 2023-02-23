import AppDataSource from "../../data-source";
import { Images } from "../../entities/images.entity";
import { Vehicle } from "../../entities/vehicle.entity";

export interface IUpdateVehicle {
  type: string;
  price: string;
  images: string[];
  km: number;
  year: string;
  title: string;
  description: string;
  isActive: boolean;
}

const updateVehicleService = async (id: string, data: IUpdateVehicle) => {
  const VehicleRepo = AppDataSource.getRepository(Vehicle);
  const ImageRepo = AppDataSource.getRepository(Images);

  const { images, ...restData } = data;

  const vehicleFound = VehicleRepo.findOneBy({
    id: id,
  });

  if (!vehicleFound) {
    throw new Error("Vehicle not found");
  }

  await VehicleRepo.update(id, { ...restData });

  if (images) {
    images.map(async (image) => {
      const img = image;

      const vehicleImg = ImageRepo.create({
        image: image,
      });

      await ImageRepo.save(vehicleImg);

      if (images.length + 1 === images.length) {
        return await VehicleRepo.findOne({
          where: {
            id: id,
          },
        });
      }
    });
  }

  const VehicleResponse = await VehicleRepo.findOneBy({ id });

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
};

export default updateVehicleService;
