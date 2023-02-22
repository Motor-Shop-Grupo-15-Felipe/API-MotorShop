import { AppDataSource } from "../../data-source"
import { Comment } from "../../entities/comment.entity"
import { User } from "../../entities/users.entity"
import { AppError } from "../../errors/appErros"
import { ICommentRequest } from "../../interfaces/comment"

export const createCommentService = async (
  userId: string,
  { description, tags }: ICommentRequest
) => {
  const commentRepository = AppDataSource.getRepository(Comment)
  const userRepository = AppDataSource.getRepository(User)

  const findUser = await userRepository.findOneBy({ id: userId })

  if (!findUser) {
    throw new AppError(404, "User not found")
  }

  if (description.length < 1) {
    throw new AppError(400, "Make a comment")
  }

  const newComment = commentRepository.create({
    user: { id: userId },
    description,
    tags,
  })
  await commentRepository.save(newComment)

  return newComment
}


