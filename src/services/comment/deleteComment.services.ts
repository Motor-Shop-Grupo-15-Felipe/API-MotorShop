import { AppDataSource } from "../../data-source"
import { Comment } from "../../entities/comment.entity"
import { AppError } from "../../errors/appErros"

const deleteCommentService = async (id: string) => {
  const commentRepository = AppDataSource.getRepository(Comment)

  const comment: Comment | null = await commentRepository.findOneBy({ id: id })

  if (!comment) {
    throw new AppError(404, "Comment not found!")
  }

  commentRepository.delete(comment)
}

export default deleteCommentService
