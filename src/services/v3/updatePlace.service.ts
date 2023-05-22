import { AppError } from "../../error/appError.error";
import { IPlaceUpdateRequest } from "../../interfaces/place";
import { placeRepo } from "../../utils/repositories";

export const updatePlaceService = async (
  placeId: string,
  placeData: IPlaceUpdateRequest
): Promise<IPlaceUpdateRequest> => {
  const placeFound = await placeRepo.findOneBy({
    id: placeId,
  });

  if (!placeFound) {
    throw new AppError("User not found!", 404);
  }

  const updatedPlace = placeRepo.create({
    ...placeFound,
    ...placeData,
  });

  await placeRepo.save(updatedPlace);

  return updatedPlace;
};
