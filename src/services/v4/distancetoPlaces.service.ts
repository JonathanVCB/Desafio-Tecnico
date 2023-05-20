import { AppError } from "../../error/appError.error";
import { IPlaceDistancetoResponse } from "../../interfaces/place";
import { placeRepo } from "../../utils/repositories";

export const distancetoPlaceService = async (
  placeId1: string,
  placeId2: string
): Promise<IPlaceDistancetoResponse> => {
  const placeFound1 = await placeRepo.findOneBy({
    id: placeId1,
  });

  const placeFound2 = await placeRepo.findOneBy({
    id: placeId2,
  });

  if (!placeFound1) {
    throw new AppError("Place not found!", 404);
  }

  if (!placeFound2) {
    throw new AppError("Place not found!", 404);
  }

  const x1 = Number(placeFound1.latitude);
  const x2 = Number(placeFound2.latitude);
  const y1 = Number(placeFound1.longitude);
  const y2 = Number(placeFound2.longitude);

  const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

  return { distance: distance };
};
