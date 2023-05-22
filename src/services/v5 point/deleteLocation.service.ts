import { AppError } from "../../error/appError.error";
import { pointRepo } from "../../utils/repositories";

export const deleteLocationService = async (locationId: string) => {
  const locationFound = await pointRepo.findOneBy({ id: locationId });

  if (!locationFound) {
    throw new AppError("Place not found!", 404);
  }

  await pointRepo.delete({ id: locationId });

  return { message: "lugar removido com sucesso!" };
};
