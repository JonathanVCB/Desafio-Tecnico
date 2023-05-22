import { AppError } from "../../error/appError.error";
import { polygonRepo } from "../../utils/repositories";

export const deletePolygonService = async (polygonId: string) => {
  const polygonFound = await polygonRepo.findOneBy({ id: polygonId });

  if (!polygonFound) {
    throw new AppError("Polygon not found!", 404);
  }

  await polygonRepo.delete({ id: polygonId });

  return { message: "Polígono removido com sucesso!" };
};
