import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import getUserByIDService from "../../services/users/getUserByID.services";

const getUserByIDController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const userListed = await getUserByIDService(id);
  return res.json(instanceToPlain(userListed));
};
export default getUserByIDController;
