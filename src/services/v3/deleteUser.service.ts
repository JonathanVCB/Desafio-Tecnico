import { AppError } from "../../error/appError.error";
import { placeRepo } from "../../utils/repositories";

export const deleteUserService = async (placeId: string) => {
  const placeFound = await placeRepo.findOneBy({ id: placeId });

  if (!placeFound) {
    throw new AppError("Place not found!", 404);
  }

  await placeRepo.delete({ id: placeId });

  return {};
};
