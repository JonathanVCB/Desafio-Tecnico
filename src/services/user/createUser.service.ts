import { AppError } from "../../error/appError.error";
import { IUserRequest, IUserResponse } from "../../interfaces/user";
import { userCreateResponseSchema } from "../../schemas/user";
import { userRepo } from "../../utils/repositories";

export const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const user = await userRepo.findOne({
    where: {
      email: userData.email,
    },
  });

  if (user) {
    throw new AppError("E-mail already registered", 409);
  }

  const newUser = userRepo.create(userData);

  await userRepo.save(newUser);

  const userWithoutPassword = await userCreateResponseSchema.validate(newUser, {
    stripUnknown: true,
  });

  return userWithoutPassword;
};
