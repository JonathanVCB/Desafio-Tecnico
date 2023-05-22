import { AppError } from "../../error/appError.error";
import { pointRepo } from "../../utils/repositories";

export const createLocationService = async (
  locationData: any
): Promise<any> => {
  console.log(locationData);
  const location = await pointRepo.findOneBy({ name: locationData.name });

  if (location) {
    throw new AppError("Place already registered", 409);
  }

  const newLocation = pointRepo.create(locationData);

  await pointRepo.save(newLocation);

  return newLocation;
};
