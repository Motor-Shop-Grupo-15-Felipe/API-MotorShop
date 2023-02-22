import { Request, Response } from "express"
import { updateCommentService } from "../../services/comment/updateComment.services"

const updateCommentController = async (req: Request, res: Response) => {
  const { description, tags } = req.body
  const userId = req.params.id

  const commentUp = await updateCommentService({ userId, description, tags })

  return res.status(200).json(commentUp)
}

export default updateCommentController
