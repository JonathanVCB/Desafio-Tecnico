import { AppError } from "../../error/appError.error";
import { pointRepo } from "../../utils/repositories";

export const updateLocationService = async (
  locationId: string,
  locationData: any
): Promise<any> => {
  const locationFound = await pointRepo.findOneBy({
    id: locationId,
  });

  if (!locationFound) {
    throw new AppError("User not found!", 404);
  }

  const updatedLocation = pointRepo.create({
    ...locationFound,
    ...locationData,
  });

  await pointRepo.save(updatedLocation);

  return updatedLocation;
};
