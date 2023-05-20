import { AppError } from "../../error/appError.error";
import { IplaceWithDistanceResponse } from "../../interfaces/place";
import { placeRepo } from "../../utils/repositories";

export const distanceWithRadiusPlaceService = async (
  latitude: any,
  longitude: any,
  radius: any
): Promise<IplaceWithDistanceResponse[]> => {
  const places = await placeRepo
    .createQueryBuilder("place")
    .where(
      `
        (
          (CAST(:lat AS double precision) - CAST(place.latitude AS double precision)) * (CAST(:lat AS double precision) - CAST(place.latitude AS double precision)) +
          (CAST(:lng AS double precision) - CAST(place.longitude AS double precision)) * (CAST(:lng AS double precision) - CAST(place.longitude AS double precision))
        ) <= CAST(:radius AS double precision) * CAST(:radius AS double precision)
      `,
      { lat: latitude, lng: longitude, radius: radius }
    )
    .getMany();

  const placesWithDistance = places.map((place) => ({
    ...place,
    distance: Math.sqrt(
      (latitude - Number(place.latitude)) ** 2 +
        (longitude - Number(place.longitude)) ** 2
    ),
  }));

  return placesWithDistance;
};
