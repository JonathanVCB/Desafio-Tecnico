import appDataSource from "../../data-source";
import { Point, Polygon, User, Place } from "../../entities";

const userRepo = appDataSource.getRepository(User);
const placeRepo = appDataSource.getRepository(Place);
const pointRepo = appDataSource.getRepository(Point);
const polygonRepo = appDataSource.getRepository(Polygon);

export { userRepo, placeRepo, pointRepo, polygonRepo };
