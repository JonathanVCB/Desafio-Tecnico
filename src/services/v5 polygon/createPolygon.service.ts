import { AppError } from "../../error/appError.error";
import { polygonRepo } from "../../utils/repositories";

export const createPolygonService = async (polygonData: any): Promise<any> => {
  const polygon = await polygonRepo.findOneBy({ name: polygonData.name });

  if (polygon) {
    throw new AppError("Place already registered", 409);
  }

  const newPolygon = polygonRepo.create(polygonData);

  await polygonRepo.save(newPolygon);

  return newPolygon;
};
