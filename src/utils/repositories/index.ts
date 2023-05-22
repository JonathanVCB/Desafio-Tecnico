import appDataSource from "../../data-source";
import { Point, User } from "../../entities";
import { Place } from "../../entities/places.entity";

const userRepo = appDataSource.getRepository(User);
const placeRepo = appDataSource.getRepository(Place);
const pointRepo = appDataSource.getRepository(Point);

export { userRepo, placeRepo, pointRepo };
