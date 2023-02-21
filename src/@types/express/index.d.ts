import * as express from "express"

declare global {
  namespace Express {
    interface Request {
      annoucement: {
        id: string
      }
      user:{
        id:string
      }
    }
  }
}
