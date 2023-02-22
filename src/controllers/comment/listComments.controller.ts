import { instanceToPlain } from "class-transformer"
import { Request, Response } from "express"
import { listCommentsService } from "../../services/comment/listComments.services"

export const listCommentsController = async (req: Request, res: Response) => {
  const userId = req.user.id

  const commentsUser = await listCommentsService(userId)

  return res.json(instanceToPlain(commentsUser))
}
