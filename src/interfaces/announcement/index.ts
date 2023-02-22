import { Image } from "../../entities/image.entity";

export interface IAnnouncement {
  announcementType: string;
  title: string;
  year: number;
  km: number;
  price: number;
  plate: string;
  description: string;
  vehicleType: string;
  published: boolean;
  images?: string[];
}

export interface IAnnouncementWithUser extends IAnnouncement {
  userId: string;
}

export interface IAnnouncementsRequest {
  announcementType?: string;
  title?: string;
  year?: number;
  km?: number;
  price?: number;
  description?: string;
  vehicleType?: string;
  published?: boolean;
  images: string[];
}
