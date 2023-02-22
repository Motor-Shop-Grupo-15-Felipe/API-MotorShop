import { Router } from "express"
import { createCommentController } from "../../controllers/comment/createComment.controller"
import { listCommentsController } from "../../controllers/comment/listComments.controller"
import updateCommentController from "../../controllers/comment/updateComment.controller"
import deleteCommentController from "../../controllers/comment/deleteComment.controller"

const commentsRoutes = Router()

export const routesComments = () => {
  commentsRoutes.post("", createCommentController)
  commentsRoutes.get("/users/:id", listCommentsController)
  commentsRoutes.patch("/:id", updateCommentController)
  commentsRoutes.delete("/:id", deleteCommentController)

  return commentsRoutes
}
