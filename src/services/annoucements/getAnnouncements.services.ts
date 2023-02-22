import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

export const announcementsList = async (): Promise<Announcement[]> => {
  const announcementRepo = AppDataSource.getRepository(Announcement);

  const announcements = await announcementRepo.find();

  return announcements;
};
