import { AppError } from "../../error/appError.error";
import { polygonRepo } from "../../utils/repositories";

export const retrievePolygonService = async (
  polygonId: string
): Promise<any> => {
  const polygon = await polygonRepo.findOneBy({ id: polygonId });

  if (!polygon) {
    throw new AppError("Place not found!", 404);
  }

  return polygon;
};
