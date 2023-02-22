import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { IAnnouncement } from "../../interfaces/announcement";
import { AppError } from "../../errors/appErros";
import { prisma } from "../../utils/prisma";

export const announcementCreateService = async ({
  announcementType,
  title,
  year,
  km,
  price,
  plate,
  description,
  vehicleType,
  published,
  images,
}: IAnnouncement) => {
  const annoucementRepository = prisma.announcement;

  const annoucementExist = await annoucementRepository.findFirst({
    where: { plate },
  });

  if (annoucementExist) {
    throw new AppError(400, "Annoucement already exists, plate duplicate");
  }

  const newAnnoucement = await prisma.announcement.create({
    data: {
      title: title,
      description: description,
      announcementType: announcementType,
      km: km,
      year: year,
      price: price,
      plate: plate,
      vehicleType: vehicleType,
      published: published,
    },
  });

  return newAnnoucement;
};
