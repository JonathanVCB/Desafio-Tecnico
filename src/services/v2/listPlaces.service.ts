import { IPlace } from "../../interfaces/place";
import { placeRepo } from "../../utils/repositories";

const listPlacesService = async (): Promise<IPlace[]> => {
  const places = await placeRepo.find();

  return places;
};

export default listPlacesService;
