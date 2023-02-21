import { Request, Response } from "express";
import loginUserService from "../../services/sessions/logInUser.services";

const logInUserController = async (req: Request, res: Response) => {
  const data = req.body;
  const token = await loginUserService(data);
  return res.json({ token });
};
export default logInUserController;
