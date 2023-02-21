import {AppDataSource} from "../../data-source"
import { Announcement } from "../../entities/announcement.entity"

export const annoucementListService = async (id: string) => {
  const annoucementRepository = AppDataSource.getRepository(Announcement)

  const annoucements = await annoucementRepository.findOneBy({
    id,
  })

  return annoucements
}
