import { AppDataSource } from "../../data-source"
import { Comment } from "../../entities/comment.entity"
import { AppError } from "../../errors/appErros"
import { ICommentUpdate } from "../../interfaces/comment"

export const updateCommentService = async ({
  userId,
  description,
  tags,
}: ICommentUpdate) => {
  const commentRepository = AppDataSource.getRepository(Comment)

  const comment: Comment | null = await commentRepository.findOneBy({
    id: userId,
  })

  if (!comment) {
    throw new AppError(404, "Comment not found")
  }

  await commentRepository.update(userId, {
    description: description,
    tags: tags,
  })

  const commentUp = await commentRepository.findOneBy({ id: userId })

  return commentUp
}
