import { AppError } from "../../error/appError.error";
import { polygonRepo } from "../../utils/repositories";

export const updatePolygonService = async (
  polygonId: string,
  polygonData: any
): Promise<any> => {
  const polygonFound = await polygonRepo.findOneBy({
    id: polygonId,
  });

  if (!polygonFound) {
    throw new AppError("Polygon not found!", 404);
  }

  const updatedPolygon = polygonRepo.create({
    ...polygonFound,
    ...polygonData,
  });

  await polygonRepo.save(updatedPolygon);

  return updatedPolygon;
};
