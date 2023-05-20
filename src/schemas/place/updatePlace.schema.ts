import * as yup from "yup";
import { IPlaceRequest } from "../../interfaces/place";

export const updatePlaceRequestSchema: yup.SchemaOf<IPlaceRequest> = yup
  .object()
  .shape({
    name: yup.string().notRequired(),
    latitude: yup.string().notRequired(),
    longitude: yup.string().notRequired(),
  });
