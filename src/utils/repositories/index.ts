import appDataSource from "../../data-source";
import { User } from "../../entities";
import { Place } from "../../entities/places.entity";

const userRepo = appDataSource.getRepository(User);
const placeRepo = appDataSource.getRepository(Place);

export { userRepo, placeRepo };
