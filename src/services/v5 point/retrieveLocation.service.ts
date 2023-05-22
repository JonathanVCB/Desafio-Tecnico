import { AppError } from "../../error/appError.error";
import { ILocation } from "../../interfaces/location";
import { pointRepo } from "../../utils/repositories";

export const retrieveLocationService = async (
  placeId: string
): Promise<ILocation> => {
  const location = await pointRepo.findOneBy({ id: placeId });

  if (!location) {
    throw new AppError("Place not found!", 404);
  }

  return location;
};
