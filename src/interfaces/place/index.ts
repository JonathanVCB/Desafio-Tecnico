export interface IPlace {
  id: string;
  name: string;
  latitude: string;
  longitude: string;
}
export interface IPlaceRequest {
  name: string;
  latitude: string;
  longitude: string;
}

export interface IPlaceUpdateRequest {
  name?: string;
  latitude?: string;
  longitude?: string;
}

export interface IPlaceDistancetoResponse {
  distance: number;
}

export interface IplaceWithDistanceResponse {
  id: string;
  name: string;
  latitude: string;
  longitude: string;
  distance: number;
}
