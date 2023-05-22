import { ILocation } from "../../interfaces/location";
import { pointRepo } from "../../utils/repositories";

const listLocationsService = async (): Promise<ILocation[]> => {
  const locations = await pointRepo.find();

  return locations;
};

export default listLocationsService;
