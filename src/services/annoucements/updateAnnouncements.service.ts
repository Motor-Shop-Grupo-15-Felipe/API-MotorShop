import AppDataSource from "../../data-source"
import { Announcement } from "../../entities/announcement.entity"
import { AppError } from "../../errors/appErros"
import { IAnnouncementsRequest } from "../../interfaces/announcement"

export const updateAnnouncement = async({
    announcementType,
    title,
    year,
    km,
    price,
    description,
    vehicleType,
    published,
    images,
}: IAnnouncementsRequest,
    id: string) => {
    
    const announcementRepo = AppDataSource.getRepository(Announcement)

    const findAnnouncement = await announcementRepo.findOneBy({ id })
    
    // const imageRepo = AppDataSource.getRepository(Image)

    if (!findAnnouncement) {
        throw new AppError(404, "Announcement not found")
    }

    await announcementRepo.update(id, {
        announcementType:announcementType ? announcementType: findAnnouncement.announcementType,
        title:title ? title: findAnnouncement.title,
        year:year ? year: findAnnouncement.year,
        km:km ? km: findAnnouncement.km,
        price:price ? price: findAnnouncement.price,
        description:description ? description: findAnnouncement.description,
        vehicleType:vehicleType ? vehicleType: findAnnouncement.vehicleType,
        published:published ? published: findAnnouncement.published
    })

   

    // if (images) {
    //     for (let i = 0; i < images.length; i++){
    //         const image = images[i]

    //         const carImage = imageRepo.create({
    //             imageUrl: image,
    //             announcement: announcementRepo!,
    //             type: i === 0 ? "COVER" : "GALLERY"
    //         });

    //         await imageRepo.save(carImage)

    //         if (i + 1 === images.length) {
    //             return await announcementRepo.findOne({
    //                 where: {
    //                     id: id
    //                 }
    //             })
    //         }
    //     }
    // }

    const announcementResponse = await announcementRepo.findOneBy({id})

    return announcementResponse
}