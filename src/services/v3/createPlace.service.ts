import { AppError } from "../../error/appError.error";
import { IPlace, IPlaceRequest } from "../../interfaces/place";
import { placeRepo } from "../../utils/repositories";

export const createPlaceService = async (
  placeData: IPlaceRequest
): Promise<IPlace> => {
  const place = await placeRepo.findOneBy({ name: placeData.name });

  if (place) {
    throw new AppError("Place already registered", 409);
  }

  const newPlace = placeRepo.create(placeData);

  await placeRepo.save(newPlace);

  return newPlace;
};
