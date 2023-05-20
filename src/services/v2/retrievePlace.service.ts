import { AppError } from "../../error/appError.error";
import { IPlace } from "../../interfaces/place";
import { retrievePlaceSchema } from "../../schemas/user/userCreateRequest.schema";
import { placeRepo } from "../../utils/repositories";

export const retrievePlaceService = async (
  placeId: string
): Promise<IPlace> => {
  const place = await placeRepo.findOneBy({ id: placeId });

  if (!place) {
    throw new AppError("Place not found!", 404);
  }

  const carValidated = await retrievePlaceSchema.validate(place, {
    stripUnknown: true,
  });

  return carValidated;
};
