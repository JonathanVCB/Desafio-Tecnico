import { polygonRepo } from "../../utils/repositories";

export const listPolygonService = async (): Promise<any> => {
  const polygons = await polygonRepo.find();

  return polygons;
};
