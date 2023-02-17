import AppDataSource from "../../data-source"
import { Announcement } from "../../entities/announcement.entity"
import {
  IAnnoucement,
  IAnnoucementRequest,
} from "../../interfaces/announcement"
import { AppError } from "../../errors/appErros"

export const annoucementCreateService = async ({
  name,
  description,
  owner_name,
  km,
  year,
  price,
  createdAt
}: IAnnoucementRequest): Promise<IAnnoucement> => {
  const annoucementRepository = AppDataSource.getRepository(Announcement)

  const newAnnoucement = new Announcement()
  newAnnoucement.name = name
  newAnnoucement.description = description
  newAnnoucement.owner_name = owner_name
  newAnnoucement.km = km
  newAnnoucement.year = year
  newAnnoucement.price = price
  newAnnoucement.createdAt = createdAt

  const annoucementExist = await annoucementRepository.findOne({
    where: { name: name },
  })

  if (annoucementExist) {
    throw new AppError(400, "Annoucement already exists")
  }

  annoucementRepository.create(newAnnoucement)
  await annoucementRepository.save(newAnnoucement)

  return newAnnoucement
}
