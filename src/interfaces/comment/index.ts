export interface ICommentRequest {
  userId?: string
  description: string
  tags: string
}

export interface ICommentDelete {
  commentId: string
}

export interface ICommentUpdate {
  userId: string
  description?: string
  tags: string
}
